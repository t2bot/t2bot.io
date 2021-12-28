---
# You don’t need to declare anything in the frontmatter
---

# Matrix Traveler (Voyager)

Voyager is a bot which travels the Matrix network, graphing its journeys. For the rooms it is joined
to, it watches messages for references to other rooms and tries to join them. Every room it discovers
is shown on [https://voyager.t2bot.io](https://voyager.t2bot.io).

The source code for the bot is available on [GitHub](https://github.com/turt2live/matrix-voyager-bot).


## Adding the bot to your room

Voayger may naturally discover your room through references, although the process can be sped up by inviting
the bot directly.

## Removing the bot from your room / Delisting a room from the public map

Kicking or banning the bot will prevent it from listing your room on the public map. If you never want the
bot to rejoin, please ban it. If you want to just remove the bot from the room without removing the room
from the public map, say `!voyager leave`.

## Stopping the bot from reading what you say

Although the bot will receive your messages, it will not act on them if you say `!voyager dnt` in a conversation
with it. Doing this prevents Voyager from finding references to rooms in your messages.
