import React from "react";
import UserPill from "../layouts/user_pill";

const DiceBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Dice Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/maubot/dice">maubot/dice</a><br/>
        </p>
        <p>
            <UserPill userId="@dice:linuxgaming.life"/> is a bot that rolls dice. Also has a built-in calculator!
        </p>
        <h4>Adding the bot to your room</h4>
        <ol>
            <li>Invite <UserPill userId="@dice:linuxgaming.life"/> to your room</li>
            <li>Send a message with the format <code>!roll [0-99]d[0-99]</code>, for example:</li>
						<li><code>!roll 5d20</code> will roll 5 dice with 20 sides.</li>
        </ol>
    </div>
);

export default DiceBotPage
