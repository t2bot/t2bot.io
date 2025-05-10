---
# You don’t need to declare anything in the frontmatter
---

Your Discord community can be bridged into Matrix with the following steps. Bridge as many channels as you like
by repeating the steps.

1. In your Matrix room (creating one if required), invite [@_discord_bot:t2bot.io](https://matrix.to/#/@_discord_bot:t2bot.io)
   and wait for it to join.
2. Use [this link](https://discordapp.com/api/oauth2/authorize?client_id=309408702530846730&scope=bot&permissions=607251456)
   to invite the bridge to your Discord server.
3. Open the text channel (voice isn't supported yet) in the Discord web application.
4. In the address bar there should be a URL like `https://discordapp.com/channels/ServerID/ChannelID` - use
   that as a reference to say in your Matrix room `!discord bridge ServerID ChannelID`.
5. The bridge will ask for confirmation from the Discord server admins to complete the bridge. Once approved,
   you're all set.

Anything that is said after the bridge has been confirmed will be brought over to the other side. If
you run into any issues with this, visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) on Matrix.

Giving the bridge moderator privileges in Matrix is preferred to ensure that bans, kicks, and
message deletion all continue to work as expected.

If you want to later disconnect the bridge, say `!discord unbridge` in the Matrix room. You may have to manually
revoke permissions from the bot on the Discord side.

The source of the bridge can be inspected [on github](https://github.com/t2bot/matrix-appservice-discord), though
if you're looking to run your own then we recommend [the upstream project](https://github.com/half-shot/matrix-appservice-discord).

## FAQ

### 1. Can I bridge more than one channel?

Absolutely! Repeat the steps above as many times as you'd like.

### 2. Can two or more channels be bridged to one Matrix room?

Not at the moment, unfortunately. This ends up confusing the bridge, so is not possible with t2bot.io

### 3. It isn't joining the Matrix room, what do I do?

There is a known bug where sometimes it fails to accept your invite. Keep trying, or visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) to have a t2bot.io admin force-join it to the room.

### 4. It isn't doing anything when I say the command on Matrix, what can I do?

Make sure the room isn't encrypted, and that the bot has joined the room. If the room is encrypted then the bot will
not be able to see your messages - you will have to create a new room and try again. If the bot hasn't joined the
room, see Question 3.

### 5. It's working in one direction, but not the other. Help!

This is usually a permissions issue. Verify that the bot is allowed to see the channel on Discord, and that it has permission to manage webhooks and send messages. On Matrix, verify that the room is not encrypted, the bot has joined it, and its role is at least a moderator (power level 50+).

### 6. What are all of the available commands?

You can view a list of all available commands with `!discord help` in a Matrix room or with `!matrix help` in a Discord channel.
Keep in mind, that only commands which you have permission to execute will be shown.
