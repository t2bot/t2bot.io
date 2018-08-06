import React from "react";
import UserPill from "../layouts/user_pill";

const DiscordPage = () => (
    <div>
        <h2 className="t2-pageHeading">Discord Bridge</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/half-shot/matrix-appservice-discord">half-shot/matrix-appservice-discord</a> (third party)<br/>
        </p>
        <p>
            The Discord bridge allows Discord and Matrix users to communicate with each other, with the permission of the Discord guild's owners.
        </p>
        <h4>Adding the Discord bridge to your room</h4>
        <ol>
            <li>Invite the bridge to your Discord guild using <a href="https://discordapp.com/api/oauth2/authorize?client_id=309408702530846730&scope=bot&permissions=607243264" target="_blank">this link</a>. The bridge will need all the permissions selected.</li>
            <li>Invite <UserPill userId="@_discord_bot:t2bot.io"/> to your matrix room. The bot should have permissions to invite users.</li>
            <li>Open the channel you'd like to bridge in the Discord web application</li>
            <li>
                Using the following image as a reference, send the message <code>!discord bridge ChannelID RoomID</code> in your matrix room:
                <img src="/img/discord-url.png" style={{display: "block"}} />
            </li>
        </ol>
        <h4>Removing the Discord bridge from your room</h4>
        <ol>
            <li>In the room you'd like to unbridge, send the message <code>!discord unbridge</code></li>
            <li>Follow the steps provided by the bridge</li>
            <li>Revoke the bridge's permissions from within Discord</li>
        </ol>
    </div>
);

export default DiscordPage
