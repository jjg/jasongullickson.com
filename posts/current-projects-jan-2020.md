---
title: 'Current Projects -  Jan 2020'
date: '2020-01-21T10:56:18'
author: mr
draft: false
tags:
  - preposterous
---
﻿

**Cray-1 Replica**

A month or so ago I had a passing thought about what it would take to build a
working replica of the first Cray supercomputer. Not an emulator, not a
simulator, not even a binary-compatible re-implementation, but a physical,
hardware, electrically-accurate working replica of the Cray-1.

I didn't give this too much thought at first, but after my off-the-cuff post
about the idea to the fediverse, there was some interest and encouragement for
the idea so I decided to invest a some more time thinking about it. I did some
research (I've studied Cray's work for a very long time, but I never took a
component-level look at the Cray-1) and decided that if I could figure out the
schematic-level details of the machine, I might actually be able to build such
a replica. A 1:1 scale model was out of the question (the original weighed 5.5
tons and consumed more electricity than I think is delivered to my block), so
instead what I have in mind is a machine that uses the same schematics, but is
built from modern surface-mount components. The current target is a 1/4-scale
replica with a system weight under 2500lbs, capable of running from a standard
120v 20A circuit.

Along the way I reached-out to several places that house original Cray-1
computers and I received an invitation to get a personal tour of one located
right here in Wisconsin. I'll be seeing that machine as well as meeting
several former Cray employees in March, so I'll have a lot more to say (and
hopefully show!) about it then.

  

**One Instruction Set Computer**

During my research on the Cray-1 Replica project I learned about a number of
unusual computer designs. One that kind of blew my mind is the One Instruction
Set Computer. Without getting too technical, this is basically a processor
design that implements a single instruction as opposed to the dozens or
hundreds (thousands?) you'll find in a typical microprocessor like the on in
the computer you're using to read this now. As you can imagine a processor
like this is much simpler to design and build, so simple in fact that you can
build one with a handful of logic chips.

I'm interested in this for a number of reasons. The first is that studying it
has deepened my understanding of how computers work significantly. Before this
I understood microcomputers down to the chip level, but now I feel like I have
an understanding down to the gate and even transistor level.

Another reason I find it fascinating is that I could build a processor like
this out of any sort of electronics I want. This opens the door for
experimenting with semiconductors and architectures that would otherwise be
limited to whatever I can find manufactured (even something as flexible as
FPGA is limited to a particular type of logic and silicon semiconductors).

Finally there are applications related to high-performance computing and
cryptography for this type of computer that I'd like to explore. I can see
several potential ways to apply these one-instruction processors to
supercomputer designs for both existing and new applications.

I'm hoping to build one of these machines as something of a stepping-stone
toward the much more ambitious Cray-1 Replica project.

  

**RAIN**

I dusted-off the RAIN hardware last weekend as part of my recent interest in
contemporary AI/Machine Learning applications. I started playing with GPT-2 in
particular and now I'm curious about how to apply traditional high-performance
computing techniques to contemporary AI workloads.

My initial plan was to revive the MARK I hardware because I thought that would
be the path of least resistance, especially given the memory-intense nature of
these workloads. However I found out after investing several hours that the
the old x86 processors are not really supported by the software (in this case,
TensorFlow). I took a swing at addressing this by building the software from
source, but ran into numerous dependency problems and bugs and after a few
hours realized that if I'm going to put this much effort into making it work,
I might as well be doing it on more modern hardware. So I've decided to see
what potential lies in the MARK II hardware.

Along the way I learned of several efforts to make these typically GPU-
oriented workloads run efficiently on CPU clusters and found that there may be
potential for CPU-centered clusters like the MARK II. So I'm using this as a
chance to implement and test some of the improvements I had in mind when I
last worked with the MARK II hardware as well as learning more about where the
pain-points are in these contemporary workloads. Ultimately this lead to
thoughts about providing design and consulting services for AI/ML users to
accelerate their workloads, as well as some RAIN variants I had considered
designing (the Parallel Scientific Workstation comes to mind).

  

**UHF+**

I was getting fed-up with the proliferation of "streaming services"
(essentially re-creating cable TV but worse) and I re-watched the movie UHF.
This gave me the idea for a streaming service with the charm and Quality of
UHF television.

So far what this project amounts to is a Python script that collects videos
from a Peertube instance and plays them on a TV set in NTSC standard-
definition. The long-term goal is to create a "tuner" box you can attach to
any analog TV and watch shows for free with an electron gun pointed at your
face (the way Farnsworth intended).

  

**Paperboy**

Paperboy is probably popped in my head around the same time as UHF+, because
it has a similar old-school feel. This one is even simpler, another Python
script that generates a one or two-page "newspaper" and prints it
automatically each morning before you get up. I wanted a way to read some news
once a day, without ads, and without staring at a computer screen.

The design I came up with uses a list of RSS newsfeeds for source material,
semi-randomly selects a number of articles, generates a summary for each and
lays it out into a two-column printable format. Each summary ends with a QR
code should you "want to know more", which you can scan with your phone to
view the source article.

  

**jed**

This is probably the least interesting (to anyone else) of my current
projects. It's the latest in my endless attempts to create a low-friction
electronic journal, and this version consists of little more than a single
command-line program which when run records the current date and time and then
accepts input until a single "." is placed on a line alone. This is then
recorded to a journal file (just a text file) with a header for each entry. At
this point there isn't even a provision for reading the journal (since it's
just text, there are a million ways to skin that cat).

It has both an "interactive mode" (as described above) and a one-liner mode
where you type the journal entry on the command line as you invoke the
program. I'm not sure what more I'm going to do with this, it works well
enough as-is, it's very limited and doesn't provide any mechanism for
synchronizing the journal across devices. Given the basic textfile nature of
the journal any number of other programs can be used to solve the
synchronization problem, or you can just put it on a flash drive (which is
what I'm doing for now).

  

