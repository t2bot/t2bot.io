---
# You don’t need to declare anything in the frontmatter
---

# Federation problems with matrix.org

Matrix is a federated protocol, which means there are several servers all trying to talk to each other to send messages
you send to other people. One of those servers is t2bot.io, and another is matrix.org. There are many more, and you can
even [host your own](https://matrix.org/docs/guides/installing-synapse). As of writing, matrix.org and t2bot.io are the
two largest deployments by traffic in the world, which causes some problems.

## Why isn't the bot joining my room / Why isn't the bot responding / Why are Telegram or Discord messages missing in my room?

If your account ends with `:matrix.org` (for example, `@alice:matrix.org`) then you're on the largest single server in
the world. Currently t2bot.io is unable to send messages to matrix.org in a timely fashion, which means you won't see
what was said for several hours. By registering your account on a different server you will see messages much sooner,
if not instantly, because you will not be stuck behind matrix.org's processing time.

## But I can see other people's messages from other servers on matrix.org just fine! What's going on?

Because t2bot.io is the second largest server by traffic in the world, it means that matrix.org is having to deal with
a very large amount of traffic that t2bot.io wants to send to it. There is no way around this: matrix.org will need to
handle that large amount of traffic in order to function.

## Does this affect Matrix as a protocol?

No. This is a problem with t2bot.io trying to send messages to matrix.org only.

## Can I migrate my account to another homeserver? What server do you recommend?

t2bot.io recommends that you [host your own server](https://matrix.org/docs/guides/installing-synapse) if you can. If you
can't, [feneas.org](https://feneas.org/) has a similar mission to matrix.org and even offers some of the same bridges as
t2bot.io - they're a great option for a place to have your account.

It is not currently possible to migrate accounts in Matrix, though one day it will be possible. You can register for an
account on another server, then with your old account invite your new account to all your rooms. Some tools are available
to help, such as the one [provided by modular.im](https://modular.im/tools/matrix-migration).

If you can't host your own server, and don't want to burden feneas.org, using a hosting provider like [modular.im](https://modular.im/)
to pay for a managed server would be the next best option. Anything to get more users *off* of matrix.org and more spread
out over the network.

## What is matrix.org doing about this?

As part of being the largest server in the federation, matrix.org actively promotes that everyone run their own server
where possible. They are also investigating ways to make Synapse (the most popular server software) to run faster, therefore
allowing for a bit more speed. These plans take time though, and it could be a while before they are fully realized.

## Why isn't this an issue for feneas.org or other servers?

They are small enough where the problem doesn't have the ability to get out of hand so quickly. Because matrix.org is the
largest server out there, it runs into this problem most easily.

## Do you know what the problem is?

Yes, it involves a bunch of complicated math and computing theory, but it is described below if you are interested.

**Technical problem**

*This is highly technical information about the problem - we don't suggest reading this unless you're a server/software
developer*.

Matrix servers work by sending transactions of events to each other. There are two kinds of events: persistent and ephemeral.
Persistent messages are the ones you type and others see - they have an event ID and should be stored and validated by all
servers in the room. Ephemeral events are things that aren't needed for the protocol to function, but are still important to
keep around - this is stuff like read receipts, typing notifications, and some messages sent as part of end-to-end encryption.

The specification only allows for a server to send 50 PDUs (persistent events) and 100 EDUs (ephemeral events) in a single
transaction, and only one transaction at a time. This is to prevent the remote server from having problems with extremely large
transactions and returning an "entity too large" error back. However, this also means that if a server doesn't respond to a
transaction fast enough then another transaction can be delayed. For example, if matrix.org doesn't respond to t2bot.io's first
50 messages then the next 50 could be delayed, which causes the next 50 to be delayed, and so on. Eventually this becomes
unbearable for the server to handle.

The unique problem for Matrix homeservers is that they can't simply work faster to go through the queue of messages: once they
fall behind it is often much harder to catch up. At a large scale like matrix.org or t2bot.io, it results in notices like the
one you're reading now. Because events will be older by the time the server sees them (potentially hours or even days old), the
receiving server, which would be matrix.org in this case, must do some auth checks on the message to ensure it is valid still
and can be sent. Servers typically cache the latest information of a room in memory to make this lookup as fast as possible,
however the day-old information of the room might not be in the cache and would have to be pulled from the database. On a large
server like matrix.org, accessing the database can take a while because the database is extremely busy.

Almost all federated servers see this problem in their lifetime, but because they are not under so much pressure they are able
to access the database faster, which means they can get caught up sooner and pretend it never happened. Unfortunately, matrix.org
is at such a size where it will almost always be behind in messages due to limitations in how fast a CPU can run.
