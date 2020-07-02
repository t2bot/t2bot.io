Your Telegram community can be bridged into Matrix using this Telegram bridge, however if you run
your own homeserver we recommend [running your own bridge](https://github.com/tulir/mautrix-telegram)
instead.

To get set up, you'll need to create a room on Matrix which you want to bridge. You'll also need
to have a Telegram group to bridge into Matrix. From Matrix, invite
[@telegram:t2bot.io](https://matrix.to/#/@telegram:t2bot.io) to the room and wait for it to join.

After it has joined, go to Telegram and invite `@matrix_t2bot` to the group then run the `/id`
command to get the group's ID. Copy the ID and return to Matrix, saying `!tg bridge <the number>` -
the bridge should ask for confirmation, and once confirmed will be enabled.

The bridge won't bring in messages from either side before the bridge was set up, however anything
new that is said should be sent to either side.

Giving the bridge moderator privileges in Matrix is preferred to ensure that bans, kicks, and
message deletion all continue to work as expected.

If you want to later disconnect the bridge, say `!tg unbridge` in the Matrix room.
