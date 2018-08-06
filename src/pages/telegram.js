import React from "react";
import UserPill from "../layouts/user_pill";

const TelegramPage = () => (
    <div>
        <h2 className="t2-pageHeading">Telegram Bridge</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/tulir/mautrix-telegram">tulir/mautrix-telegram</a> (third party)<br/>
        </p>
        <p>
            The Telegram bridge allows Telegram and Matrix users to communicate with each other.
        </p>
        <h4>Adding the Telegram bridge to your room</h4>
        <ol>
            <li>Invite <code>@matrix_t2bot</code> to your Telegram group or channel</li>
            <li>In Telegram, type the command <code>/id</code> to get a number returned to you by the bridge</li>
            <li>Invite <UserPill userId="@telegram:t2bot.io"/> to your Matrix room</li>
            <li>In Matrix, send the message <code>!tg bridge &lt;the number from earlier&gt;</code>. Example: <code>!tg bridge -23456789</code></li>
            <li>The bridge will ask you to confirm the bridge. Do this by sending the message <code>!tg continue</code>
            </li>
            <li>Your room should now be bridged to Telegram</li>
        </ol>
        <h4>Removing the Telegram bridge from your room</h4>
        <ol>
            <li>In the Matrix room you'd like to unbridge, send the message <code>!tg unbridge</code></li>
            <li>The bridge will ask you to confirm that you'd like to unbridge the room. Do this by sending the message <code>!tg confirm-unbridge</code></li>
            <li>The bridged users should automatically leave and the bridge will be severed</li>
        </ol>
        <h4>Logging in with your Telegram account</h4>
        <p>
            By default the bridge uses a "relay bot" for people who are not logged in to the bridge. This can lead to confusion when the
            Telegram bridge posts lots of messages in your Telegram chats. By using your own Telegram account, the bridge will send messages
            to chats with your account rather than the relay bot when you talk on matrix. In addition to that, you also get invited to all
            current and future Telegram chats - it's like using Telegram in Matrix!
        </p>
        <ol>
            <li>Invite <UserPill userId="@telegram:t2bot.io"/> to a <strong>private chat</strong></li>
            <li>Send the message <code>!tg login</code></li>
            <li>Click the link and follow the instructions</li>
            <li>The bridge will now start inviting you to all your Telegram chats and synchronize the rooms</li>
        </ol>
    </div>
);

export default TelegramPage
