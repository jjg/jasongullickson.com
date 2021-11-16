---
title: 'Testing the CI philosophy with jpod '
date: '2021-02-11T07:11:02'
author: mr
draft: false
tags:
  - preposterous
---
[ jpod ](https://github.com/jjg/jpod) is a project to create a replacement for
my old iPod. It’s something I’ve considered building for years, but now seems
like an ideal project to put the ideas in [ Computational Independence
](https://jasongullickson.com/computational-independence.html) to the test.

  

A block diagram of the hardware might look something like this:

  

![](/assets/109-image0.jpeg)  

  

I’ve already found examples that will serve as a starting point for
synthesizing most of these components, and for the most part they can be
implemented in hardware. The only part that I’m not sure about is interacting
with the file system on the SD card (list the files, read metadata, etc.) and
providing an interface for the user to control playback.

  

For this it may be necessary to write some software, and if we need software,
we need something to run it on. There’s no shortage of examples of “ [
softcore ](https://en.m.wikipedia.org/wiki/Soft_microprocessor) ” CPU’s
capable of running the kind of software needed for this application, but we
are limited by the size of the FPGA. In this case I want to try and make the
entire player fit into a [ upduino
](https://tinyvision.ai/products/upduino-v3-0) device, so simpler is better.

  

Another constraint is how we want to write the software. The simplest thing to
run would be some sort of assembly language, but this is also probably the
hardest thing to work with from the programmers perspective. If I want to make
something someone else might possibly program, I need to at least consider how
this choice limits the programmer audience. Going up one step to a language
like C isn’t much more difficult on the hardware side, but it doesn’t broaden
the programmer audience much more than a single order of magnitude (at best).
It also adds the need for a compiler, which is not a trivial thing to build,
and using an existing one means constraining the CPU design, so this path
starts to pile-on complexity without providing a lot of benefit to the
programmer.

  

At the other end of the spectrum are interpreted languages like Python, which
at first might seem like ambitious targets for a simple hardware design, but
there is a version called [ MicroPython ](http://micropython.org/) that
targets microcontrollers which are similarly resource-constrained. Could we
cram a core capable of running MicroPython into this project?

  

I started looking into the [ porting process
](http://docs.micropython.org/en/latest/develop/porting.html?highlight=porting)
and it looks like I’d still need to find a way to compile C code for the
target machine, but if this is a task for the firmware developer (as opposed
to someone interested in programming the finished device) having a polished
toolchain is less important. The real question is how much hardware is needed
to provide the resources to run the minimal port, and will this port provide
enough functionality to write the user interface? A second question is, will
it run fast enough?

  

Clearly I have a **lot** more research to do, but so far I haven’t ruled out
the possibility of using MicroPython as the programming environment for jpod.
If this is possible it goes a long way toward the goal of designing a device
along the CI principals.

  

  

  

