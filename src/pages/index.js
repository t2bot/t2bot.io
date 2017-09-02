import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
    <div>
        <h2>A public bridge, bot, and integration network for <a href="https://matrix.org" target="_BLANK">[matrix]</a></h2>
        <p>Many of the bridges, bots, and integrations running on t2bot.io are free to use, although donations directly to <a href="https://en.liberapay.com/turt2live">turt2live</a> are appreciated. All donations go towards development and server maintenance.</p>
        <p>Here are some resources for setting up or using the various services provided by t2bot.io. If you're unsure of how to set anything up, or have any questions/requests, please visit <a href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a> in matrix.</p>
        <ul>
            <li><Link to="/webhooks">Webhooks bridge</Link></li>
            <li><Link to="/telegram">Telegram bridge</Link></li>
            <li><Link to="/discord">Discord bridge</Link></li>
            <li><Link to="/email">Email bridge</Link></li>
            <li><Link to="/twitter">Twitter bridge</Link></li>
            <li><Link to="/voyager">Matrix Traveler (Voyager)</Link></li>
            <li><Link to="/emailbot">Email Bot</Link></li>
            <li><Link to="/aliasbot">Alias Bot</Link></li>
            <li><Link to="/pollbot">Pollbot</Link></li>
            <li><Link to="/topicbot">Topic Bot</Link></li>
            <li><Link to="/dimension">Dimension</Link></li>
        </ul>
    </div>
);

export default IndexPage
