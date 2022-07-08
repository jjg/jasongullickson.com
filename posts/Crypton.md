---
title: "Crypton"
date: "2016-08-19"
---

<div class="content">
<p>A social network built on public-key encryption.</p>
<p><strong>Objectives</strong></p>
<ol>
<li><p>Make it easy and fun to have private conversations between individuals and groups</p></li>
<li><p>Make it impossible for anyone other than the intended user (system administrators, server operators, etc.) to view private information, or be coerced into sharing private information with others</p></li>
<li><p>Make it harder for accounts to be stolen, hacked or for users to be impersonated</p></li>
</ol>
<p><strong>Description</strong></p>
<p>Public key encryption a great way to keep information private, almost the best
(the best being <a href="https://en.wikipedia.org/wiki/One-time_pad" target="_blank"> one-time pad) </a>
.  It’s a little bit of work, but for one-on-one communication there are tools
that make it almost as easy as using no encryption at all.  However, due to
the nature of individual-specific keys it’s not great for sharing information
privately with more than one person.</p>
<p>I’ve thought a lot about how to leverage the power of public-key encryption in
an environment where people share information with not only one another, but
also with groups of trusted friends.  I wanted to preserve the privacy of
encrypting information client-side (before it goes out over the network) and I
wanted to avoid any possibility of unencrypted data being stored on a
somewhere other than on the computer of the users it is intended for.  I
essentially wanted the same level of privacy you get from sending messages
using OpenPGP, but also the utility of a basic forum or social network.  What
I came up with is something I call “Crypton”*.</p>
<p>For the user, the experience is similar to familiar systems like Twitter or
Facebook with the exception that a user needs to have a GPG keypair setup in
advance.  The public key from this pair is then used to authenticate to
Crypton.</p>
<p>When an account is setup, a new user supplies their public key to the system,
which in turn sends them a message including a link to log-in to the site.
Once logged-in, the user can send direct messages to other users, or post
messages to a feed which is visible to everyone on the user’s “trusted
friends” list.  The user can view messages sent directly to them, and can
browse a feed containing messages posted by their trusted friends.  All of
these messages are encrypted before they leave the user’s computer, and are
only decrypted when they are displayed on the user’s computer.  Any data
stored elsewhere is stored <em>in encrypted form only</em> .</p>
<p><strong>How does this work?</strong></p>
<p>When a user sends a direct message to another user, it works just like sending
an OpenPGP email: the message is encrypted using the public key of the
destination user.  However when messages are posted to the feed, we have to do
things a bit differently.</p>
<p>When a user posts a message to their feed, the message needs to be readable by
everyone in their “trusted friends” list.  The only way this is possible is if
the message is encrypted using each friend’s public key; so this is what is
done.</p>
<p>When a user posts the message to their feed, it is encrypted multiple times,
once for each member of their friends list, using the friends public key.  The
system then displays these messages to the viewer of the feed so that only the
messages encrypted with their key are displayed, which gives the appearance of
a shared feed.</p>
<p><strong>Challenges</strong></p>
<p>One of the first issues that comes to my mind with this approach is the impact
of changes to the trusted friends list.  In the system described, a friend
added to the list cannot view messages posted to the feed in the past, as no
copy of the message was encrypted for them.  This may be desirable, but it’s
different from how existing systems work so it’s worth noting.  There may be
work-arounds for this, but it would require some careful thought to do so
without creating situations that violate the premise of the platform.</p>
<p>The more troublesome issue occurs when someone is removed from the trusted
friends list.  Since messages are encrypted with the users public key,
technically friends removed from the list can still decrypt messages sent and
posted before they were removed.  Again this may or may not be desirable, but
it may differ from what’s expected.  This could be managed by the system via
deleting the copies of posts and messages encrypted for the removed friend,
but this opens up the issue described above should the user be added-back to
the trusted friends list.</p>
<p>Another potential challenge is sharing, because once a message has been
decrypted by a trusted friend, it’s contents could be re-posted by that friend
and made accessible to users outside of the original author’s trusted friends
group.  There is probably no mitigation for this and hence the term “trusted
friends” is used throughout this document, because users on this list should
be limited to people trusted not to do things like that.</p>
<p>Other complexities like this potentially arise when considering how comments
or responses to posts might work, or how to integrate features beyond basic
messaging and posting in a way that maintains the principle privacy of the
system.</p>
<p>Finally, there are implementation details that have not been discussed that
would allow the system to work efficiently.  Given the amount of duplicate
data, there may be ways to avoid the exponential resource consumption that
could be associated with a system like this if this was overlooked.  I have in
mind several strategies to mitigate these concerns but I won’t go into them
here.</p>
<p><strong>Going Further</strong></p>
<p>The system described provides basic functionality for a social network system
with strong privacy, but it doesn’t have a lot of features.  This was done
deliberately to focus on what makes Crypton different and keep the explanation
as simple as possible.</p>
<p>That said, it’s easy to imagine additional features that would make Crypton
more useful.  The first one that comes to my mind are “scopes” that allow the
user to group their trusted friends so that messages can target subsets of the
friends list.  It’s easy to imagine how you might want to share some
information with family and other information with co-workers, but not both,
etc.</p>
<p>Something else that isn’t discussed is discovery, or how one builds a list of
trusted friends.  Given the nature of GPG and GPG users, it seems like the
starting point would be the ability to allow a user to share their GPG keyring
with the system so anyone the user already communicates with via OpenPGP
messages could be added to their trusted friends on Crypton.  Given the
encrypted nature of the system, traditional means of searching content to find
friends is less of an option, but there may be ways to accomplish that for
users who opt-in to participating in an index, etc.</p>
<p><strong>References</strong></p>
<ul>
<li><p><a href="https://openpgpjs.org/" target="_blank"> https://openpgpjs.org/ </a></p></li>
<li><p>Names are hard, I’m sure this is already in use, it’s just a codename</p></li>
</ul>
</div>
