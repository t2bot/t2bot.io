---
# You don’t need to declare anything in the frontmatter
---

# Email Bridge

For help with the Email bridge, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io)
on Matrix.

The source code for the bridge is available at [kamax-matrix/matrix-appservice-email](https://github.com/kamax-io/matrix-appservice-email) on Github.


## Inviting an email user to a room

The bridge allows for two-way communication between email users and Matrix users. If you're looking for
just one way (Email to Matrix), the [Email Notification Bot](/emailbot) is a better fit.

1. Using the email address you'd like to invite, replace the `@` symbol with `=40`
2. Invite them to the room, prefixing the email with `@_email_` and ending with `:t2bot.io`. For example,
   `test@gmail.com` would be `@_email_test=40gmail.com:t2bot.io`.

The user will start receiving emails for new messages in the room. By replying, they can post back. They
are also able to unsubscribe at any time.
