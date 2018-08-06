import React from "react";
import Link from "gatsby-link";
import UserPill from "../layouts/user_pill";

const PollBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Pollbot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/shawnanastasio/matrix-pollbot">shawnanastasio/matrix-pollbot</a> (third party)<br/>
        </p>
        <p>
            <UserPill userId="@pollbot:t2bot.io"/> is a bot that helps run quick polls in your room.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@pollbot:t2bot.io"/> to your room</li>
            <li>Get started with <code>!newpoll</code></li>
        </ol>
    </div>
);

export default PollBotPage
