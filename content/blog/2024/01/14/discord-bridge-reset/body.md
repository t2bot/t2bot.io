---
# You don’t need to declare anything in the frontmatter
---

# Unintended reset on the Discord bridge

<small><i>January 14th, 2024 by TravisR</i></small>

Hello everyone,

At approximately 21:00 UTC on January 13th, 2024 the t2bot.io Discord bridge deleted *all* channel associations. It's not clear what specifically caused this to happen, however based on the data available it appears as though the bot lost visibility on the Discord channels and so thought they were deleted, leading to the bot unbridging everything itself as a cleanup step.

Unfortunately, t2bot.io's database backup strategy does not cover this eventuality very well and so manual restoration of the channel associations is not possible.

There are no indications of t2bot.io's systems being accessed or experiencing otherwise malicious behaviour.

I am very sorry this happened. The bot's code is being reviewed while infrastructure changes are being put in place to reduce the impact of similar incidents in the future.

If you would like to re-bridge your rooms and channels, please follow the instructions [here](/discord). Some Discord servers have seen the bot being removed for unknown reasons - it may need to be added back with the link in step 2.

The remainder of this blog post covers technical details for those interested, covering the failure mode itself as well as the infrastructure failures leading to the extended downtime and inability to recover. If you have any questions about t2bot.io's infrastructure, or run into issues re-bridging, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) on Matrix.

## Timeline

* January 13th, 2024 - 21:00 UTC - Discord bridge database traffic increases as `DELETE` queries are replicated and persisted.
* January 13th, 2024 - 21:03 UTC - Discord bridge end-to-end monitoring stops working.
* January 13th, 2024 - 21:15 UTC - Traffic levels across Synapse fall by approximately 2Hz.
* January 14th, 2024 - 06:00 UTC - Routine check on t2bot.io's vital metrics.
* January 14th, 2024 - 06:15 UTC - Issue identified with Discord bridge.
* January 14th, 2024 - 06:24 UTC - Manual fix verified.
* January 14th, 2024 - 06:30 UTC - End-to-end monitoring re-established; Attempts to restore database backups underway.
* January 14th, 2024 - 07:08 UTC - Incident blog post started.
* January 14th, 2024 - 08:01 UTC - Ticket opened with Discord to investigate possible cause.
* January 14th, 2024 - 08:25 UTC - Status update provided to community in #help and #status.
* January 14th, 2024 - 09:27 UTC - Database backups determined to be unusable.
* January 14th, 2024 - 11:30 UTC - Blog post published.

Of particular note in this timeline is the issue being identified due to a routine check rather than an automated page. t2bot.io's infrastructure is monitored, however due to noise in the data some alerts require significant time before they will fire. This is explored later on in this blog post.

## Discord bridge channel cleanup feature

The Discord bridge has a feature where it will unbridge a room from a channel if it gets an indication that association is no longer able to proceed. This is only invoked when the Discord channel is deleted or when the Matrix room gets encryption enabled.

The bridge does *not* unbridge the channel if there's a temporary issue with sending/receiving messages or while doing other operations. It must be told specifically that the Discord channel was deleted, or that encryption was actually enabled.

When the bridge decides to unbridge because the Matrix room enabled encryption, the bot informs the room that it can no longer function then proceeds to delete the association from its database. When a Discord channel is deleted, the bot deletes the association without notification to the channel or room (it is assumed that the user performing the delete is expecting the bridge to be severed).

t2bot.io did not see a rise in traffic consistent with encryption being mass-enabled across all rooms. This points to the issue most likely being Discord telling the bot that channels were deleted, even though they weren't. It's not clear why Discord did this, but a ticket has been opened to see if there's further information available from the Discord side. Updates will be provided as they become available.

## Database structure

t2bot.io uses a PostgreSQL database cluster with 1 primary and 2 secondary servers, with the idea being that if there's ever a failure on the primary then there's always at least 1 secondary available to switch to. This is particularly needed as t2bot.io is volunteer-run, meaning it's not always possible to diagnose and repair a host at the time of failure. By having two secondary servers, either of those servers can be promoted to primary and still have a backup for itself, allowing investigation of the failed server to happen at a more convenient time (such as the next morning instead of restoring the safety net at 2am).

PostgreSQL also supports point-in-time recovery, where assuming there's a suitable snapshot and the WAL files which follow available, it's possible to recover the database up to a given point in time. This only works if the snapshot is *before* the failure *and* all of the WAL files between that snapshot and the recovery point are present.

That is the key distinction: PostgreSQL does *not* support rewinding a snapshot to a time before that snapshot was made. In addition to having host redundancy, the other theory with two secondary servers was that it would be possible to take one offline and rewind it if needed, such as in the case of a bridge deleting all of its association data. However, both secondary servers (set up with streaming replication) ultimately keep their snapshot up to date within approximately 10 milliseconds. 10 milliseconds is not a very long time if recovery needs to be initiated.

To extend that window, one of t2bot.io's secondary servers has now been configured with a 24 hour delay on applying WAL files to its snapshot. This ensures the snapshot can be used to move around in the event data needs to be recovered.

More information about this new setup can be found in a [2019 post from GitLab](https://about.gitlab.com/blog/2019/02/13/delayed-replication-for-disaster-recovery-with-postgresql/).

GitLab's blog post also mentions the importance of cold storage backups. Up until now, t2bot.io has been running without such backups due to the size of the database and costs associated with storing the incremental snapshots for a suitably long time. This is changing in the coming weeks, though the specific details are not yet decided.

## Monitoring (and why it didn't work)

t2bot.io currently has about 250 thousand monthly active users which all expect that their messages will be delivered over the bridges. Metrics such as message latency, throughput, and bridge uptime are all measured for anomalies. If any of these metrics show trouble, an alert is fired to prompt investigation.

Alerts are not fired until there's significant evidence of an issue though. A large window of data is required to smooth out regular issues with the bridges, which unfortunately means issues can take several hours to detect. This is supplemented by manually looking at vital metrics regularly to identify irregular patterns which averging functions are unable to detect themselves.

In this incident, two alerts *should* have fired but didn't for different reasons. The first is the low traffic alert which should have picked up on the 2Hz drop in traffic and notified someone about it, but due to the noise mentioned above, this alert takes about 12 hours to go off. The other alert is the end-to-end monitoring t2bot.io has in place to measure the user experience latency on the bridge. The monitoring did correctly identify an outage on the bridge within about 3 hours, though a bug in the alerting prevented that detail from being raised.

t2bot.io's monitoring infrastructure is continually being improved, and the bug with end-to-end monitoring here is already patched. A project is also underway to replace the Discord and Telegram bridges with options which fit t2bot.io's use case and scale a bit better. The replacements are a long way out, but when completed will help flatten several graphs and narrow the window needed to emit an alert.

## Conclusion

Overall, a random failure in what appears to be Discord's infrastructure caused the bridge to invoke its cleanup, and unfortunately the backup/recovery infrastructure wasn't in place on t2bot.io to correct the obvious mistake.

t2bot.io will be adopting better backup strategies over the next few weeks, on top of the changes already made to ensure there's short-term coverage in case this issue comes up again.

As always, if you have any questions about this, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) on Matrix.


\- TravisR, t2bot.io
