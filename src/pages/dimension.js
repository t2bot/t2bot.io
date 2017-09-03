import React from "react";

const DimensionPage = () => (
    <div>
        <h2>Dimension</h2>
            <div style={{background: '#ffdd2e', padding: '1.1rem', marginBottom: '1rem'}}><strong>Dimension is beta!</strong> The manager may not work at times due to instability in how Riot works under the hood. Normal use of Riot is not affected, just managing integrations in the room. Please visit <a href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a> if you run into any issues.</div>
        <p>Dimension is a work-in-progress integrations manager for Riot. What Dimension allows you to do is manage the various bots and bridges for your room, much like the default manager in Riot, but in a free and open source way. Currently t2bot.io has a version of Riot that uses Dimension running at <a href="https://t2bot.io/riot">t2bot.io/riot</a>. Simply log in and click the integrations button to give it a spin.</p>
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bot, or to contribute, please see <a href="https://github.com/turt2live/matrix-dimension">turt2live/matrix-dimension</a> on Github.</p>
    </div>
);

export default DimensionPage
