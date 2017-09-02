import React from "react";
import Link from "gatsby-link";

const AliasBotPage = () => (
    <div>
        <h2>Alias Bot</h2>
        <p><a href="https://matrix.to/#/@alias:t2bot.io">@alias:t2bot.io</a> is a bot that allows you to add room aliases for the t2bot.io domain. It exists for the <Link to="/telegram">Telegram Bridge</Link> to work.</p>
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bot, or to contribute, please see <a href="https://github.com/turt2live/matrix-alias-bot">turt2live/matrix-alias-bot</a> on Github.</p>
    </div>
);

export default AliasBotPage
