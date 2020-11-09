*Last updated: November 7th, 2020*

Please read this document carefully before accessing or using this service!

# Introduction

Most privacy documents are unreadable. They are written by lawyers and for lawyers,
and in our opinion are not very effective.

Data protection and privacy are important, and we want you to understand the issues
involved. For that reason, we decided to use plain English instead as much as possible
to make our documents as clear as they can be.

When you read "the t2bot.io homeserver", "t2bot.io", or "the Service" below, it refers
to the services made available at https://t2bot.io and https://t2host.io (and any
subdomains of either). These services store your interactions, conversation history,
and provide a means of communication via the open Matrix decentralized communication
protocol with the public Matrix Network.

The public Matrix Network is a decentralized and openly federated communication network.
This means that user messages are replicated on each participant's server and messages
posted to a room are visible to all participants including in some cases any new joiners.
This is explained further later in this document.

When you read "we", "our", or "us" below it refers to t2bot.io's owners and operators -
currently this is a role held solely by Travis Ralston (TravisR,
[@travis:t2l.io](https://matrix.to/#/@travis:t2l.io)).

The Matrix protocol is licensed by the Matrix Foundation which makes it available to
third parties who set up their own homeserver. This privacy policy does not apply to
such Matrix servers run by anyone else - Matrix is an open network like the Web and
this agreement only applies to the t2bot.io server.

TravisR is the Data Controller for the Service. We can be contacted as per the following:

* On Matrix through [@travis:t2l.io](https://matrix.to/#/@travis:t2l.io).
* By email through [travis@t2bot.io](mailto:travis@t2bot.io). Please note that email
  communication is often slower and can have upwards of a 5 business day delay.

Should you have any questions or concerns about this document, please let us know through
one of the contact methods above.

## This is a living document

This document is constantly evolving and being updated. With your help, we want to make
it the best it can be.

If you read something that rubs you the wrong way, or you think something should be
added - let us know using the contact methods above. We'd love to chat!

We don't amend this document for any specific users or use case, but if your proposed
changes apply to all of our users, we'll happily update it for everyone. Scroll to the
bottom to see the history so far.

We will likely improve this document over time and we will take steps to inform our users
about any updates. By continuing to use the Service, you implicitly accept the changes
we make. If updates to this document are ever associated with significant changes to the
way we collect or process your data, we will promptly notify you.

Your access and use of the Service is always subject to the most current version of this
document.

# Access to your data / Privacy policy

Here contains all the information about what we collect and how we use it.

## Legal basis for processing

Under the GDPR (General Data Protection Regulation), we process your data under
a [Legitimate Interest](https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/legitimate-interests/when-can-we-rely-on-legitimate-interests/)
basis of processing to provide you the Service in an efficient and secure manner and
to ensure the legal compliance and proper administration of the Service. Essentially,
this means that we process your data only as necessary to deliver the Service and for
internal administration purposes, and in a manner that you understand and expect. We
also carry out processing that is necessary to provide our Service to you under our
Terms and Conditions and processing that is necessary to comply with our legal
obligations. Where consent is required by law in relation to certain processing, we will
ask for your consent.

We process your information for the purposes of providing our decentralized,
openly-federated, and end-to-end encrypted communication Service, getting in touch with
you, responding to your requests, working with our suppliers to deliver the Service and
enabling its features, ensuring the security of the Service, developing, fixing, and
improving our Service, administering our business, and complying with the law.

The nature of the Service and its implementation results in some caveats concerning this
processing, particularly in terms of GDPR Article 17 *Right to Erasure (Right to be
Forgotten)*. We believe these caveats (described in detail later in this document) are
in line with the broader societal interests served by providing the Service.

In situations where the interests of the individual appear to be in conflict with the
broader societal interests, we will seek to reconcile those differences guided by our
policy.

## A note about how the Service works

We do not provide user accounts on our Matrix homeserver for anyone, other than
ourselves, to use. The Service does store conversation history from the Matrix Public
Network (federation) and third parties when bridged, such as Telegram and Discord.

Where feasible, we will honour this privacy policy and any applicable laws for any
information we do collect on you, including information given to us by remote servers
in the Matrix Public Network and third party services like Telegram and Discord.

## Your rights as a Data Subject

You have rights in relation to the personal data we hold about you. Some of these only
apply in certain circumstances. Some of these rights are explored in more detail
elsewhere in this document. For completeness, your rights under GDPR are:

1. The right to be informed.
2. The right of access.
3. The right to rectification.
4. The right to erasure.
5. The right to restrict processing.
6. The right to data portability.
7. The right to object.
8. Rights in relation to automated decision making and profiling.

We may ask for proof of identity before responding to your request. For more details
about these rights, please see [the guidance provided by the ICO](https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/).
If you have any questions or are unsure how to exercise your rights, please contact us.

## Right to erasure

You can request that we forget copies of your messages and files by contacting us and
making the request clear. What happens next depends on who else had access to the
messages and files you shared.

Any messages or files that were only accessible by you will be deleted from our servers
within 30 calendar days.

Where you shared messages or files with another Matrix user or homeserver, directly or
indirectly, the other party may still have a copy of thsoe messages and files. For
example, if you messaged another user while the t2bot.io homeserver was in the room, the
other participant may still have a copy of your messages although t2bot.io will have
deleted them. Similarly, you may still have a copy yourself even if t2bot.io deleted
your messages. Apart from state events (see below), these messages and files will not
be shared with any new users or unregistered users who view the room after we have
processed your request to be forgotten.

State events are processed differently to non-state events. State events are used by
the Service to record, amongst other things, your membership in a room, the configuration
of room settings, your changing of another user's power level, and your banning a user
from a room. Were we to process erasure requests on these state events and delete them
from a room entirely, it would be very damaging to other users' experience of the room.
For example, banned users could become unbanned, revoking legitimate power levels, etc.
We therefore share state events sent by you with all non-essential data removed
("redacted"), even after we have processed your request to be forgotten. This means that
your username will continue to be publicly accessible with rooms in which you have
participated, even after we have processed your request to be forgotten. The Matrix team
is [actively working on a solution to work around this restriction](https://matrix.org/blog/2018/05/08/gdpr-compliance-in-matrix/#mxid_erasure)
and allow you to be fully forgotten while maintaining a high quality experience for
other users. If this is not acceptable to you, please do not use the Service.

### Exceptional erasure

As described above, erasing a state event may result in our needing to erase the entire
conversation history or room from our servers. Deciding whether to take this drastic
step will require a balancing exercise to be carried out at the time of the request,
and will depend on:

* The nature of the personal data that is being requested to be erased.
* How many other users would have their fundamental rights and freedoms put at risk if
  the request was exercised as such.
* To what degree these other users would have their fundamental rights and freedoms put
  at risk if the request was exercised as such.

The personal data contained in a state event is usually limited to the username, the
timestamp, and the conversation in which the state event was issued. State events only
represent that a user participated in a given conversation at a given time. It is rare
that this data is sensitive enough to warrant its erasure given the drastic impact this
will have on other users.

Each case is decided upon based on the factors listed above. In most situtations we will
not erase state events. In extreme situations, where not erasing state events will place
people at material risk of harm, we may choose to erase state events or remove the entire
conversation.

## Data portability

Under GDPR you have a right to request a copy of the data we have of yours in a
commonly-accepted format. If you would like a copy of your data, please contact us and
indicate as such.

## What we collect

The information we collect is purely for the purpose of providing a communication
service via Matrix. We do not profile users or their data on the Service.

Be aware that while we do not profile users on the Service, third party services may
gather usage data. Where our Service gathers usage data, it is anonymized and will
ask for your consent before sending it to the relevant party. We do not receive
this data.

We also collect information about you when you input it into the Service or otherwise
provide it directly to us. Typically, this will be your username on Matrix.

We do not allow account registrations on our Service and therefore do not record such
information, unlike what may be collected by other homeservers for their operations.

Some bridges on the Service have a capability to use your real account instead of
providing a t2bot.io-hosted proxy account. For example, it is possible to log in with
your full Telegram account on t2bot.io's bridge to access Telegram over Matrix, or
use your full Matrix account on another homeserver to have messages sent by you in
Telegram to appear under your account. In both cases, we record the minimum possible
credentials for these features to work. Logging in may also grant us access to more
personal information supplied by you, such as your real name, email address, or
phone number. We do not store this information unless it is critical for the feature
to work.

We store and distribute the messages and files you share using the Service, and
across the wider Matrix ecosystem via federation, as described by the Matrix protocol
and according to the access rules configured within the system. Storing and sharing
this content is the reason the Service exists.

This content includes any information about yourself that you choose to share.

We may need your personal information to establish, bring, or defend legal claims. For
this purpose, we will retain your personal information for no longer than 7 years after
the date it is no longer needed by us for any purposes listed in this document, as per
the statutory recommendations.

Your IP address is logged when you access the Service. This data is used in order to
mitigate abuse and debug operational issues. Our logs are kept for no longer than
180 days.

## Third parties

As part of being a participant in the wider Matrix ecosystem, the Service may be required
to share your information, messages, and files with users on different homeservers or
even other messaging platforms.

### Federation

Matrix homeservers share user data with the wider ecosystem over federation. When you
send messages or files in a room, a copy of the data is sent to all participants in the
room, including (depending on room settings) participants who join the room in the
future. If these participants are on remote homeservers, your user ID, display name,
messages, and files may be replicated across each participating homeserver.

We will forget your copy of your data upon your request. We will also forward your
request to be forgotten onto federated homeservers. However, these homeservers are
outside our span of control, so we cannot guarantee they will forget your data. Federated
homeservers can be located anywhere in the world, and are subject to local laws and
regulations.

Access control settings are shared between homeservers, as well as any requests to
remove messages by "redactions", or remove personal data under GDPR Article 17
*Right to Erasure (Right to be Forgotten)*. Federated homeservers and Matrix clients
which respect the Matrix protocol are expected to honour these controls and
redaction/erasure requests, but other federated homeservers are outside of our span
of control and thus we cannot guarantee how this data will be processed.

## Bridging

Some Matrix rooms are connected/bridged through to third party services such as IRC
networks, Twitter, or email. When a room has been bridged, your username, display name,
messages, and files may be duplicated onto the bridged service where supported.

It may not be technically possible to support your management of your data once it has
been copied to a bridged service.

Bridged services can be located anywhere in the world and are subject to local laws and
regulations.

Requests to delete/erase data through redactions and erasure requests are shared to
bridged services, which are expected to honour them to the best of their ability. Be
aware that not all bridged networks or bridges support the necessary technical abilities
to limit, remove, or erase your data. If this is not acceptable to you, please do not
use the Service or bridged rooms.

## Integration services (bots and widgets)

We offer a range of integrations in the form of bots and widgets (minature web
applications accessed as part of a Matrix client). Bots are automated participants
in a room. Both bots and widgets have access to all the messages and files in any
room in which they participate, however the Matrix team is working on a more
sophisticated access control system.

## Transfers of your data

If you use our Service, your data will be transferred outside of the EU to other
homeservers and services connected with t2bot.io as this is necessary to provide
the Service to you. By the very nature of our Service, such transfers occur
regularly and we have no control over the safeguards adopted by third party recipients.

Where we engage suppliers to process your data outside the EU, we will ensure that
appropriate safeguards such as the standard contractual clauses are in place.

## Sharing your data in compliance with laws

In exceptional circumstances, we may share inforamtion about you with a third party
if we believe that sharing is reasonably necessary to comply with any applicable law,
regulation, legal process, governmental request, protect the security or integrity of
our Service (security audits, for example), protect us and our users from harm or
illegal activities, or respond to an emergency which we believe in good faith requires
us to disclose information to assist in preventing the serious bodily harm of any
person.

## Commitment to children's privacy

We never knowingly collect, maintain, or process inforamtion in the Service from those
we know are under the age of 16, and no part of the Service is structured to attract
anyone under the age of 16. If you are under the age of 16, please do not use the
Service.

## Updating/Correcting your information

Your information can be updated by you through the service it was originally obtained
from. For example, if information about you sent by one of our bridges is incorrect,
updating your information on the bridged service will correct the issue.

## Visibility of your messages and files

In unencrypted and encrypted rooms, users connecting to our homeserver (over federation)
will be able to see messages and files according to the access permissions configuration
of the relevant room. This data is stored in a format it was received on our servers,
and can be viewed by us under the conditions outlined below.

In encrypted rooms, the data is stored in our databases encrypted but the encryption keys
are retained by you. Some of our integrations support encrypted rooms, and they will be
able to decrypt any messages or files for which they were supplied keys (the default
operating mode of an encrypted room) - they will, however, discard any data not relevant
to them once it has been processed.

We use HTTPS to transfer all data. End-to-end encrypted messaging data is stored
encrypted using AES-256, using message keys generated using the
[Olm and Megolm cryptographic ratchets](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last/).

## How we access your data

We restrict who can access user data internally to roles which require access in order
to maintain health of the Service. We have technical procedures in place to prevent
unauthorized access to user data. We never share what we see with other users or
the general public.

## Third parties which may have access to your data

We host the majority of the Service in [Hetzner](https://www.hetzner.com/) datacenters.
Here is [Hetzner's privacy policy](https://www.hetzner.com/rechtliches/datenschutz).

We host much of the Service in [DigitalOcean](https://www.digitalocean.com/) datacenters.
Here is [DigitalOcean's privacy policy](https://www.digitalocean.com/legal/privacy-policy/).

We use secure private keys when accessing servers via SSH, and protect our cloud
dashboards with a password managed by a password management tool.

We log application data (username, user IP, and user agent). We keep logs for no longer
than 180 days.

## Sale of t2bot.io

In the event that we sell or buy any business or assets, we may disclose your personal
data to the prospective seller or buyer. If we or substantially all of our assets are
acquired by a third party, personal data held by us about our users will be one of
the transferred assets.

We do not sell your data for any purpose.

## Data protection

All of our users' data for the Service currently resides in the same database cluster
which is due to the nature of our Service. We use software best practices to guarantee
that only people who you designate as viewers of your data can access it. In other words,
we segment our user data via software. We do our best and are very confident we're doing
a good job at it, but, like every other service that hosts their user data on the same
database, we cannot guarantee that it is immune to a sophisticated attack.

## Security vulnerabilities

If you find a security vulnerability with our Service, please report it responsibly
per our [security disclosure policy](/docs/legal/security-disclosure-policy-v1).

# Making a complaint

We try to meet the highest standards when collecting and using personal information. For
this reason, we take any complaints we receive about this very seriously. We encourage
people to bring it to our attention by contacting us if they think that our collection
or use of information is unfair, misleading, or inappropriate. We would also welcome
any suggestions for improving our procedures.

If you want to make a complaint about the way we have processed your personal information
to the supervisory authority, you can contact the ICO [here](https://www.ico.org.uk/concerns).

# Document history

* November 2020: created.

**A note to other startups**: this document was heavily inspired by
[Balsamiq's plain English ToS document](https://docs.balsamiq.com/mybalsamiq/tos/).
We were impressed by their championing of plain English, and
wanted to reproduce that as much as possible in our own legal documentation. Feel free
to draw similar inspiration from this document, though be sure to get any documents you
produce checked over by a lawyer. Good luck!

This document is heavily inspired by [matrix.org's privacy notice](https://matrix.org/legal/privacy-notice).
