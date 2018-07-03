import React from "react";
import UserPill from "../layouts/user_pill";

const HyperbotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Hyper Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-hyper-bot">turt2live/matrix-hyper-bot</a><br/>
        </p>
        <p>
            <UserPill userId="@hyperbot:t2bot.io"/> is a bot that prefixes your message with <code>hyper</code> if you sent a noun.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@hyperbot:t2bot.io"/> to your room</li>
            <li>Send a message that is a single-word noun (like "Bob")</li>
        </ol>
    </div>
);

export default HyperbotPage
