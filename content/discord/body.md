---
# You don’t need to declare anything in the frontmatter
---

Your Discord community can be bridged into Matrix with these steps:

1. In your Matrix room (creating one if required), invite [@_discord_bot:t2bot.io](https://matrix.to/#/@telegram:t2bot.io)
   and wait for it to join.
2. Use [this link](https://discordapp.com/api/oauth2/authorize?client_id=309408702530846730&scope=bot&permissions=607251456)
   to invite the bridge to your Discord gserver.
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
