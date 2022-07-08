---
title: "Pretty Good Privacy"
date: "2016-08-16"
---

<div class="content">
<p>Perhaps inspired by upcoming events, I decided to get things in place to
facilitate secure communications with my compatriots.  After spending years
considering various options, I’ve settled on <a href="https://gnupg.org/" target="_blank"> The GNU Privacy Guard
</a> (GPG), an open-source implementation of the <a href="http://www.ietf.org/rfc/rfc4880.txt" target="_blank"> OpenPGP
standard </a> .</p>
<p>Many systems offer secure communications but most rely on services or software
which belong to, or run on, third-party systems.  Most of these systems are in
turn owned by private corporations.  Regardless of how thick your tinfoil hat
is, even under the best of circumstances these companies can be bought, sold
or simply fail, which leaves your ability to communicate (and the privacy of
your previous communications) in a dubious position.  OpenPGP -based privacy
is a bit more effort, but all you need to use it is a personal computer and
the GPG software, which runs on almost any working computer you can find.</p>
<p>First, some nomenclature:</p>
<ul>
<li><p><strong>OpenPGP</strong> is a <em>standard</em> that defines the way data is encrypted and decrypted, and how the associated keys, identities, etc.</p></li>
<li><p><strong>GPG</strong> is an <em>implementation</em> of the OpenPGP standard, a piece of software that can be used to encrypt and decrypt messages.</p></li>
<li><p>A <strong>public key</strong> is something you can share openly with people you want to communicate securely with</p></li>
<li><p>A <strong>private key</strong> is something you use to decrypt encrypted data sent to you, and you must keep it secret</p></li>
</ul>
<p>Besides GPG, there are other implementations of the OpenPGP standard.  Any
piece of software that implements the standard can decrypt data encrypted by
another, so long as the proper keys are in place.  So, if your friend uses a
commercial encrypted email package that uses OpenPGP-compliant encryption, you
can read their messages using GPG and vice-versa.</p>
<p><strong>Using GPG</strong></p>
<p>There’s a wide-range of tools designed to make using GPG easier, but I
recommend starting with the basic command-line tools so that you have a more
complete understanding of what’s going on.  One of the key problems with
creating secure communications is the ability to loose track of what’s
happening to the information you want to secure.  Once the cat is out of the
bag, you can’t put it back in.</p>
<p>I won’t go into great detail about setting up GPG, plenty of other people who
know a lot more about have done so already (I’ll provide some links below).
What I will describe are the steps involved in sharing an encrypted document
with a college so you can get a feel for what’s involved.</p>
<p>A very common situation where you need to encrypt information is when you want
to share account information with someone else*.  How this is often done is by
writing down the information and sharing it in person, or sending the user
name and password via separate means.  In both these cases, the credentials
are potentially stored somewhere along the way, which makes them vulnerable.
On the other hand, if you use OpenPGP, you can encrypt a file containing the
account information and share it via any means you like with no fear of it
revealing the secret information.</p>
<p>So for example, let’s say I want to share my Netflix account with a trusted
friend; here’s how I would do it:</p>
<p>First I create a file containing the user name  &amp; password for my account:</p>
<p>Second, I encrypt this file specifically for my friend:</p>
<p>gpg –output netflix.txt.gpg –encrypt –recipient ralph@nader.org netflix.txt</p>
<p>Finally, I email the encrypted file.</p>
<p>When my friend receives the email, he downloads the attached file, and
decrypts it</p>
<p>gpg –output netflix.txt netflix.txt.gpg</p>
<p>Then he can watch some shows, change my credit card information or sell the
account to the Russians**</p>
<p>At this point you might be asking <em>“How come Jason’s friend can decrypt the
file but random Internet people can’t?”</em> .  This is where the “trusted friend”
part comes into play.</p>
<p>Before you can share an encrypted file with someone, you will need their
public key.  Once you have someone’s public key, you can add it to your GPG
keychain and create encrypted files which can only be decrypted by the
intended recipient.  This is what is meant by a “trusted friend”.</p>
<p>It’s worth pointing out that it’s not necessary for both parties to share keys
in order to send a message.  Since there is no harm in sharing public keys,
many people include their public keys in email and other communication, or
post them on their websites, etc.  If, for example, you wanted to send a
secure message to a reporter and they share their public key on their blog,
you can add that key to your keychain, encrypt a message for only that person
and safely send it over the Internet.  If the reporter decides to reply to
you, they may request your public key in order to encrypt the response so that
only you can read it, but this isn’t a prerequisite for you to send the
initial message.</p>
<p>It’s worth pointing out again that you need to protect your private key.  If
anyone were to get a hold of it, they can decrypt any data that you ever
encrypted with the key.  There are numerous ways to avoid this, or to minimize
the damage if it happens, but the important thing is that you are aware of how
critical it is to keep your private key private.</p>
<p>Conversely you need to keep track of the private key as well, because if you
loose it, you can no longer decrypt any data that was encrypted with the key.
Arguably this is better than someone else getting access to your private key,
but not much better.</p>
<p>Used correctly, OpenPGP is extremely effective at keeping secrets.  Possibly
more important than the encryption itself is the fact that communicating
securely using OpenPGP relies only on the two trusted parties involved in the
conversation.  It does require some premeditation in order to establish trust,
and that’s not necessarily a bad thing, but that means it’s a good idea to get
things setup before you need them.</p>
<p>There is a common misconception that encryption is only needed by criminals or
perhaps the press or the government, but as you can see from the example
above, there are everyday situations where having the ability to send private
information between trusted individuals is handy and necessary.  We tend to
delegate responsibility for our privacy to others and expect them to provide
secure means of communication, but with OpenPGP we can guarantee privacy
ourselves to a degree far beyond what is possible by depending on an outside
entity, company, etc.</p>
<p>If you’d like to get started using GPG here’s a few links to more detailed
information.  If you’d like to send me an encrypted message to test your
setup, I’ve included my public key below.</p>
<ul>
<li><p>A somewhat terse introduction directly from the source: <a href="https://gnupg.org/gph/en/manual.html" target="_blank"> https://gnupg.org/gph/en/manual.html </a></p></li>
<li><p>A slightly less terse introduction aimed at Windows users: <a href="http://www.glump.net/howto/cryptography/practical-introduction-to-gnu-privacy-guard-in-windows" target="_blank"> http://www.glump.net/howto/cryptography/practical-introduction-to-gnu-privacy-guard-in-windows </a></p></li>
<li><p>A video aimed at reporters: <a href="https://www.youtube.com/watch?v=CU861f5szsQ" target="_blank"> https://www.youtube.com/watch?v=CU861f5szsQ </a></p></li>
<li><p>A high-level guide to setting up encrypted email (this relies on tools that avoid the command-line interface described above, I don’t recommend starting here but once you understand OpenPGP it’s a convenient workflow): <a href="https://emailselfdefense.fsf.org/en/" target="_blank"> https://emailselfdefense.fsf.org/en/ </a></p></li>
</ul>
<p>My public key, should you like to get in touch:</p>
<p>-—-BEGIN PGP PUBLIC KEY BLOCK—–<br/>
Version: GnuPG v1</p>
<p>mQENBFeyZxYBCADD1Cvw8GlmDf3t3gVor/+97jKrjhE1t79U7ysRpTcX4HARN5DU<br/>
Zt+uGZHsMC/SBfhJGkDxnarOeIdfKKdqNgKE6HcjGP92z+h8RGFR0qoj5wxX3qns<br/>
54fJARjSfxnJHKbmoV5hHU8AGiB293a2p44vwlO7S/dVFxglzZ/kVTG9vVtYhlCL<br/>
dxIPALDhMtkL2qnJJgXlGvGdNkU66LI5flKOAvcXFaWxalxmyvBneQ6fve/fFkQd<br/>
VAqY336/bIJ4Qq1RsK0KgKTnidgW+1iZeep3mZS/vPH51iSQ1pSYDcXx0yX3tQtH<br/>
aSFoZmAvmY4sE0KtBqgfjih+wXw3ExepOQT7ABEBAAG0P0phc29uIEouIEd1bGxp<br/>
Y2tzb24gKG9uZSBtYW4gU2t1bmt3b3JrcykgPGpndWxsaWNrc29uQDJzb2MubmV0<br/>
PokBOAQTAQIAIgUCV7JnFgIbAwYLCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQ<br/>
9qxpfgzEoNrzSQgAoccj9KNq1i4MoPw57FXFO5+5mvYxMUjBnkSa5EE3izvLZnzb<br/>
Pu2jWjDtflCOPh5cVUJUSQU1PVS25eCpfVoupMCiZBeYBMhhMVTun7YvK5Q5DoiK<br/>
MwWEaTSi/YyVk+2lRdVtAM5YkGw4nppK3ibDd0lOEwprOb4OPWFHDubvR588QPhU<br/>
lcg7d24oE+UhpxjydaFCHDmJlnN8CSdmh9XzaBkljzfLznb0zgOtwk5Pn9sYJYKs<br/>
uWd+lyD0csn9I2wJAsg4eR3gJUxiaSfwBIXlrRymLSjIFoBxiWp7ACDY+uaowG1y<br/>
b0CUrZG2UpXGSaRHjuYfCt+a3bVNCiWAf9RB5bkBDQRXsmcWAQgAvHmDiaE8PKyB<br/>
dV7FxMCmETnUXuM0/sXvpC6WIStWcDDvW41FdDhGNQQtSKnO9Z+owJ2HFV1Mqp2A<br/>
PtYPZNMQ9+6JUSC8pNipKFgSynKC8SplPeXIxyUYq/hBD3A4UQ7zFNsMDLwwtsbS<br/>
FMjAn7YeH0crmwpFxjvIgNbbi9eVUokgUvDKqZr0VHmP8fmJiDX8QUCNq8J23wz8<br/>
Ua6rEH5gwMRabwCxInn83BPBCtxDFm8EEW+KwJHawaONQcSjnpGfqewTUZhZ6sXq<br/>
rfie8MHWfdrKeidsgNmJ7Bt78mnANsFUybntcsGoE4KKqkMVZoOzxG9Y4SCPSPmv<br/>
G3MQja7dtwARAQABiQEfBBgBAgAJBQJXsmcWAhsMAAoJEPasaX4MxKDa+NwH/A4a<br/>
xv3cQsmW+9WsPWVXVV/CpDf6PhLxjYMka9MgpFCXy9ZQFT6D3liol9p9bjT3iFnH<br/>
vXoQxH8yoTOcadFmm2jaxiuj4mYplq+Iz1TP4dqNOQtOJytiZ8qCOKwL2rAMErl0<br/>
t2voTsTBIX+C60uT5WCdm38LZsAKQsZGm96MFRtolI7al6HcHfq5GYD3AV9eQa2n<br/>
ybnsxi1/BS5cFUK781dpfubf9O78g7JFlHJRaRGl3tks7ybKo+DKgxj7vJFhJhp6<br/>
Ur5XuMkda8V6rDCDdv7fHdtHgqAQewL0LYLYJ4RBLKDB+IC6DMWKdhrUi66/2tuz<br/>
beMs4u8mxFBNt91GUsw=<br/>
=Oeiz<br/>
-—-END PGP PUBLIC KEY BLOCK—–</p>
<ul>
<li>It goes without saying that sharing accounts is in general a bad idea, but there are times when it’s necessary.<br/>
<br/></li>
</ul>
<p>**This raises an important point about using encryption.  Even though the data
is secure in transit, once it’s decrypted anyone can use it, so it’s important
that the people you share with understand this and don’t store this decrypted
information in vulnerable places.</p>
</div>
