import React from "react";
import Link from "gatsby-link";
import UserPill from "../layouts/user_pill";

const GitlabBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Gitlab Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/maubot/gitlab">maubot/gitlab</a> (third party)<br/>
        </p>
        <p>
            <UserPill userId="@gitlab:t2bot.io"/> is a bot that can advertise Gitlab activity in a room, such as new commits and issues.
        </p>
        <h4>Setting up notifications in your room</h4>
        <ol>
            <li>Invite <a href="https://matrix.to/#/@gitlab:t2bot.io">@gitlab:t2bot.io</a> to your room.</li>
            <li>Log in to gitlab.com and open your repository's integration settings.</li>
            <li>For the URL put <code>https://t2bot.io/gitlab/webhooks?room=!your_room_id:domain.com</code>. The room ID can be retrieved from the bottom of your room settings in Riot.</li>
            <li>For the Secret Token put <code>t2bot</code></li>
            <li>Check off the triggers you'd like to have in your room and click "Add webhook".</li>
        </ol>
        <h4>Enabling the bot's commands for your account</h4>
        <p>
            The bot has several commands that can be used to do things like create issues. This requires some account access from you
            so that when you say <code>!gitlab issue create ...</code> an issue actually gets created.
        </p>
        <ol>
            <li>Invite <UserPill userId="@gitlab:t2bot.io"/> to a <b>private</b> room.</li>
            <li>Log in to gitlab.com and go to your account settings.</li>
            <li>On the left side, click "Access Tokens"</li>
            <li>Give the new access token a name and optional expiration date.</li>
            <li>Give the token all scopes (this is so that the bot can manage issues and such on your behalf).</li>
            <li>Create the personal access token and copy the code Gitlab gives you.</li>
            <li>In your private chat with the bot, send the message <code>!gitlab login the_code_from_gitlab</code></li>
            <li>After the login is successful, send <code>!gitlab help</code> to see what the bot can do.</li>
        </ol>
    </div>
);

export default GitlabBotPage
