---
# You don’t need to declare anything in the frontmatter
---

# Email Notifications Bot

This bot posts a message in your room when it receives an email for that room. This is most used for announcement
purposes where the room should be receiving newsletters or other emails without the ability to respond. If you're
looking for two-way communication, try the [Email Bridge](/email) instead.

The source code for the bot is available on [Github](https://github.com/turt2live/matrix-email-bot).


## Setting up the bot

Currently the bot needs to be configured by t2bot.io administrators to reduce spam. In future, it will be possible
to configure this bot yourself however for now the following steps apply:

1. Invite [@email:t2bot.io](https://matrix.to/#/@email:t2bot.io) to the room you want to receive notifications in.
2. Get your room's internal ID. In Riot, this can be done by going to the room settings then the "Advanced" tab.
3. Start a private chat with [@travis:t2l.io](https://matrix.to/#/@travis:t2l.io) and say you'd like to set up the
   email notifications bot. Please be patient as your request is going to be handled by a human.
4. Some follow up questions may be asked, such as who should be allowed to trigger the bot. After configuration,
   you'll receive the email address for the room for testing/subscribing to your newsletter.

## Removing the bot from your room

Please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) for help in fully removing the bot from your room.
