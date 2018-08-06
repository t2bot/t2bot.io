import React from "react";
import UserPill from "../layouts/user_pill";

const SmileBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Smile Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-smile-bot">turt2live/matrix-smile-bot</a><br/>
        </p>
        <p>
            <UserPill userId="@smile:t2bot.io"/> turns that frown upside down.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@smile:t2bot.io"/> to the room</li>
            <li>Send a message with a frowning emoji at the end</li>
        </ol>
    </div>
);

export default SmileBotPage
