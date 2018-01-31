import React from "react";

const WebhooksPage = () => (
    <div>
        <h2>Webhooks Bridge</h2>
        <p>The webhooks bridge enables the ability for you to post messages to the room without needing to set up a
            matrix account.</p>
        <p>To start using the bridge, invite <a href="https://matrix.to/#/@_webhook:t2bot.io">@_webhook:t2bot.io</a> to
            the room then send the command <code>!webhook</code>. The bot will send you a message with more information,
            including the URL you'll post messages to.</p>
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
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bridge, or to contribute, please see <a href="https://github.com/turt2live/matrix-appservice-webhooks">turt2live/matrix-appservice-webhooks</a> on Github.</p>
    </div>
);

export default WebhooksPage
