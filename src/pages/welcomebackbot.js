import React from "react";
import UserPill from "../layouts/user_pill";

const WelcomeBackBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Welcome Back Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-welcome-back-bot">turt2live/matrix-welcome-back-bot</a><br/>
        </p>
        <p>
            <UserPill userId="@welcomeback:t2bot.io"/> is a bot that welcomes people back after they've been inactive in the room for a while.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@welcomeback:t2bot.io"/> to your room</li>
            <li>Tell the bot how many minutes someone has to be inactive for before they'll be welcomed back with <code>!wb 10</code> (10 minutes being the example here)</li>
        </ol>
    </div>
);

export default WelcomeBackBotPage
