---
# You don’t need to declare anything in the frontmatter
---

# June 2020 database outage post-mortem

Hi all,

On June 17th, 2020 at approximately 18:00 UTC t2bot.io went down for a critical and major infrastructure failure, resulting in a 5 day
outage. As of writing (June 23rd, 01:30 UTC), t2bot.io is still recovering from the last 5 days and several thousands of messages are
being processed. During this outage, updates were provided regularly to [#status:t2bot.io](https://matrix.to/#/#status:t2bot.io) (or
[#t2botstatus:matrix.org](https://matrix.to/#/#t2botstatus:matrix.org) when t2bot.io is offline) as well as the status of the service
largely being reflected on [status.t2bot.io](https://status.t2bot.io), however this post summarizes the detail of what happened. We
apologize for the major disruption to all of the communities impacted by this outage - we are looking at ways to improve resiliency
and redundancy to ensure that major outages do not happen, and that minor incidents can be resolved quickly and with the priority
they deserve.

This outage was directly related to corruption within the PostgreSQL database responsible for Synapse, however the damage to the database
was caused some time back and was not detected as a major issue. To provide some background information: t2bot.io operates the PostgreSQL
cluster in a hot standby structure, where a single (primary) server is responsible for all application reads and writes and a single hot
standby is waiting in the event that something goes wrong on the primary and applications need to fail over to it. This typically allows
for minimal downtime, however in this particular incident a decision was made to not switch over to the secondary hot standby server out
of concern for data integrity (more on that later).

Way back on August 2nd, 2019 t2bot.io suffered a multi-hour outage while the primary database flickered offline. After some effort, it was
brought back online however it failed again on August 7th, 2019 due to failed disks. The database servers t2bot.io deploys are configured
such that individual disk failure does take out the entire host, however the standby host and fast remediation by the service provider meant
that downtime was minimized to the same effort it would have taken to recover the disks on the failed host. Later in the day on August 7th,
2019 a new secondary server was deployed (as the existing secondary was now the primary), however some minor transaction corruption occurred
in the process that went undetected at first. This is where everything started to fall apart.

The corruption was later discovered and believed to be remediated, leading to no further repairs being needed. This was, in hindsight, an
incomplete solution as a single step which would have prevented last week’s outage was missed, creating a time bomb waiting to go off. That
step was to ensure that the database was actually recovered and not stuck in it’s partially-failed state.

In February 2020 when the database cluster was upgraded to entirely new hosts to resolve some IO bottlenecks, the corruption persisted across
the migration. The new primary host was unaffected but the secondary standby had troubles staying online as a result. The new standby server
was rebuilt and patched over to ensure it would stay online in the event it was needed, however in late March 2020 the corruption from August
2019 was discovered as not fixed. It was patched once again with a note to take a look at it in the future. In May 2020 it was once again looked
at and determined to still be an issue, however of low risk.

Due to other priorities (the sole maintainer of t2bot.io works on quite a few projects), a distant future date of June 28th was set to identify
the steps forward for fixing the corruption issues with remediation planned for the weekend after. Unfortunately, the database couldn’t wait
that long and failed before then, as evidenced by this post.

During the February 2020 to June 2020 period, PostgreSQL was stacking transactions without indication of any problems. Once PostgreSQL hits
one million stacked transactions, it prevents all writes to avoid wraparound conditions, which is exactly what happened on June 17th at around
18:00 UTC. A temporary fix for this would have been to increase the number of transactions that could be stacked before writes are blocked,
however it was clear that this would have only delayed the inevitable.

At 18:30 UTC it was determined that the database needed to come completely offline to root out any corruption issues and an announcement was
made that the standby server would not be used. This took the form of putting a firewall between the primary and secondary servers as a precaution,
and shutting both down to start remediation efforts. The secondary was considered a backup in the event the primary could not be recovered or
recovery efforts went wrong.

For over an hour, transactions were being vacuumed (as the best advice at the time was to run the database in single-user mode and vacuum it
constantly) however it was becoming clear that t2bot.io would be down for months if that process continued. At 19:52 UTC the decision was made
to perform backups of the databases on the secondary server and restore the primary from those, then re-establish replication between the two,
which would have involved demolishing the standby after the primary was restored. During this backup process, additional investigation went into
what could be done and it was found that only the t2bot.io Synapse database was affected (the same database cluster is responsible for multiple
bridges and other homeservers) so the database was noted as to be dropped later in the recovery efforts.

The backups took until 02:50 UTC on June 18th, 2020 at which point the recovery transitioned into restoring the database on the defunct primary
server. The Synapse database for t2bot.io was dropped from the primary and recreated as an empty database. The firewall was then removed between
the two servers, and the primary was brought online normally (leaving the secondary offline). Once the primary was online, the backup from the
secondary was restored over to the now-empty database. It should be noted that the `pg_basebackup` command wasn’t used in this case as the secondary
appeared to be demonstrating symptoms of corruption as well, making the data stored within likely to not assist in solving the problem.

The restore finally completed at 05:00 UTC the following day, where 9 tables were indicating duplicate data, preventing the restore from completing
fully. The data which was duplicated was identified and possible solutions were chosen. Later in the day, the Synapse team was approached to get
help in figuring out if the corruption was recoverable. Luckily, most of the tables were simply fixed by removing the duplicate data and re-running
the indexes however the `state_groups` table also had duplicated data in it.

State groups are what Synapse uses to essentially identify what a room looks like at any particular time, such as who is a member, what the name
of the room is, etc. The duplication within the tables that store state groups was mixed together, causing 9 rooms to be impossible to separate,
rendering them mostly useless to try and use. Until 21:50 UTC a script was prepared to replicate Synapse’s history purge to try and remove the
corrupted data from the rooms from the advice of the Synapse team, however an hour of running it lead to a realization that it could actually make
the problem worse due to the last part of the script trying to re-establish what a room looks like. The process of re-establishing the state of
the room would have lead to further, uncorrectable, mixing of the rooms so the script was abandoned. The focus then shifted into identifying what
the 9 rooms were and what the impact would be of purging them completely from the server. Previous experiences of other homeserver administrators
indicated that Synapse deals with missing rooms fine, so it was considered safe to continue with this purge.

The 9 rooms appeared to be either unbridged, test rooms, or DMs that haven’t been used in a while for the most part. As a result, it was decided
that losing the rooms would have to be acceptable and efforts were underway to purge them.

Much of the following day (June 20th, 2020) was spent building a script that actually purged the rooms from the database, and by 08:35 UTC on June
21st, 2020 the rooms were purged. As part of the process, an additional 5 rooms had to be removed, making the total number of rooms lost 14 (or
0.002% of all known rooms to t2bot.io). At this point, Synapse was turned back on and left to try and process the backlog of messages from the previous
days.

Early on in this outage a new server was ordered to act as a new standby server so the existing standby server could keep its (partially corrupted)
copy of the database in the event of something going wrong. This meant that t2bot.io and all of its integrations were relying on the primary host not
failing as it would have reset progress to the very beginning, making this whole outage even worse. Thankfully, the primary server held up.

At 04:20 UTC on June 22nd, 2020 the new standby server was configured and ready to start taking replication data from the primary. This is a standard
setup of a streaming replication host for PostgreSQL, it just takes time to transfer the massive database to the new host. By 13:00 UTC the standby
was done copying data and was replicating the database in real time. At 22:00 UTC the database cluster and Synapse looked healthy enough to start turning
on integrations, and by 01:30 UTC June 23rd, 2020 all integrations were back online though with some lingering performance issues.

So, what could have gone better? If t2bot.io had 2 hot standbys instead of just one, it could have potentially failed over to one of them while the
other remained as a backup location. However, in this particular incident, this would not have helped due to the corruption being replicated to the
standbys. The corruption when identified late in 2019 should have been investigated further to ensure it was well and truly gone, however all indications
at the time indicated this to be true. Further experiencing issues relating to corruption were red flags, though the corruption appeared minor and could
wait until time was available to resolve it.

Now that t2bot.io is back online and corruption-free (we checked extensively this time), we’re building up new infrastructure to handle potential outages
in the future. In particular, the third server that became the new secondary standby is considered permanent now with the existing standby server being
rebuilt to be a tertiary standby location. This adds significant cost to the infrastructure, however it should allow for more safety in the event of the
primary host failing in the future. We’re also looking at ways of monitoring for corruption issues, such as identifying a stack of transactions or failures
to autovacuum tables - these issues are to be treated as high priority now, even if their impact appears minor.

Apologies to everyone impacted by this major disruption of services. While t2bot.io is volunteer-run by a single operator, it doesn’t diminish how many
communities will have been impacted by this incident. We seriously encourage larger communities to self-host their bridges and bots where possible to
avoid downtime like this, and to have better control over how those integrations work.


Thank you all for your patience,<br/>
Travis Ralston, t2bot.io


*In case you’re wondering why all the times are weird, t2bot.io is operated out of the Mountain timezone in North America which is currently UTC-6.
This leads to some strange-looking UTC times and many off-peak maintenance advantages.*
