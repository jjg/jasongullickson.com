---
title: "Crypton Part 3 - Why?"
date: "2016-09-02"
---

<div class="content">
<p>I feel like the reasons for creating something like Crypton are self-evident,
but that’s probably only true for people who are familiar with encryption
technology or who understand the risks of deligating responsibility for your
privacy to others.</p>
<p>So instead of assuming, I thought I’d talk about some of the reasons I’m
motivated to work on Crypton.</p>
<p>I want to make it impossible for users privacy to be violated because someone
gains control over my server.  This could be a nefarious hacker, a government
agency, or it could simply be a programming mistake.</p>
<p>By encrypting everything before it is sent to the server, and by only
decrypting it after it’s delivered to the user’s computer, the only thing a
hacker or cop can get from the server is unreadable encrypted data.</p>
<p>Other services claim to store user data securely, but they generally have
access to the keys necisary to decrypt the data.  In Crypton, the user
supplies the encryption keys, and they are never sent to the server.  This
means the user has complete control (and also responsibility) when it comes to
their encryption keys.</p>
<p>Another reason I want to build Crypton is because existing encryption systems
are designed for one-on-one communication, and I think there is a lot of value
in the ability for groups to interact privately.</p>
<p>By automating the process of encrypting and sharing messages with a trusted
group, Crypton provides the convenience, sharing and collaboration environment
of a social network with the strong privacy only public-key encryption can
provide.</p>
<p>Another interesting side-effect of the Crypton architecture is that most of
the compute-intensive operations are handled by the client.  This means that
it’s possible to support more users per server than in other systems.  I’d
like to combine this along with my current studies in “big data” architecture
to design Crypton to have the ability to scale affordably.</p>
<p>I don’t expect most people to start using Crypton right away, and I’m
deliberately designing the initial versions to require users who are familiar
with public-key encryption.  I think it is possible to grow the system into
something that could be used by a more general audience, but it’s more
important to me to make sure that it serves people well who need something
like it today, and once that’s perfect we can move on to mass appeal.</p>
</div>
