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

The source of the bridge can be inspected [on github](https://github.com/t2bot/mautrix-telegram), though
if you're looking to run your own then we recommend [the upstream project](https://github.com/tulir/mautrix-telegram).
