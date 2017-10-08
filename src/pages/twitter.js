import React from "react";

const TwitterPage = () => (
    <div>
        <h2>Twitter Bridge</h2>
            <div style={{background: '#ffdd2e', padding: '1.1rem', marginBottom: '1rem'}}><strong>Twitter bridging is beta!</strong> The bridge may not work at times, or may be difficult to set up. Please visit <a href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a> if you run into any issues.</div>
        <p>The Twitter bridge allows you to follow your favorite people and brands right inside of Matrix/Riot.</p>
        <p>To follow someone's timeline, or a hashtag, join the special room: <code>#_twitter_@ThePerson:t2bot.io</code> or <code>#_twitter_#TheHashtag:t2bot.io</code></p>
        <br/>
        <br/>
        <br/>
        <p>The Twitter bridge is a third-party bridge not maintained by t2bot.io/turt2live. To learn more about the bridge, or to contribute, please see <a href="https://github.com/Half-Shot/matrix-appservice-twitter">Half-Shot/matrix-appservice-twitter</a> on Github.</p>
    </div>
);

export default TwitterPage
