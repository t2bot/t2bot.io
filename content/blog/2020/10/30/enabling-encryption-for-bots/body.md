---
# You don’t need to declare anything in the frontmatter
---

# Enabling encryption for bots on t2bot.io

<small><i>October 30th, 2020 by TravisR</i></small>

Hey all,

Over the summer Matrix [announced](https://matrix.org/blog/2020/05/06/cross-signing-and-end-to-end-encryption-by-default-is-here)
that private rooms would be end-to-end encrypted by default - a huge achievement,
however t2bot.io’s bots haven’t been able to support encryption due to several technical
limitations. **Starting November 28th and 29th, 2020 this will change.**

We’ve deliberately picked those dates to give room admins time to decide if the bots
listed below should be in their rooms. Quite a few rooms have tried to use various bots
in their encrypted rooms without success and have abandoned them there. If you don’t
want t2bot.io’s bots to be able to read (future) messages in your rooms, please kick
them out before November 28th.

Not all bots and bridges on t2bot.io will support encryption out of the gate for various
reasons, however the few that will are:

* [Gitlab Notifications](https://t2bot.io/gitlab)
* [Trello](https://t2bot.io/trellobot)
* [RSS Notifications](https://t2bot.io/rssbot)
* [Pollbot](https://t2bot.io/pollbot)
* [Reminders](https://t2bot.io/reminderbot)
* [Welcome Back Bot](https://t2bot.io/welcomebackbot)
* [Haiku Bot](https://t2bot.io/haikubot)
* [Hyper Bot](https://t2bot.io/hyperbot)
* [Smile Bot](https://t2bot.io/smilebot)
* [Hashtag Bot](https://t2bot.io/hashtagbot)
* [Urban Dictionary](https://t2bot.io/urbandictionarybot)
* [Reddit Corrections](https://t2bot.io/redditbot)
* [Factorial Bot](https://t2bot.io/factorialbot)
* [Dice Bot](https://t2bot.io/dicebot)
* [sed(1)](https://t2bot.io/sedbot)
* [Alot Bot](https://t2bot.io/alotbot)
* [Translate Bot](https://t2bot.io/translatebot)
* [Echo Bot](https://t2bot.io/echobot)

Most notably, [Voyager](https://t2bot.io/voyager), the [Discord](https://t2bot.io/discord)
and [Telegram](https://t2bot.io/telegram) bridges, and several other integrations are
not listed here. Voyager isn’t included because the bot needs further updates to handle
the private data contained in encrypted rooms. The bridges are excluded because they
aren’t able to handle the traffic at the scale needed by t2bot.io - improvements are
expected in this area over time, however.

Under the hood, t2bot.io will be using [Pantalaimon](https://github.com/matrix-org/pantalaimon)
to have the bots support encryption. The project [doesn’t yet support cross-signing](https://github.com/matrix-org/pantalaimon/issues/50),
although when it does t2bot.io will be setting that up too. Similarly, we’ll add more bots once the project
[gains support for media uploads](https://github.com/matrix-org/pantalaimon/issues/70).
Pantalaimon doesn’t currently support bridges (appservices), and the built-in support
for some of the bridges on t2bot.io would put extraordinary load on the server due to
t2bot.io’s size.

In terms of timelines, much of this has been in testing for most of the year to ensure
that the server will be able to handle the additional traffic and requests that come
with encryption. Now t2bot.io is at the stage where it can start rolling it out to most
integrations. Between now and November 28th/29th, t2bot.io will be making some
infrastructure changes to better support these bots, such as setting up additional
Synapse workers and deploying Pantalaimon to a more suitable location - some
interruptions may occur, though they are expected to be minimal. Stay up to date with
the deployment by watching [#status:t2bot.io](https://matrix.to/#/#status:t2bot.io) on
Matrix.

Later on, the bots will support being verified however in the interim they'll all appear
with grey shields in Element. The public key information for each bot will also be posted
on the t2bot.io website for manual verification, for those that need to verify the bots
to have them receive messages you send.

For more information, visit [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) on
Matrix.

Thanks, <br />
TravisR, t2bot.io

<small><i>Icon graphics sourced from matrix-react-sdk under
<a href="https://github.com/matrix-org/matrix-react-sdk/blob/ca4e7202aed6154e2681f67874f8cd20ac9ec151/LICENSE" target="_blank">Apache 2.0</a>:
<a href="https://github.com/matrix-org/matrix-react-sdk/blob/ca4e7202aed6154e2681f67874f8cd20ac9ec151/res/img/e2e/verified.svg" target="_blank">Green Shield</a>
| <a href="https://github.com/matrix-org/matrix-react-sdk/blob/ca4e7202aed6154e2681f67874f8cd20ac9ec151/res/img/e2e/warning.svg" target="_blank">Red Shield</a>
| <a href="https://github.com/matrix-org/matrix-react-sdk/blob/ee8d885e707e666a267868b437f14491b1b5d980/res/css/views/rooms/_E2EIcon.scss#L66-L79" target="_blank">Colours</a>
</i></small>
