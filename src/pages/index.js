import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
    <div>
        <h2>A public bridge, bot, and integration network for <a href="https://matrix.org" target="_BLANK">[matrix]</a>
        </h2>
        <p>Many of the bridges, bots, and integrations running on linuxgaming.life are free to use, although <Link to="/donate">donations are greatly appreciated</Link>.</p>
        <p>If you're unsure of how to set anything up, or have any questions/requests, please visit <a
            href="https://matrix.to/#/#help:linuxgaming.life">#help:linuxgaming.life</a> in matrix.</p>

				<h3 className="t2-sectionHeader">Riot</h3>
				<p>linuxgaming.life hosts its own instance of <a href="https://riot.im">riot</a>, the flagship matrix client. It is served via <a href="https://ipfs.io">IPFS</a></p>
				<a href="https://riot.linuxgaming.life"><div className="t2-integration">
					<img src="img/logos/riot.png" />
					<strong className="title">Riot</strong>
				</div></a>

        <h3 className="t2-sectionHeader">Bridges</h3>
        <p>Bridges allow people on other platforms to interact with matrix users, and vice-versa.</p>
        {/*<div className="t2-integration">
            <img src="/img/logos/mx-webhooks.png"/>
            <strong className="title"><Link to="/webhooks">Webhooks Bridge</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-telegram.png"/>
            <strong className="title"><Link to="/telegram">Telegram Bridge</Link></strong>
        </div>*/}
        <a href="discord"><div className="t2-integration">
            <img src="img/logos/mx-discord.png"/>
            <strong className="title">Discord Bridge</strong>
        </div></a>
        {/*<div className="t2-integration">
            <img src="/img/logos/mx-twitter.png"/>
            <strong className="title"><Link to="/twitter">Twitter Bridge</Link></strong>
        </div>
        <div className="t2-integration">
            <img src="/img/logos/mx-email.png"/>
            <strong className="title"><Link to="/email">Email Bridge</Link></strong>
        </div>*/}

        <h3 className="t2-sectionHeader">Bots</h3>
        <p>Bots provide utility or entertainment to your rooms on matrix. Some of them are just silly as well.</p>
				<a href="dicebot"><div className="t2-integration">
            <img src="img/logos/dice.png"/>
            <strong className="title">Dice Bot</strong>
        </div></a>
				<a href="sedbot"><div className="t2-integration">
            <img src="img/logos/sed.png"/>
            <strong className="title">sed Bot</strong>
        </div></a>
				<a href="mediabot"><div className="t2-integration">
            <img src="img/logos/media.png"/>
            <strong className="title">Media Bot</strong>
        </div></a>
				<a href="rss"><div className="t2-integration">
					<img src="img/logos/rss.png" />
					<strong className="title">RSS Bot</strong>
				</div></a>
				<a href="echobot"><div className="t2-integration">
					<img src="img/logos/echo.png" />
					<strong className="title">Echo Bot</strong>
				</div></a>
        {/*<div className="t2-integration">
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
            <img src="/img/logos/mx-gitlab.png"/>
            <strong className="title"><Link to="/gitlab">Gitlab Bot</Link></strong>
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
        </div>*/}
        {/*<div className="t2-integration">
            <img src="/img/logos/mx-haiku.png"/>
            <strong className="title"><Link to="/haikubot">Haiku Bot</Link></strong>
        </div>*/}
        {/*<div className="t2-integration">
            <img src="/img/logos/mx-hyperbot.png"/>
            <strong className="title"><Link to="/hyperbot">Hyperbot</Link></strong>
        </div>*/}

        {/*<h3 className="t2-sectionHeader">Other services</h3>
        <p>Not everything linuxgaming.life runs is a bot or bridge. Here's everything else that may be of interest.</p>
        <div className="t2-integration">
            <img src="/img/logos/mx-dimension.png"/>
            <strong className="title"><Link to="/dimension">Dimension</Link></strong>
        </div>*/}
    </div>
);

export default IndexPage
