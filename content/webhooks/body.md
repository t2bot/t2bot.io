---
# You don’t need to declare anything in the frontmatter
---

# Slack-compatible Webhooks

For help with the Webhooks bridge, please visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io)
on Matrix.

The source code for the bridge is available at [turt2live/matrix-appservice-webhooks](https://github.com/turt2live/matrix-appservice-webhooks)
on GitHub.


## Creating a webhook for your room

1. Invite [@_webhook:t2bot.io](https://matrix.to/#/@_webhook:t2bot.io) to your Matrix room.
2. Send the message `!webhook`
3. The bridge will send you a URL to use in a private chat alongside simple instructions on how to use it.


## Connecting a Slack-compatible application to Matrix

Many apps have options for entering a Slack webhook URL so they can post to your Slack channel. These
apps often work with the webhooks bridge too, giving them the ability to post into your Matrix room.
Where possible, we recommend using any built-in Matrix support your application may have and only using
this as a last resort.

1. Create a webhook using the above instructions.
2. Enter the URL into your application for the "Inbound Slack Webhook URL"
3. Give it a test.
