---
# You don’t need to declare anything in the frontmatter
---

# Discord

For help with the Discord bridge, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io)
on Matrix.

The source code for the bridge is available at [t2bot/matrix-appservice-discord](https://github.com/t2bot/matrix-appservice-discord)
on Github, although if you are looking to run your own we recommend using the upstream repository
from [half-shot/matrix-appservice-discord](https://github.com/half-shot/matrix-appservice-discord).


## Adding the bridge to your room

1. Invite the bridge to your Discord server using [this link](https://discordapp.com/api/oauth2/authorize?client_id=309408702530846730&scope=bot&permissions=607251456).
   The bridge will need all the permissions selected.
2. Invite [@_discord_bot:t2bot.io](https://matrix.to/#/@_discord_bot:t2bot.io) to your Matrix
   room. The bot should have permissions to invite users.
3. Open the text channel you'd like to bridge in the Discord web application.
4. In the address bar there should be a URL like `https://discordapp.com/channels/ServerID/ChannelID` -
   use that as a reference to say in your Matrix room `!discord bridge ServerID ChannelID`
5. The bridge will ask for confirmation, and after approved your room should be bridged to Discord.

To disconnect the bridge later, say `!discord unbridge` in Matrix and follow the prompts. You may have
to revoke the bot's permissions in Discord manually.
