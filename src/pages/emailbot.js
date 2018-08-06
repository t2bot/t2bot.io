import React from "react";
import UserPill from "../layouts/user_pill";

const EmailBotPage = () => (
    <div>
        <h2 className="t2-pageHeading">Email Notification Bot</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/turt2live/matrix-email-bot">turt2live/matrix-email-bot</a><br/>
        </p>
        <p><UserPill userId="@email:t2bot.io"/> is a bot that posts a message when it receives an email. Currently this bot does not have self-service configuration, so please contact <UserPill userId="@travis:t2l.io"/> to set it up in a room.</p>
    </div>
);

export default EmailBotPage
