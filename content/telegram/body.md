---
# You don’t need to declare anything in the frontmatter
---

# Telegram

For help with the Telegram bridge, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io)
on Matrix.

The source code for the bridge is available at [t2bot/mautrix-telegram](https://github.com/t2bot/mautrix-telegram)
on Github, although if you are looking to run your own we recommend using the upstream repository
from [tulir/mautrix-telegram](https://github.com/tulir/mautrix-telegram).

## Adding the bridge to your room

1. Invite `@matrix_t2bot` to your Telegram group or channel.
2. In Telegram, send the `/id` command to get a number returned to you by the bridge.
3. Invite [@telegram:t2bot.io](https://matrix.to/#/@telegram:t2bot.io) to the room you want to bridge
   in Matrix. The bot should have permissions to invite users.
4. In Matrix, send the message `!tg bridge <the number>`. Example: `!tg bridge -23456789`
5. The bridge will ask you to confirm the bridge. Do this by sending the message `!tg continue`
6. Your room should now be bridged to Telegram.

To disconnect the bridge later, say `!tg unbridge` in Matrix and follow the prompts.


## Logging in with your Telegram account

**Note:** You do not need to log in to Telegram to bridge a room. The instructions above will help you
get a room bridged without logging in.

<div class="banner warning">

Telegram is currently banning accounts for logging in to the t2bot.io bridge for unknown reasons. As a
result, we have disabled the login page for the bridge until further notice. The instructions are kept
here as documentation reference only and will not work.

</div>

By default the bridge uses a "relay bot" for people who are not logged in to the bridge. This can lead
to confusion when the Telegram bridge posts lots of messages in your Telegram chats. By using your own
Telegram account, the bridge will send messages to chats with your account rather than the relay bot
when you talk on matrix. In addition to that, you also get invited to all current and future Telegram
chats - it's like using Telegram in Matrix!

1. Invite [@telegram:t2bot.io](https://matrix.to/#/@telegram:t2bot.io) to a **private chat**.
2. Send the message `!tg login`
3. Click the link and follow the instructions.
4. The bridge will now start inviting you to all your Telegram chats.

To log out, say `!tg logout` in the room you just created.
