---
# You don’t need to declare anything in the frontmatter
---

When developing Matrix server applications one of the early considerations is ensuring the [server discovery](https://spec.matrix.org/latest/server-server-api/#server-discovery)
code actually works. This can be difficult to validate without example servers, and setting up such servers can be extremely time consuming.

t2bot.io provides `resolvematrix.dev` as a service to help with this. With consideration for [MSC4045](https://github.com/matrix-org/matrix-spec-proposals/pull/4045), all of the
server discovery steps are supported by domains here. These domains *should* be safe to use in unit or integration tests, and uptime is monitored by
[status.resolvematrix.dev](https://status.resolvematrix.dev/). If you run into and problems, let us know in [#help:t2bot.io](https://matrix.to/#/#help:t2bot.io) on Matrix.

## The Domains

All of the domains are running an instance of [matrix-key-server](https://github.com/t2bot/matrix-key-server), but are configured to *only* respond to `/_matrix/federation/v1/version`
and `/_matrix/key/v2/server`. All other APIs are not possible on these servers.

| Server name | [Step](https://spec.matrix.org/latest/server-server-api/#server-discovery) covered | Connection address | Federation |
|-|-|-|-|
| `2.s.resolvematrix.dev:7652` | 2 - Explicit Port | `2.s.resolvematrix.dev:7652` | [Run test](https://federationtester.matrix.org/#2.s.resolvematrix.dev:7652) |
| `3b.s.resolvematrix.dev` | 3b - Delegated Explicit Port | `wk.3b.s.resolvematrix.dev:7753` | [Run test](https://federationtester.matrix.org/#3b.s.resolvematrix.dev) |
| `3c.s.resolvematrix.dev` | 3c - Delegated `matrix` SRV | `srv.wk.3c.s.resolvematrix.dev:7754` | [Run test](https://federationtester.matrix.org/#3c.s.resolvematrix.dev) |
| `3d.s.resolvematrix.dev` | 3d - Delegated Default Port | `wk.3d.s.resolvematrix.dev:8448` | [Run test](https://federationtester.matrix.org/#3d.s.resolvematrix.dev) |
| `4.s.resolvematrix.dev` | 4 - `matrix` SRV | `srv.4.s.resolvematrix.dev:7855` | [Run test](https://federationtester.matrix.org/#4.s.resolvematrix.dev) |
| `5.s.resolvematrix.dev` | 5 - Default Port | `5.s.resolvematrix.dev:8448` | [Run test](https://federationtester.matrix.org/#5.s.resolvematrix.dev) |

## [MSC4040](https://github.com/matrix-org/matrix-spec-proposals/pull/4040) Domains

MSC4040 inserts new steps to the resolution process and has not been incorporated in a stable version of the Matrix protocol. Tools such as the federation tester might not
be able to handle these domains yet, and result in errors.

When the MSC becomes stable, the existing domains above for steps 3c, 3d, 4, and 5 will be *deprecated* and new ones will be recommended in their place.

| Server name | MSC step covered | Connection address | Federation |
|-|-|-|-|
| `3c.msc4040.s.resolvematrix.dev` | 3c - Delegated `matrix-fed` SRV | `srv.wk.3c.msc4040.s.resolvematrix.dev:7053` | [Run test](https://federationtester.matrix.org/#3c.msc4040.s.resolvematrix.dev) |
| `4.msc4040.s.resolvematrix.dev` | 4 - `matrix-fed` SRV | `srv.4.msc4040.s.resolvematrix.dev:7054` | [Run test](https://federationtester.matrix.org/#4.msc4040.s.resolvematrix.dev) |
