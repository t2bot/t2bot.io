import React from "react";
import UserPill from "../layouts/user_pill";

const DogeBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Doge Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/CromFr/matrix-doge-bot">CromFr/matrix-doge-bot</a> (third party)<br/>
        </p>
        <p>
            <UserPill userId="@doge:t2bot.io"/> will be summoned when you send a message with the word "doge", "wow", "much", "many", or "such" in it.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@doge:t2bot.io"/> to your room</li>
            <li>Send a message like "wow that was cool!"</li>
        </ol>
    </div>
);

export default DogeBotPage
