import React from "react";
import UserPill from "../layouts/user_pill";

const AliasBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Alias Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-alias-bot">turt2live/matrix-alias-bot</a><br/>
        </p>
        <p>
            <UserPill userId="@alias:t2bot.io"/> is a bot that allows you to add room aliases for the t2bot.io domain.
        </p>
        <h4>Adding an alias to a room</h4>
        <ol>
            <li>Invite <UserPill userId="@alias:t2bot.io"/> to your room</li>
            <li>Send the message <code>!alias #ab-YourAlias</code> where <code>YourAlias</code> is the name you want to add. Aliases must start with <code>ab-</code></li>
        </ol>
        <h4>Removing an alias from a room</h4>
        <ol>
            <li>With <UserPill userId="@alias:t2bot.io"/> in the room, send the message <code>!alias remove #ab-YourAlias</code></li>
        </ol>
    </div>
);

export default AliasBotPage
