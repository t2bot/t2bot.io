import React from "react";

const EmailPage = () => (
    <div>
        <h2>Email Bridge</h2>
        <p>The Email bridge enables people to contribute in a conversation while not having to use a matrix client. To invite someone's email address:</p>
        <ol>
            <li>Replace the <code>@</code> symbol with <code>=40</code></li>
            <li>Invite them to the room using this format: <code>@_email_TheEmail:t2bot.io</code> (eg: <code>@_email_test=40gmail.com:t2bot.io</code> would be test@gmail.com)</li>
        </ol>
        <p>The user may unsubscribe at any time by clicking the link in the email. They'll be able to reply to each email to post a message back to the room.</p>
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bridge, or to contribute, please see <a href="https://github.com/kamax-io/matrix-appservice-email">kamax-io/matrix-appservice-email</a> on Github.</p>
    </div>
);

export default EmailPage
