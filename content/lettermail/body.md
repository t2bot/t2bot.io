t2bot.io's lettermail bridge connects Matrix to the physical world through real letters sent and received
via the postal network. This bridge is best thought of as a proof of concept to show that any network can
be bridged to Matrix - serious usage of this bridge is not expected at this time.

## Sending a letter to Matrix

Writing a letter to a Matrix room is easy: write your letter like you normally would and include a QR code
generated by [post.t2bot.io](https://post.t2bot.io) in the envelope.

Here are our recommendations for your letter:

* Use a serif font, preferably printed from a computer, to ensure the automated systems convert the letter
  correctly.
* Do not include any personal information within the envelope. Everything inside the envelope will be sent
  by the bridge to Matrix, which will include any return addresses in the letter. Start your letter with a
  simple "Hello" and optional date rather than a from/to address.
* In your return address on the outside of the envelope, use a name that you're comfortable with seeing in
  the room. The bridge will not reply to your letter, so it is acceptable to also omit the return address
  completely. Only the first line of the return address, if present, will be used as the sender's name on
  Matrix.

Once you have a letter, QR code, and apporpriate postage paid, send the letter to:

<address>
t2bot.io letter mail<br>
9450 SW Gemini Dr<br>
PMB 93379<br>
Beaverton, Oregon  97008-7105 US<br>
</address>

Depending on your location and postal network delays it may be several weeks before the bridge sees your
letter. If there are any problems trying to send your letter to Matrix, it will be ignored. Mail is destroyed
once processed by the bridge.

## Receiving letters from Matrix

Similar to subscribing to a mailing list digest, this bridge can send you weekly letters summarizing what
happened in the rooms you asked for updates in.

The bridge is surprisingly expensive to run and only a proof of concept, so a limited number of subscribers
are permitted by the t2bot.io bridge at a time. To help give everyone a chance at seeing the bridge work, the
bridge will only send up to 4 weeks worth of letters to a single person before giving that person's spot to
someone else. Individuals can re-subscribe at any time to be placed back into the queue, and can unsubscribe
at any time to give up their spot early.

**Note**: The t2bot.io bridge also limits the number of rooms and messages which are included in the sent letter.
This is meant to send something as a novelty piece rather than as a practical digest of rooms sent via the postal
network.

To start the process of subscribing, send a direct message to [@postmaster:t2bot.io](https://matrix.to/#/@postmaster:t2bot.io)

## Sending a letter from Matrix

It is not currently possible to send a letter from Matrix to an address. This sort of feature would open the
way for new kinds of spam mail and be expensive to run - if anyone has solutions to either problem, please
consider contributing to the bridge itself.

## Purpose / how it works

Source code for the bridge can be found on [github](https://github.com/t2bot/lettermail-bridge)

The bridge exists to show that any network can be bridged to Matrix, including those outside the world of
instant messaging. Though the bridge is limited in functionality, it is not completely infeasible for it to
support other functionality like per-user mailboxes (using address line 2 or other markings on/in the envelopes).
Contributions to help further the bridge's capabilities are welcome.

The bridge currently relies on two specific services:

* [Lob](https://www.lob.com/) for sending mail from Matrix to mailboxes.
* [Earth Class Mail](https://www.earthclassmail.com/) for receiving digitized mail that gets sent into Matrix.

Both providers are costly to operate in this way for a free service like t2bot.io, which is why there is a waitlist
structure in place on the more expensive side of the bridge (Lob). Earth Class Mail (ECM) is expensive, but only
if mail ends up going to storage rather than being shredded after processing.

The two providers were chosen due to their API capabilities - other services which do similar things exist, though
have poor/no API support and are not as suited for a bridge.

The bridge regularly scans the ECM mailbox for mail that hasn't been scanned yet and asks for it to be scanned.
ECM takes about 3 business days to scan a piece of mail, though after waiting 1-3 weeks for a letter to even make
it that far a few extra days are of no concern. Once the mail is scanned, the bridge downloads the PDF (which is
OCR'd by ECM) to look for QR codes on or in the envelope - if it finds *exactly* one, it tries to parse it as a room.
If that room appears like a valid destination, it sends an HTML-ified version of the letter (not the envelope,
which is the first page of the PDF) to the room. Once sent, the letter is destroyed to save on costs. Destruction
of the letter can take a couple weeks. If at any point the bridge fails to do something in this step, the bridge
operator is notified to take manual action - the mail is not destroyed until processed by the bridge.

For sending, the bridge simply batches up the rooms for each active subscriber and looks at the most recent messages
of each room. If it hasn't already sent the messages is found, it adds them to the letter and sends it off. If no
messages would be sent, the bridge will send an empty letter to indicate as such.

For mitigating cost, the bridge imposes limits on how many active subscriptions there are, how many rooms/messages
are sent out in letters, and attempts to destroy received letters as quickly as possible. Though paid offerings
would help with some of the cost, t2bot.io does not currently plan on providing this as a paid bridge.
