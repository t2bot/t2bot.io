---
# You don’t need to declare anything in the frontmatter
---

# Facebook Messenger

<div class="beta-warning">

**Caution**: This bridge is still very young. There may be bugs, missing features, or problems using it.

</div>

For help with the Facebook Messenger bridge, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io)
on Matrix.

The source code for the bridge is available at [t2bot/mautrix-facebook](https://github.com/t2bot/mautrix-facebook)
on Github, although if you are looking to run your own we recommend using the upstream repository
from [tulir/mautrix-facebook](https://github.com/tulir/mautrix-facebook).


## Logging in with your Facebook account

This bridge does not have relay support and therefore users must authenticate in order to make use of the bridge.
Group chats cannot be bridged to rooms because Facebook does not expose the required API to do so.

1. Invite [@messenger:t2bot.io](https://matrix.to/#/@messenger:t2bot.io) to a **private chat**.
2. Say `!fb login <email> <password>` - for example, `!fb login youremail@example.org passw0rd`. The bridge may ask
   you for further information like a 2FA login code.
3. Shortly after, the bridge should be ready to go. When your contacts message you, the bridge should invite you
   to new rooms.

It currently is not possible to log out without manual intervention from the bridge operator - this is to be fixed
in the future.
