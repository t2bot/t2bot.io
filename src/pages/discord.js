import React from "react";

const DiscordPage = () => (
    <div>
        <h2>Discord Bridge</h2>
        <p>The Discord bridge requires the Guild/Server owner to approve the integration for bridging to work.</p>
        <ol>
            <li>Invite the bridge to your Discord guild using <a href="https://discordapp.com/api/oauth2/authorize?client_id=309408702530846730&scope=bot&permissions=607251456" target="_blank">this link</a>. The bridge will need all the permissions selected.</li>
            <li>Invite <a href="https://matrix.to/#/@_discord_bot:t2bot.io" target="_blank">@_discord_bot:t2bot.io</a> to your matrix room. The bot should have permissions to invite users.</li>
            <li>Open the channel you'd like to bridge in the Discord web application</li>
            <li>
                Using the following image as a reference, send the message <code>!discord bridge ChannelID RoomID</code> in your matrix room:
                <img src="/img/discord-url.png" style={{display: "block"}} />
            </li>
        </ol>
        <br/>
        <br/>
        <br/>
        <p>The Discord bridge is a third-party bridge not maintained by t2bot.io/turt2live. To learn more about the bridge, or to contribute, please see <a href="https://github.com/half-shot/matrix-appservice-discord">half-shot/matrix-appservice-discord</a> on Github.</p>
    </div>
);

export default DiscordPage
