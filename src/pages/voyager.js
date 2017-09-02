import React from "react";

const VoyagerPage = () => (
    <div>
        <h2>Matrix Traveler (Voyager)</h2>
        <p>Voyager is a bot that travels throughout Matrix, trying to find new rooms. It does this by sitting in rooms and waiting for someone to mention another room, at which point it tries to join that room. Each new room it discovers is mapped on <a href="https://voyager.t2bot.io/">voyager.t2bot.io</a>.</p>
        <p>
                The grey lines on the graph represent rooms that have mentions to other rooms. For example, if <a href="https://matrix.to/#/#matrix:matrix.org">#matrix:matrix.org</a> is mentioned in a message in <a href="https://matrix.to/#/#riot:matrix.org">#riot:matrix.org</a> then a grey line will be drawn between the two rooms.
                The green lines represent people inviting <a href="https://matrix.to/#/@voyager:t2bot.io">@voyager:t2bot.io</a> (the bot) to a room directly.
                The purple lines represent people who voluntarily asked the bot to link them to the room. To do this, send the message <code>!voyager linkme #theroom:matrix.org</code> to <a href="https://matrix.to/#/@voyager:t2bot.io">@voyager:t2bot.io</a>.
        </p>
        <p>If you don't want Voyager in your room, simply kick or ban the bot - it won't be offended. It will also make sure to remove your room from the graph.</p>
        <br/>
        <br/>
        <br/>
        <p>To learn more about the bot, or to contribute, please see <a href="https://github.com/turt2live/matrix-voyager-bot">turt2live/matrix-voyager-bot</a> on Github.</p>
    </div>
);

export default VoyagerPage
