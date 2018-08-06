import React from "react";
import UserPill from "../layouts/user_pill";

const TrelloBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Trello Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-trello-bot">turt2live/matrix-trello-bot</a><br/>
        </p>
        <p>
            <UserPill userId="@trello:t2bot.io"/> notifies you when things change on your Trello boards.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@trello:t2bot.io"/> to a <strong>private chat</strong></li>
            <li>Send the message <code>!trello login</code> to authorize the bot to see your boards</li>
            <li>Invite <UserPill userId="@trello:t2bot.io"/> to the room you'd like to have notifications in</li>
            <li>Send the message <code>!trello watch https://trello.com/b/YourBoardId</code></li>
        </ol>
    </div>
);

export default TrelloBotPage
