---
# You don’t need to declare anything in the frontmatter
---

Not all bots and bridges on t2bot.io support encryption currently. This is primarily
due to one of three reasons:

1. It's a bridge like Telegram or Discord where it is technically infeasible to
   support encryption currently. For more information on when t2bot.io's bridges
   will support encryption, please see [the blog post](/blog/2020/10/30/enabling-encryption-for-bots/).
2. It's a bot that interacts with media (images, files, etc). Currently the technology
   running t2bot.io's encryption doesn't fully support media, but when it does we'll
   make an announcement to say when these bots are supported. Stay tuned to [#news:t2bot.io](https://matrix.to/#/#news:t2bot.io)
   for updates.
3. It's Voyager (Matrix Traveler), in which case the bot needs to receive updates before
   it'll handle the private data commonly contained in encrypted rooms.

For more information on these three cases, or to ask a specific question regarding a
bot/bridge, visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io)
