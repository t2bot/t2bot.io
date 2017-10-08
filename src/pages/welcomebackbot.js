import React from "react";
import Link from "gatsby-link";

const WelcomeBackBotPage = () => (
    <div>
        <h2>Welcome Back Bot</h2>
        <p><a href="https://matrix.to/#/@welcomeback:t2bot.io">@welcomeback:t2bot.io</a> will welcome people back to the conversation if they haven't participated in a while. To change the settings, send the message <code>!wb help</code></p>
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bot, or to contribute, please see <a href="https://github.com/turt2live/matrix-welcome-back-bot">turt2live/matrix-welcome-back-bot</a> on Github.</p>
    </div>
);

export default WelcomeBackBotPage
