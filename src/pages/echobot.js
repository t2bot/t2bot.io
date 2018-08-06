import React from "react";
import UserPill from "../layouts/user_pill";

const EchoBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Echo Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/matrix-org/go-neb">matrix-org/go-neb</a> (third party)<br/>
        </p>
        <p>
            <UserPill userId="@echo:t2bot.io"/> echos text given to it. Perfect for testing that your messages are reaching t2bot.io.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@echo:t2bot.io"/> to the room</li>
            <li>Send a message like <code>!echo Please repeat this</code></li>
        </ol>
    </div>
);

export default EchoBotPage
