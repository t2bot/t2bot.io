import React from "react";

const DiscordPage = () => (
    <div>
        <h2>Discord Bridge</h2>
        <p>The Discord bridge requires the Guild/Server owner to approve the integration before bridging can occur.</p>
        <ol>
            <li>Invite the bridge to your Discord guild: <a href="https://discordapp.com/api/oauth2/authorize?client_id=309408702530846730&scope=bot&permissions=607243264" target="_blank">Click Me</a>. The bot will need all of the permissions selected.</li>
            <li>Open the room in the Discord app in your web browser</li>
            <li>Add a webhook named <code>_matrix</code> to each room you'd like to bridge.</li>
            <li>
                Join the Discord room in Matrix/Riot using the following as reference:
                <img src="/img/discord-url.png" style={{display: "block"}}/>
                The room ID would be #_discord_ChannelID_RoomID:t2bot.io
            </li>
        </ol>
        <br/>
        <br/>
        <br/>
        <p>The Discord bridge is a third-party bridge not maintained by t2bot.io/turt2live. To learn more about the bridge, or to contribute, please see <a href="https://github.com/half-shot/matrix-appservice-discord">half-shot/matrix-appservice-discord</a> on Github.</p>
    </div>
);

export default DiscordPage
