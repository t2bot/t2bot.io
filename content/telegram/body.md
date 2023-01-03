Your Telegram community can be bridged into Matrix with these steps:

1. In your Matrix room (creating one if required), invite [@telegram:t2bot.io](https://matrix.to/#/@telegram:t2bot.io)
   and wait for it to join.
2. On Telegram, invite `@matrix_t2bot` to the channel then run `/id` to get the channel's ID.
3. Back in your Matrix room, say `!tg bridge <the number>` - the bridge should then ask for confirmation.
4. Confirm the bridge and you'll be all set!

Anything that is said after the bridge has been confirmed will be brought over to the other side. If
you run into any issues with this, visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) on Matrix.

Giving the bridge moderator privileges in Matrix is preferred to ensure that bans, kicks, and
message deletion all continue to work as expected.

If you want to later disconnect the bridge, say `!tg unbridge` in the Matrix room.

<!-- <video src="https://prod.t2bot-cdn.com/t2bot-telegram.mp4" type="video/mp4" controls="true" poster="/assets/img/thumbnail-telegram-setup.png"></video> -->

The source of the bridge can be inspected [on github](https://github.com/t2bot/mautrix-telegram), though
if you're looking to run your own then we recommend [the upstream project](https://github.com/tulir/mautrix-telegram).

## FAQ

### 1. It keeps saying "invalid ID" - what is going on?

Usually this means that the Telegram ID looks a bit weird to the bot. Try running the `/id` command in your Telegram
chat again and copy/pasting the ID (including the `-` (negative) sign) into the command. For example, `!tg bridge -1234`

### 2. How many Telegram channels can I bridge?

As many as you'd like! The only requirement is that you need to be a moderator/admin of the Telegram chat to bridge it
to Matrix. Repeat the steps above as many times as required to bring all of your communities to Matrix.

### 3. It isn't joining the Matrix room, what do I do?

There is a known bug where sometimes it fails to accept your invite. Keep trying, or visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) to have a t2bot.io admin force-join it to the room.

### 4. It isn't doing anything when I say the command on Matrix, what can I do?

Make sure the room isn't encrypted, and that the bot has joined the room. If the room is encrypted then the bot will
not be able to see your messages - you will have to create a new room and try again. If the bot hasn't joined the
room, see Question 3.

### 5. It's working in one direction, but not the other. Help!

Typically this happens when the Telegram side is an announcement channel: the bridge isn't capable of supporting these
very well due to Telegram limitations. If you do have ideas/steps for how this can work, let us know in [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) so we can update this document.

Otherwise, there may be a permissions issue or a general issue with the bot. Visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) for help.
