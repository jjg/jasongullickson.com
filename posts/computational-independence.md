---
title: 'Computational Independence'
date: '2021-02-09T07:57:08'
author: mr
draft: false
tags:
  - preposterous
---
Much of the technology our country depends on is not produced here. While some
of these devices are sold by domestic companies, they contain components
produced and/or designed elsewhere.  

  

As a result there are many ways these products makes us vulnerable. On the
benign end of the spectrum, supply chain disruptions result in shortages of
equipment. On the malignant end, bad actors are able to embed surveillance
technology or other harmful features in these components, turning the devices
they are used in against the consumer.

  

A solution I propose to this problem is an effort to use [ FPGA
](https://en.m.wikipedia.org/wiki/Field-programmable_gate_array) technology to
implement as much of a devices component features as possible, and building
domestic capacity to produce more and better FPGA devices, therefore reducing
these dependencies and the risks that come with them.

  

This pays additional dividends as well. Technology built this way can employ a
[ Cradle-to-Cradle
](https://en.m.wikipedia.org/wiki/Cradle_to_Cradle:_Remaking_the_Way_We_Make_Things)
design philosophy as FPGA devices can be easily re-used to implement other
types of components when the useful life of the original device ends. More so
than even general-purpose computers, an FPGA-centric consumer device can
“morph” into an entirely new product by modifying the code that defines the
device.

  

_For example:_ consider the common smartphone: it contains numerous components
which make-up the cpu, gpu, network interfaces, storage devices, baseband
processor, etc. Each of these components perform tasks defined by proprietary
designs that cannot be audited or modified (in some cases they contain
complete stand-alone computers running software even the manufacturer has no
control over). All of this hardware can be synthesized using an FPGA device,
using code written by the device manufacturer, which can be audited and
changed using standard software development tools and practices. When the
product becomes obsolete, all of this hardware can be upgraded using new
design code, or repurposed for an entirely new product.  

  

Another advantage is that by consolidating hardware implementation on a single
type of component the benefits of mass production can be leveraged in ways
that are less effective when producing a wide range of components that change
regularly. Factories built to produce FPGAs can be highly specialized, and
there are fewer intellectual property barriers to entrepreneurs who wish to
build these factories compared with the current model of using proprietary
CPU’s, network interfaces, etc. These factories will need workers, and so not
only do these factories manufacture computational independence, but they also
manufacture domestic jobs.

  

Finally, this approach moves hardware into the software domain, and we have
learned over the past few decades that problems pulled into the software
domain can be solved much faster than almost anywhere else. The methodologies
we have honed over 50 years of software development could be brought to bear
on problems previously limited to hardware designers, themselves hamstrung by
the limits of what hardware producers were willing to manufacture. Under this
approach, hardware technology could evolve at software speeds and software
developers could leverage the ability to design software and hardware
synergistically to produce faster, more energy-efficient and lower-cost
products than ever before.

  

I’m currently working on a roadmap for such a transition and applying this
philosophy to a number of my own designs. So far the results are promising,
and I would love to expand on this with other people who think these problems
are worth solving.

  

  

