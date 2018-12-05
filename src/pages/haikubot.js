import React from "react";
import UserPill from "../layouts/user_pill";

const HaikuBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Haiku Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-haiku-bot">turt2live/matrix-haiku-bot</a><br/>
        </p>
        <p>
            <UserPill userId="@haiku:linuxgaming.life"/> is a bot that detects haikus and posts them back into the room.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@haiku:linuxgaming.life"/> to your room</li>
            <li>Send a message that fits the haiku format</li>
        </ol>
    </div>
);

export default HaikuBotPage
