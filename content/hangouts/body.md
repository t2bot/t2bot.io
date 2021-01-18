---
# You don’t need to declare anything in the frontmatter
---

# Hangouts

For help with the Hangouts bridge, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io)
on Matrix.

The source code for the bridge is available at [t2bot/mautrix-hangouts](https://github.com/t2bot/mautrix-hangouts)
on Github, although if you are looking to run your own we recommend using the upstream repository
from [tulir/mautrix-hangouts](https://github.com/tulir/mautrix-hangouts).


## Logging in with your Hangouts account

This bridge does not have relay support and therefore users must authenticate in order to make use of the bridge.
Group chats cannot be bridged to rooms because Hangouts does not expose the required API to do so.

1. Invite [@hangouts:t2bot.io](https://matrix.to/#/@hangouts:t2bot.io) to a **private chat**.
2. Say `!hg login`
3. Click the link the bot gives you and follow the steps.
3. Shortly after, the bridge should be ready to go. When your contacts message you, the bridge should invite you
   to new rooms.

**It currently is not possible to log out**. This is to be fixed in the future.
