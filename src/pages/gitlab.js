import React from "react";
import Link from "gatsby-link";

const GitlabBotPage = () => (
    <div>
        <h2>Gitlab Bot</h2>
        <div style={{background: '#ffdd2e', padding: '1.1rem', marginBottom: '1rem'}}><strong>The Gitlab bot is beta!</strong> The bot may not work at times, or be slow to respond. Please visit <a href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a> if you run into any issues.</div>
        <p><a href="https://matrix.to/#/@gitlab:t2bot.io">@gitlab:t2bot.io</a> is a bot that can advertise Gitlab activity in a room, such as new commits and issues.</p>
        <p>To set up the bot for advertising events in your room:</p>
        <ol>
            <li>Invite <a href="https://matrix.to/#/@gitlab:t2bot.io">@gitlab:t2bot.io</a> to your room.</li>
            <li>Log in to gitlab.com and open your repository's integration settings.</li>
            <li>For the URL put <code>https://t2bot.io/gitlab/webhooks?room=!your_room_id:domain.com</code>. The room ID can be retrieved from the bottom of your room settings in Riot.</li>
            <li>For the Secret Token put <code>t2bot</code></li>
            <li>Check off the triggers you'd like to have in your room and click "Add webhook".</li>
        </ol>
        <p>To use the bot's more advanced commands like <code>!gitlab issue create ...</code>:</p>
        <ol>
            <li>Invite <a href="https://matrix.to/#/@gitlab:t2bot.io">@gitlab:t2bot.io</a> to a <b>private</b> room.</li>
            <li>Log in to gitlab.com and go to your account settings.</li>
            <li>On the left side, click "Access Tokens"</li>
            <li>Give the new access token a name and optional expiration date.</li>
            <li>Give the token all scopes (this is so that the bot can manage issues and such on your behalf).</li>
            <li>Create the personal access token and copy the code Gitlab gives you.</li>
            <li>In your private chat with the bot, send the message <code>!gitlab login the_code_from_gitlab</code></li>
            <li>After the login is successful, send <code>!gitlab help</code> to see what the bot can do.</li>
        </ol>
        <br/>
        <br/>
        <br/>
        <p>The Gitlab bot is a third-party bot not maintained by t2bot.io/turt2live. To learn more about the bot, or to contribute, please see <a href="https://github.com/tulir/maulabbot">tulir/maulabbot</a> on Github.</p>
    </div>
);

export default GitlabBotPage
