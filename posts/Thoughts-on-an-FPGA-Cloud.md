---
title: "Thoughts on an FPGA Cloud"
date: "2014-06-17"
---

<div class="content">
<p>We were talking about applying <a href="http://en.wikipedia.org/wiki/Fpga" target="_blank"> FPGA </a>
technology to a specific engineering problem at Murfie when <a href="https://twitter.com/gl33p" target="_blank"> Preston
</a> asked “has anyone built a cloud of FPGA’s?”.</p>
<p>It was one of those questions that as soon as you hear it, it seems like an
obvious thing to do, but I’d never heard of it being done, and it’s certainly
in the center of the <a href="http://en.wikipedia.org/wiki/Venn_diagram" target="_blank"> Venn Diagram
</a> of my interests.  Some casual
research doesn’t reveal the existence of such a thing, but it does show why it
might not yet exist.  FPGA products lean heavily in the direction of embedded
electronics, aimed at being incorporated into a piece of hardware and
interfaced with various other physical bits (sensors, actuators, etc.).  This
application doesn’t really lend itself to the “… As A Service” model, but
it’s certainly not the only application for FPGA’s.</p>
<p>Pure software systems can benefit from FPGA implementations if they contain
the right kind of problems.  An easy example of this is the <a href="http://en.wikipedia.org/wiki/Bitcoin_miner#Bitcoin_mining" target="_blank"> Bitcoin miner
</a> , an extremely
compute-bound problem which can be executed much faster (and with dramatically
lower power consumption) using an FPGA implementation of its core algorithm.</p>
<p>While it’s true that most software lack such a clear need for hardware-based
acceleration (and the associated engineering &amp; design), I think that a lot of
modern software has “pockets” of this kind of processing, and especially as we
build systems that rely more and more on hashing algorithms, encryption and
also become more savvy about using asynchronous and parallel-processing
architectures.</p>
<p>So to me the missing piece of a valuable “FPGA <a href="http://en.wikipedia.org/wiki/Platform_as_a_service" target="_blank"> PAAS
</a> “ is an efficient means
of expressing existing or new software in ways that can leverage the
performance, efficiency and flexibility of FPGA hardware.  To some degree this
is a self-solving problem, history shows that making tools available to
developers grows the base of developers who know how to use the tools.  In
addition to expanding the knowledge of leveraging FPGA tech in software, I
think that a properly designed platform could automate the process as well
(runtimes and compilers capable of identifying candidates for optimization,
potentially generating the optimized implementation on-the-fly).  A “ <a href="http://en.wikipedia.org/wiki/Soft_microprocessor" target="_blank"> soft
core </a> “ ARM processor,
implemented in an commodity FPGA will run at about <sup>2</sup>⁄<sub>3</sub> the speed of its
traditional silicon implementation, but the soft processor could also monitor
the code running on it and adapt itself to run that specific code much more
efficiently than a general-purpose processor.</p>
<p>Having given this some thought, I think there is potential for a cloud of
FPGA’s, even if nobody knows it yet.  Projects like <a href="http://h17007.www1.hp.com/us/en/enterprise/servers/products/moonshot/index.aspx" target="_blank"> HP’s “Moonshot”
</a>
and the broader push toward modular, configurable computing point this
direction as well, and it’s hard to imagine a more dynamic platform than one
which can change it’s fundamental hardware implementation at will.</p>
<p>- Jason</p>
</div>
