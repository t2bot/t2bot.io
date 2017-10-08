import React from "react";
import Link from "gatsby-link";

const PollBotPage = () => (
    <div>
        <h2>Pollbot</h2>
            <div style={{background: '#ffdd2e', padding: '1.1rem', marginBottom: '1rem'}}><strong>The pollbot is beta!</strong> The bot may not work at times, or be slow to respond. Please visit <a href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a> if you run into any issues.</div>
        <p><a href="https://matrix.to/#/@pollbot:t2bot.io">@pollbot:t2bot.io</a> helps run quick polls/votes in your room. To get started, invite the bot and send the message <code>!newpoll</code>.</p>
        <br/>
        <br/>
        <br/>
        <p>Pollbot is a third-party bot not maintained by t2bot.io/turt2live. To learn more about the bot, or to contribute, please see <a href="https://github.com/shawnanastasio/matrix-pollbot">shawnanastasio/matrix-pollbot</a> on Github.</p>
    </div>
);

export default PollBotPage
