import React from "react";
import UserPill from "../layouts/user_pill";

const TopicBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Topic Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-topic-bot">turt2live/matrix-topic-bot</a><br/>
        </p>
        <p>
            <UserPill userId="@topic:t2bot.io"/> helps update your room's topic as things change, such as the number of members.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@topic:t2bot.io"/> to your room</li>
            <li>Send the message <code>!topic help</code></li>
        </ol>
    </div>
);

export default TopicBotPage
