Access and manage your GitHub repositories from Matrix.

The source for this bridge can be found on [GitHub](https://github.com/Half-Shot/matrix-hookshot).

## Connecting your account

Your account will need to be connected to the bridge in order to create issues and subscribe rooms to updates.

1. Start a DM with [@github_bridge:t2bot.io](https://matrix.to/#/@github_bridge:t2bot.io)
2. Say `github login` and click the link
3. Follow the prompts

## Connecting your room

1. Connect your account per above.
2. Invite [@github_bridge:t2bot.io](https://matrix.to/#/@github_bridge:t2bot.io) to the room you want to receive updates
3. Promote the bot to Moderator
4. Say `!hookshot github repo https://github.com/YOURNAME/YOURREPO` to link the repository to the room

To create issues, say `!gh create "Title" "Description"` in the connected room.
