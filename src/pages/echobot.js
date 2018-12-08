import React from "react";
import UserPill from "../layouts/user_pill";

const EchoBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Echo Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/maubot/echo">maubot/echo</a><br/>
        </p>
        <p>
            <UserPill userId="@echo:linuxgaming.life"/> is a bot that echoes what you say to it.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@echo:linuxgaming.life"/> to your room</li>
            <li>Send a message starting with <code>!echo</code>, followed by the message you want it to echo.</li>
        </ol>
    </div>
);

export default EchoBotPage
