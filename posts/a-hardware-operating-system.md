---
title: 'A Hardware Operating System?'
date: '2020-09-14T23:37:48'
author: mr
draft: false
tags:
  - preposterous
---
﻿  Reviving the [ VROS ](https://github.com/jjg/vros) project has radiated a
number of new ideas, some relevant to the immediate work, some to what’s next
and some... further out in the future.

  

As I’ve worked my way down to finding the most fundamental ways of putting
pixels on the screen in Linux, I’ve been careful to avoid anything too
specialized. One of the requirements of the work is to preserve portability,
as my long-term plan is to produce a stand-alone operating system even if for
now I’m using the Linux kernel as an interim solution.

  

Exploring a space with these constraints in mind while researching how to
build a networked virtual environment yields a lot of problems to solve. Many
of the existing solutions to these problems are compromises due to accepted
limitations of tooling dependencies, operating system compatibility or simply
the limits of the underlying hardware architecture itself. Since my goal is to
produce a new operating system and ultimately a reference hardware design, I
have a lot more latitude when it comes to solving these problems.

  

One example is updating the display in a timely fashion while servicing
multiple input devices which move objects around in the virtual space. A pure
software approach to this might block the display rendering while reading each
input device in a round-robin fashion. A more sophisticated implementation
might use threads and an event-driven model to allow each input device to
update its position when the user moves. Either way at the hardware level the
processor is still doing one thing at a time. Even in a multiprocessor system,
there is usually a central thread that has to coordinate the work of each core
or bus limitations that prevent completely parallel operation.

  

This lead me to imagining what implementing something like this in hardware
might look like using an FPGA. The result was something akin to how a
mainframe works, using separate processing units for each input/output
“channel”, each with a dedicated connection to a memory where the virtual
world “state” is stored.

  

It’s akin to implementing the threading and scheduling purely in hardware,
which got me thinking: how much of the operating system I’m designing could be
implemented in FPGA-programmed logic, and has something like a pure-hardware
operating system been done before?

  

To answer that question we have to get specifics about exactly what an
operating system is. You could argue that the ROM BASIC in the 8-bit micros
from the early 80’s was an operating system, and at some level this was
technically implemented in hardware (after all ROM chips are just arrays of
programmable gates), but the traditional term for that is firmware. I think
what I’m describing is distinct from a ROM-based O/S in that what I’m
imagining is synchronous logic, not instruction code fed to a single CPU for
execution.

  

_(a diagram might be helpful here)_

  

Of course implementing something on the scale of a Unix system in this way
would be hard to imagine, but what I have in mind for VROS is orders of
magnitude simpler than Unix, and it’s almost exclusively event-driven nature
is actually simpler to implement in hardware than it is in software.
Responding to hardware interrupts, controlling access to memory, performing
mathematical calculations, these are all operations that have been delegated
to specialized hardware over the years. In the case of VROS, this doesn’t
leave a lot left to implement in the operating system software.

  

One remaining advantage to a software operating system is the ability to
easily upgrade the system, even without physical access or new hardware.
Traditionally this was a major advantage, but with an FPGA-based system, this
sort of upgrade is possible even for hardware.

  

So far this idea is little more than a thought experiment, and the need for
such a thing is at least three or more iterations down the road for what is
needed for VROS. But I found the idea intriguing enough that I wanted to make
sure I surfaced it somewhere so that if nothing else I could return to it
again when time and resources allow.

  

  

[ @jjg@theneuromantics.net ](https://theneuromantics.net/web/accounts/1)

