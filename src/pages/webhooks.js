import React from "react";
import UserPill from "../layouts/user_pill";

const WebhooksPage = () => (
    <div>
        <h2 className="t2-pageHeading">Matrix Webhooks</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-appservice-webhooks">turt2live/matrix-appservice-webhooks</a><br/>
        </p>
        <p>
            The webhooks bridge enables the ability for you to post messages to the room without needing to set up a
            matrix account.
        </p>
        <h4>Creating a webhook for your room</h4>
        <ol>
            <li>Invite <UserPill userId="@_webhook:t2bot.io"/> to your room</li>
            <li>Send the message <code>!webhook</code></li>
            <li>The bridge will send you instructions and your webhook URL in a private chat</li>
        </ol>
        <h4>Using the webhook URL</h4>
        <p>HTTP POST a message, like the following, to the URL the bot gave you.</p>
        <pre>
            &#123;{'\n'}
            {'    '}"text": "Hello world!",{'\n'}
            {'    '}"format": "plain",{'\n'}
            {'    '}"displayName": "My Webhook",{'\n'}
            {'    '}"avatarUrl": "http://i.imgur.com/IDOBtEJ.png"{'\n'}
            &#125;
        </pre>
    </div>
);

export default WebhooksPage
