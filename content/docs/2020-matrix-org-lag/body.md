---
# You don’t need to declare anything in the frontmatter
---

# t2bot.io's federation problems with matrix.org

Matrix is a decentralized and federated protocol, which means several servers all try to talk to
each other to ensure that they all have an equal copy of a conversation. One of those servers is
t2bot.io, and another is matrix.org. There are many more and you can even [host your own](https://matrix.org/docs/guides/installing-synapse).

If your user ID ends with `:matrix.org` (in Element this will appear near your display name), you
will have problems setting up services offered by t2bot.io. Note that rooms are not hosted on any
particular server, so other people in your room might not have the same problem. If they are also
registered on matrix.org however, they will have issues too.

The easiest way to fix the issue is to register for an account on a different homeserver. Where
possible, we recommend that you [host your own](https://matrix.org/docs/guides/installing-synapse)
server instead of using a public service.

Other options for homeservers are:

<div class="homeservers">

<div class="homeserver">

<img src="/assets/img/feneas-logo.png" width="128" alt="feneas.org" />

## [Feneas](https://feneas.org)

</div>

<div class="homeserver">

<img src="/assets/img/mozilla-logo.svg" width="164" height="128" alt="mozilla.org" />

## [Mozilla](https://chat.mozilla.org)

</div>


<div class="homeserver">

<img src="/assets/img/element-logo.svg" width="128" alt="element.io" />

## [Element Matrix Services](https://element.io/matrix-services)

</div>

</div>
