---
# You don’t need to declare anything in the frontmatter
---

# Trello Bot

A bot for interacting with Trello and being told when some events happen.

The source code for the bot is available on [Github](https://github.com/turt2live/matrix-trello-bot).


## Adding the bot to your room

The bot needs to have permission to use your account in order to provide notifications to rooms about activity.

1. Invite [@trello:t2bot.io](https://matrix.to/#/@trello:t2bot.io) to a **private chat**.
2. Say `!trello login` to start the authorization process.
3. After authorizing the bot, invite [@trello:t2bot.io](https://matrix.to/#/@trello:t2bot.io) to the room you
   wish to receive notifications in or wish to manage your boards in.
4. Say `!trello watch https://trello.com/b/YourBoardId` or `!trello help` for more information.
