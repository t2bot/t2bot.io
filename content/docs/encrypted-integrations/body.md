---
# You don’t need to declare anything in the frontmatter
---

Though [not all bots support encryption](/docs/unsupported-encryption), many on t2bot.io
do. Bots that do support encryption will only be able to read messages that were sent to
them, much like how the bots can current see messages in unencrypted rooms but don't
react to anything not intended for them.

**If you aren't comfortable with a bot being able to potentially read encrypted messages,
please self-host or not include that bot in your encrypted rooms.** Some clients also
support refusing to encrypt messages for unverified devices or outright banning
encryption to certain devices/users - thse would be good options to use if your client
supports them and you aren't comfortable with the bot being able to read your messages
in encrypted rooms.

When rooms are encrypted, messages are end-to-end encrypted meaning that your
devices/sessions must specifically encrypt a message for the bot in order for the bot
to see it. If your device/session refuses to encrypt it specifically for the bot, the
bot will only see nonsense instead of a message. Other members are subject to the
same rules: if your device didn't specifically encrypt a message for them, they won't
see it's contents. By default, most clients like Element will automatically encrypt a
message for all members of the room, including bots.

The bots on t2bot.io don't currently support verification, however using the public
keys below you will be able to verify each bot manually. For the extra cautious
individuals, visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) for information
on verifying the bots, if needed.

<div style="margin-bottom: 16px;">&nbsp;</div>
