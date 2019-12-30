---
# You don’t need to declare anything in the frontmatter
---

# Alias Bot

<div class="beta-warning">

**Note**: This bot shouldn't be needed anymore.

</div>

This bot allows you to create aliases on the t2bot.io domain for future reference. In general, this is most
useful to ensure your room has multiple ways for people to enter in the event the server hosting the primary
alias goes down.

For example, if you had `#mycoolroom:matrix.org` as your room's alias, you'd be reliant on matrix.org being
online for people to join. If for whatever reason matrix.org went down, you could set up `#ab-mycoolroom:t2bot.io`
so that prospective members can still get in.

The source for this bot is available on [Github](https://github.com/turt2live/matrix-alias-bot).


## Adding an alias to your room

1. Invite [@alias:t2bot.io](https://matrix.to/#/@alias:t2bot.io) to your room.
2. Say `!alias #ab-YourAlias`, replacing `YourAlias` with the alias you wish to add.

## Removing an alias from your room

1. Invite [@alias:t2bot.io](https://matrix.to/#/@alias:t2bot.io) to your room if it isn't already joined.
2. Say `!alias remove #ab-YourAlias`
