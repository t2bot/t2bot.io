import React from "react";
import UserPill from "../layouts/user_pill";

const MediaBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Media Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/maubot/media">maubot/media</a><br/>
        </p>
        <p>
            <UserPill userId="@media:linuxgaming.life"/> is a bot that posts MXC URIs of uploaded images.
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@media:linuxgaming.life"/> to your room or start a private chat with it</li>
            <li>Upload an image</li>
        </ol>
    </div>
);

export default MediaBotPage
