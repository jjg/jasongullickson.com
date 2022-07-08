---
title: "Tinkercad and Unhosted-style distributed processing"
date: "2013-04-01"
---

<div class="content">
<p>Troubleshooting the <a href="http://blog.tinkercad.com/2013/03/26/announcing-airstone-and-the-closure-of-
tinkercad/" target="_blank"> shutdown of Tinkercad
</a> got me thinking about <a href="http://en.wikipedia.org/wiki/High-performance_computing" target="_blank"> high-performance computing
</a> and distributed
architectures again (specifically in researching alternatives to the <a href="https://tinkercad.com/developer/gen6-intro.html" target="_blank"> Gen6
kernel </a> at the heart of
Tinkercad’s objection to going open-source). While reading the <a href="https://tinkercad.com/developer/" target="_blank"> Tinkercad
developer docs </a> to gain an understanding of
the interface or API of the Gen6 kernel (with the intention of sourcing or
implementing a replacement for these server components of Tinkercad) it
occurred to me that with the introduction of <a href="http://en.wikipedia.org/wiki/Web_worker" target="_blank"> Webworkers
</a> and <a href="http://www.webrtc.org/" target="_blank"> WebRTC
</a> , as well as the commonplace nature of moderately
powerful GPU’s in many computers, perhaps a truly distributed processing
architecture could take the place of the Gen6 kernel in an open version of
Tinkercad?</p>
<p>But why stop there?</p>
<p>Using something like the Javascript/JSON job control structures used by
Tinkercad, why not allow any processing job so defined be submitted to a
browser-based processing grid? Designed correctly, a compute-bound application
could emit its work as chunks of code+data as Javascript functions and JSON to
this grid and tap into extra clock cycles of underutilized systems (perhaps
simply interleaving requests within the single application’s domain, or across
a more global subset).</p>
<p>This seems like it could be a nice complement to the <a href="https://unhosted.org/" target="_blank"> Unhosted-style
</a> decoupled identity and data concepts, adding high-
performance processing capabilities to Unhosted applications.</p>
<p>Participation in such a distributed architecture needn’t be limited to
general-purpose machines either. Specialized processing nodes based on GPU or
custom FPGA devices could be pooled in this fashion, or even spare cycles on
specialized devices such as network hardware or consumer electronics; but
starting at the browser seems like the lowest point-of-entry.</p>
</div>
