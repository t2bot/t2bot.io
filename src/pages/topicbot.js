import React from "react";
import Link from "gatsby-link";

const TopicBotPage = () => (
    <div>
        <h2>Topic Bot</h2>
        <p><a href="https://matrix.to/#/@topic:t2bot.io">@topic:t2bot.io</a> has one job: make sure your room's topic is kept up to date. Currently the bot only supports updating the topic based on the number of users in the room, but in the future the bot will support other variables. To get started, invite the bot to your room and send the message <code>!topic help</code></p>
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bot, or to contribute, please see <a href="https://github.com/turt2live/matrix-topic-bot">turt2live/matrix-topic-bot</a> on Github.</p>
    </div>
);

export default TopicBotPage
