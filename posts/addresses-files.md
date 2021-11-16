---
title: 'Addresses > Files'
date: '2021-08-17T15:01:00'
author: mr
draft: false
tags:
  - preposterous
---
This article is pretty mind-blowing in general, but it also brings up
something I’ve thought about for a long time and have recently been
revisiting.

  

[ https://www.nextplatform.com/2021/08/13/the-power-of-power10s-memory-
inception-clustering/ ](https://www.nextplatform.com/2021/08/13/the-power-of-
power10s-memory-inception-clustering/?mc_cid=25783881f5&mc_eid=6cb0346eb1)

  

The idea is simply to eliminate the idea of “storage” as separate from
“memory” and replace it with a large, single, non-volatile memory.

  

This seemed so obvious to me that when solid-state storage chips started to
became a commodity, I assumed that they would be implemented this way (instead
of emulating the hard disks they replaced).

  

There are obvious and subtle benefits to this approach. One advantage is that
it eliminates all sorts of hardware and software that goes into writing data
in memory out to a storage device and then reading it back in again. There is
also a lot of overhead and completely inside operating systems to manage these
devices and access to them by other software. There is also the file systems
themselves, which are complex and require maintenance. Finally there is the
need for applications to translate data structures in memory into formats that
can be stored (often there are limits to this).

  

When memory can be trusted not to loose data when the power goes out (expected
or unexpectedly) the whole system becomes a lot simpler, but also a lot
_faster_ .

  

I’m sure there have been systems that used this before. I’m aware of at least
two that I think fall into this basic idea (although I’m not 100% sure): the
Apple Newton and the TRS-80 Model 100. It was work on a system akin to the
Model 100 (assembly programming on my RC2014) that has rekindled my interest
in this architecture.

  

Pictures and more details are in order, but they will have to wait until I
have more time to play with this.

