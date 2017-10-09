import React from "react";

const AccessTokensPage = () => (
    <div>
        <h2>Access Tokens</h2>
        <p>When setting up bots, it is common for the bot to require an "access token" of sorts in order to work. Access
            tokens authenticate the bot to the server so they can function. To get an access token for your bot, follow
            these steps:</p>
        <ol>
            <li>In a private browsing session (incognito window), open Riot.</li>
            <li>Log in with your bot's username and password.</li>
            <li>Set the display name and avatar, if required</li>
            <li>In the settings page, scroll down to the bottom and click <code>Access Token: &lt;click to
                reveal&gt;</code>.
            </li>
            <li>Copy the highlighted text to your configuration.</li>
            <li>Close the private browsing session. <strong>Do not log out.</strong> Logging out will invalidate the
                token, making it not work.
            </li>
        </ol>

        <p>Access tokens are sensitive information. Do not include them in any bug reports, messages, or logs. Do not
            share the access token with anyone.</p>
    </div>
);

export default AccessTokensPage
