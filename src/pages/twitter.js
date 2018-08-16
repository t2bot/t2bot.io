import React from "react";

const TwitterPage = () => (
    <div>
        <h2 className="t2-pageHeading">Twitter Bridge</h2>
        <p className="t2-repoInfo">
            Github Repository: <a href="https://github.com/half-shot/matrix-appservice-twitter">half-shot/matrix-appservice-twitter</a> (third party)<br/>
        </p>
        <div style={{background: '#ffdd2e', padding: '1.1rem', marginBottom: '1rem'}}>
            <strong>The Twitter bridge was retired August 16th, 2018.</strong>
            Due to changes in the Twitter API, the bridge had to be decommissioned. In the future it may come back, however for the time being it has been turned off.
        </div>
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
