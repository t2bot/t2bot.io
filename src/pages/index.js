import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
    <div>
        <h2>A public bridge, bot, and integration network for <a href="https://matrix.org" target="_BLANK">[matrix]</a>
        </h2>
        <p>Many of the bridges, bots, and integrations running on t2bot.io are free to use, although donations directly
            to <a href="https://en.liberapay.com/turt2live">turt2live</a> are appreciated. All donations go towards
            development and server maintenance.</p>
        <p>If you're unsure of how to set anything up, or have any questions/requests, please visit <a
            href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a> in matrix.</p>

        <h3 className="t2-sectionHeader">Bridges</h3>
        <p>Bridges allow people on other platforms to interact with matrix users, and vice-versa.</p>
        <div className="t2-integration">
            <img src="/img/logos/mx-webhooks.png"/>
            <strong className="title"><Link to="/webhooks">Webhooks Bridge</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-telegram.png"/>
            <strong className="title"><Link to="/telegram">Telegram Bridge</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-discord.png"/>
            <strong className="title"><Link to="/discord">Discord Bridge</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-twitter.png"/>
            <strong className="title"><Link to="/twitter">Twitter Bridge</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-email.png"/>
            <strong className="title"><Link to="/email">Email Bridge</Link></strong>
        </div>

        <h3 className="t2-sectionHeader">Bots</h3>
        <p>Bots provide utility or entertainment to your rooms on matrix. Some of them are just silly as well.</p>
        <div className="t2-integration">
            <img src="/img/logos/mx-voyager.png"/>
            <strong className="title"><Link to="/voyager">Matrix Traveler</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-email-bot.png"/>
            <strong className="title"><Link to="/emailbot">Email Bot</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-alias.png"/>
            <strong className="title"><Link to="/aliasbot">Alias Bot</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-pollbot.png"/>
            <strong className="title"><Link to="/pollbot">Pollbot</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-topic.png"/>
            <strong className="title"><Link to="/topicbot">Topic Bot</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-welcomeback.png"/>
            <strong className="title"><Link to="/welcomebackbot">Welcome Back Bot</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-haiku.png"/>
            <strong className="title"><Link to="/haikubot">Haiku Bot</Link></strong>
        </div>

        <h3 className="t2-sectionHeader">Other services</h3>
        <p>Not everything t2bot.io runs is a bot or bridge. Here's everything else that may be of interest.</p>
        <div className="t2-integration">
            <img src="/img/logos/mx-dimension.png"/>
            <strong className="title"><Link to="/dimension">Dimension</Link></strong>
        </div>
    </div>
);

export default IndexPage
