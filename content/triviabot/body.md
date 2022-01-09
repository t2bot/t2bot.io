---
# You don’t need to declare anything in the frontmatter
---

# Trivia Bot

This bot can, on demand, make polls and keep track of scores for trivia questions. Only a contestent's first answer will be taken.

Encryption for this bot is supplied by an experimental library - it might not work at times. Generally the bot works best in
unencrypted rooms rather than encrypted ones.

The source for this bot is available on [GitHub](https://github.com/t2bot/trivia-bot). The bot's questions are taken from
the [Open Trivia Database](https://opentdb.com/).

## Using the bot

1. Invite [@trivia:t2bot.io](https://matrix.to/#/@trivia:t2bot.io) to your room.
2. Give the bot moderator permissions (it needs this to enforce the one-answer-per-question requirement).
3. Check out the categories with `!trivia categories`
4. Start a game with `!trivia <easy|medium|hard> <questions> <...categories>`. For example, a game with 10 easy questions in
   the General Knowledge and Animals categories would be `!trivia easy 10 9 27`.

The bot will give contestents 15 seconds to answer each question, at which point it will reveal the correct answer and ask the
next question. If all questions have been answered, or no more questions are available, the bot will give final scores.

**Note**: To see and interact with the polls you might need to enable them in your client. Contact your client's support team
for help.
