---
title: 'Cyberdeck Hacking Part 1'
date: '2020-03-23T06:48:00'
author: mr
draft: false
tags:
  - preposterous
---
Joe shared a link to a [ Cyberdeck project
](https://www.cyberpunks.com/build-your-own-cyberdeck-d10d3-rev1/) with me and
it struck-up a conversation about various Cyberdeck projects I've experimented
with over the years. From the first [ Commodore
](https://en.wikipedia.org/wiki/Commodore_VIC-20) I spray-painted and hung
from a strap to more recent experiments with [ phone-based head-mounted
displays  ](https://www.durovis.com/en/opendive.html) , I've been hacking on
'decks and other virtual reality computing systems for  over 20 years  .

My last attempt consisted of a 3d-printeed HMD using a phone for all of the
electronics, and it worked surprisingly well but the closed nature of writing
software for smartphones limited my options for developing the applications I
wanted to use and I set the project aside. However I now have a [ Pinephone
](https://www.pine64.org/pinephone/) , a (mostly) open-hardware phone that
runs Linux, so I want to revisit this approach and see how hard it would be to
build a 'deck around this device.

Hardware-wise there's not a lot to do. I have a cheap smartphone HMD that I
picked-up at Walgreens for about $10 that should work fine to hold the
Pinephone, and this is enough to get started. I'll add a keyboard, and
possibly a [ dataglove  ](https://en.wikipedia.org/wiki/Wired_glove) , but
that can come after I've confirmed that I actually have the coding chops to
write the software I want to make the whole thing useful.

To that end what I have in mind seems simple enough, but I've yet to find
anyone whose written it already. I need a basic framework for creating and
immersive 3d environment, capable of basic navigation and loading 3d objects
using some standard format (I'm most familiar with STL from my 3d printing
work but any standard is fine). The key thing that I need to be able to do to
"bootstrap" the system is the ability to run terminal emulators inside the
virtual environment.

This one simple feature makes the virtual reality immediately useful in a very
practical sense, because it means I can have a portable computer with an
infinate number and size of displays. More importantly it means that I can
build the VR world from inside itself, and I beleive that this sort of
immersive development process is essential to the evolution of virtual reality
applications (I've written about this extensively but can't find the links at
the moment...).

Right now I'm looking into Python-based options, and one that looks promising
is [ BlenderVR  ](https://blendervr.limsi.fr/doku.php) . I don't know much
about it yet but this is where I'm going to start looking. If it can do what I
need, and if the performance is acceptable on the Pinephone, I may have
something more interesting to demonstrate soon.

