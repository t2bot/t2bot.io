---
# You don’t need to declare anything in the frontmatter
---

# Getting your access token from Riot.im

When setting up bots, it is common for the bot to require an "access token" in order to work. Access tokens authenticate
bots to the server so that they can function. **Access tokens should be kept secret and never shared.**

1. In a private/incognito browser window, open Riot.
2. Log in to the account you want to get the access token for, such as the bot's account.
3. Click on the bot's name in the top left corner then "Settings".
4. (Optional) Set your bot's display name and avatar.
5. Click the "Help & About" tab (left side of the dialog).
6. Scroll to the bottom and click the `<click to reveal>` part of `Access Token: <click to reveal>`.
7. Copy your access token to a safe place, like the bot's configuration file.
8. **Do not log out.** Instead, just close the window. If you used a private browsing session, you should be able to still
   use Riot for your own account. Logging out deletes the access token from the server, making the bot unable to use it.
