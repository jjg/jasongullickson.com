---
title: 'Current Projects'
date: '2019-10-10T10:25:18'
author: mr
draft: false
tags:
  - preposterous
---
I thought I'd take a minute to post an update on several project I'm actively
working on. I might even make this a regular thing...

  

**NextBook**

Ever think about how Google's Chromebooks are pretty great, but Google is
pretty terrible? I thought about this a lot and decided to do something about
it. I started the [ NextBook ](https://codeberg.org/jjg/nextbook) project in
an effort to create a computer that has all the virtues of ChromeOS (and
more!), without the surveillance capitalism.

I also want to create something sustainable by leveraging as much FOSS
software as possible, so I choose to design the system around Nextcloud (hence
"Next" in the name). In simplest terms, NextBook is just enough Linux to boot
the machine and connect to a Nextcloud instance which provides all the
functionality (just as Chromebooks connect to Google's applications).

The devil is in the details of course, and there's more to running a computer
than the web applications provided by Nextcloud. To some extent that's where
the next project comes in.

  

**RESTMetal**

As the name implies, [ RESTMetal ](https://codeberg.org/jjg/restmetal)
provides a REST interface to the underlying hardware of the computer it runs
on. It is a combination of two of my most successful past projects: RESTduino
and JSFS.

I started this project initially to provide a foundation on which to develop a
range of privacy-respecting smart/IoT devices, but as I started to dive-in to
what it would take to build the NextBook, it became clear that RESTMetal could
provide the interface necessary to manage the local hardware resources of the
NextBook (battery level, network configuration, resource utilization, etc.) to
web-based applications which in turn provide a user interface compatible with
the web-based application mode of operation of the NextBook.

So completing RESTMetal is somewhat of a prerequisite for completing the
NextBook, but a lot of that work can be done in parallel before one project
blocks the other. However, a working build of RESTMetal is a _blocking_
dependency for the smart device work, so that project is effectively paused
until a working build of RESTMetal is available.

  

**Share Our Status**

SOS is still in "stealth mode", primarily because the idea is so simple that
I'm afraid if I talk about it too much, someone might implement it and miss
some of the important details. The plan was to quickly create a prototype and
begin field tests a couple months ago, but as it's a hardware project, and my
lab has been dismantled for the time being, work on the prototype is halted
until I get that put back together.

  

**Porting Haiku OS to ARM**

I see a lot of potential in [ Haiku ](https://www.haiku-os.org/) , especially
as a way to make lower-powered (both in terms of compute power and energy
consumption) devices perform well at traditionally resource-intensive
applications. Specifically, I want to be able to run Haiku on the [ Pinebook
Pro ](https://www.pine64.org/pinebook-pro/) , so I started looking into how
far along the work to get Haiku running on ARM was.

As it turns out, there's a long way to go. Not that a lot of work hasn't been
done, but due to the moving-target nature of ARM hardware over the last
decade, there's been a lot of push-pull between what the hardware can provide
and what the operating system needs. This means that a lot of the development
effort went into working-around hardware limitations that in many cases have
since been addressed. The good news is that new porting efforts have a lot
more hardware capabilities at their disposal.

So I've thrown my hat in this ring, and I'm slowly working on getting Haiku to
run on Pine64 hardware. So far I haven't published work on this in any
specific ways (mostly a series of Fediverse posts) but I hope to change.

  

**Preposter.us**

Last but not least, I resurrected [ Preposter.us ](https://preposter.us/) . So
far that has been very satisfying and has already achieved its primary goal,
which is getting me to write more frequently.

Aside from that I've made more progress than expected in tidying things up,
and I'm excited about the prospect of having a pure software project to hack
on over the winter.

  

Of course there are countless other bits I've been picking-at as time allows,
and some long-running projects that get a few cycles as well. But at the
moment, this is the work that I'm currently focused on.

\- Jason

