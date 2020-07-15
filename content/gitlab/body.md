---
# You don’t need to declare anything in the frontmatter
---

# Gitlab Bot

A bot for showing Gitlab activity in your Matrix room and for interacting with your Gitlab repositories.

The source code for the bot is available on [Github](https://github.com/maubot/gitlab).


## Getting notifications in your room

Apply the following steps:

1. Invite [@gitlab:t2bot.io](https://matrix.to/#/@gitlab:t2bot.io) to your room.
2. Log in to gitlab.com and open your repository's integration settings.
3. For the URL, put `https://t2bot.io/gitlab/webhooks?room=!your_room_id`. Your room ID can be found on the "Advanced"
   tab of your room settings in Element.
4. For the Secret Token, put `t2bot`
5. Check off the triggers you'd like to have in your room and click "Add webhook". Although not all are handled, many
   do result in notifications to your room.

To later remove the bot from your room, delete the webhook in gitlab.com and kick the bot from the room.

## Managing your repositories with the bot

The bot has several commands to do things like create issues which require access to your Gitlab account.

1. Invite [@gitlab:t2bot.io](https://matrix.to/#/@gitlab:t2bot.io) to a **private chat**.
2. Log in to gitlab.com and go to your account settings. Once there, click "Access Tokens" on the left side.
3. Generate a new access token with a name and optional expiration date. Ensure the token has all available scopes
   assigned. These are required so that it can create issues and such on your behalf.
4. In your private chat with the bot, say `!gitlab login your_access_token`
5. If successful, say `!gitlab help` to see what the bot can do.
