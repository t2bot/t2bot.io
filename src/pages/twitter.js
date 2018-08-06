import React from "react";

const TwitterPage = () => (
    <div>
        <h2 className="t2-pageHeading">Twitter Bridge</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/half-shot/matrix-appservice-twitter">half-shot/matrix-appservice-twitter</a> (third party)<br/>
        </p>
        <p>
            The Twitter bridge allows you to follow your favorite people and brands right inside of Matrix/Riot.
        </p>
        <h4>Following someone's timeline or a hashtag</h4>
        <ol>
            <li>Join the room <code>#_twitter_@ThePerson:t2bot.io</code> or <code>#_twitter_#TheHashtag:t2bot.io</code></li>
        </ol>
    </div>
);

export default TwitterPage
