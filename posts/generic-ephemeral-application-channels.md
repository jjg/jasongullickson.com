---
title: 'Generic Ephemeral Application Channels'
date: '2020-03-16T07:03:55'
author: mr
draft: false
tags:
  - preposterous
---
I was reading these “principles” from some law that among other things is
freaking-out the privacy/encryption folks and it made me realize just how
useful a general-purpose ephemeral discovery/relay service could be.

  

[ https://www.justice.gov/opa/press-release/file/1256061/download
](https://www.justice.gov/opa/press-release/file/1256061/download)

  

What got me there is thinking about how these shenanigans (as I understand
them) are mostly enforceable only against companies that store data for the
people who are communicating. This is opposed to say systems where two hosts
communicate directly, in which it doesn’t have any real teeth.

  

But as you know it’s hard or impossible to do that kind of communication
across the Internet due to NAT/firewalls/etc.

  

This isn’t the first time we’ve discussed this, and it got me thinking that if
there’s some sort of standard for on-demand rendezvous  points where two hosts
could find eachother and then either connect directly (or if that’s not
possible, relay data through a proxy it would be useful for all sorts of
applications.

  

This assumes that the relay is reachable from anywhere, and that it only
_channels_ data and **never** stores anything, which requires deliberate
effort.

  

I know of application-specific implementations of such things like TURN/STUN
in telephony, or Syncthing relay servers but I’m not aware of anything more
generic. These also tend to entangle encryption/etc. into their design and I
think that it would be better to leave that to the client because it reduces
overhead and in any secure communications system you’re going to have to
encrypt/decrypt at the endpoints anyway.

  

Im going to do some research to see if something like this already exists. If
it doesn’t, or if what I find doesn’t meet my requirements, I’m going to
experiment with designing & building such a thing.

