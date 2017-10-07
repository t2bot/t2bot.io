import React from "react";

const TelegramPage = () => (
    <div>
        <h2>Telegram Bridge</h2>
        <div style={{background: '#ffdd2e', padding: '1.1rem', marginBottom: '1rem'}}><strong>Telegram bridging is beta!</strong> The bridge may not work at times, or may be difficult to set up. Please visit <a href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a> if you run into any issues.</div>
        <p>The Telegram bridge is based off of <a href="https://github.com/SijmenSchoon/telematrix">SijmenSchoon/telematrix</a> and has a little bit of setup to get it working in Matrix:</p>
        <ol>
            <li>Invite @matrix_t2bot to your Telegram group</li>
            <li>Send the message <code>/alias</code> in Telegram. This will give you a Matrix alias that we'll use in a moment.</li>
            <li>Create or open the room you want to bridge in Matrix/Riot</li>
            <li>Make sure the room is accessible to anyone who knows the room's link (not invite-only).</li>
            <li>Invite <a href="https://matrix.to/#/@alias:t2bot.io">@alias:t2bot.io</a> to your room</li>
            <li>Send the message <code>!alias TheAliasFromEarlier</code> where <code>TheAliasFromEarlier</code> is the alias from step 2</li>
            <li>Start chatting!</li>
        </ol>
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bridge, or to contribute, please see <a href="https://github.com/SijmenSchoon/telematrix">SijmenSchoon/telematrix</a> on Github.</p>
    </div>
);

export default TelegramPage
