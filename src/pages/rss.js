import React from "react";
import UserPill from "../layouts/user_pill";

const RssPage = () => (
    <div>
        <h2 className="t2-pageHeading">RSS Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/maubot/rss">maubot/rss</a><br/>
        </p>
        <p>
            <UserPill userId="@rss:linuxgaming.life"/> is a bot that posts new entries from RSS/atom feeds.</p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@rss:linuxgaming.life"/> to your room</li>
            <li>Use: Send <code>!rss help</code> to get a list of commands.</li>
				</ol>
    </div>
);

export default RssPage
