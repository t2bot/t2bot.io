import React from "react";
import UserPill from "../layouts/user_pill";

const SedBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">sed Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/maubot/sed">maubot/sed</a><br/>
        </p>
        <p>
            <UserPill userId="@sed:linuxgaming.life"/> is a bot that searches and replaces text in a message, and sends it as a reply.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@sed:linuxgaming.life"/> to your room</li>
            <li>Send a message with the format <code>s/text to find/text to replace it with/g</code></li>
        </ol>
    </div>
);

export default SedBotPage
