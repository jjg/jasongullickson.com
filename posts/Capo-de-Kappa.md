---
title: "Capo de Kappa"
date: "2016-08-30"
---

<div class="content">
<p>A few years back I began working on a dynamic computing platform based on
Javascript.  The idea came to me when a cluster of nodes I was using to
perform media processing grew large enough that updating the code on them
became a multi-hour endeavor.  It occurred to me that instead of simply
delivering the job data to each node, the code it executes could be delivered
via the same queue, and this way the software on each node could consist of
nothing more than an operating system and a runtime (in this case, Node.js).</p>
<p>This led to the question of administration in general, and I started to design
a way to deploy &amp; manage nodes using the same mechanism, so that a fleet of
nodes could be managed by simply placing jobs in the queue.  Of course this
led to re-evaluating the queue, so on and so forth.</p>
<p>In the end I designed an architecture I called “JS/OS” and did some
experiments.  Ultimately I didn’t implement this as a solution to the task at
hand (some other emergency preempted completing the work) but a number of
interesting architectural patters became apparent when I explored this
approach.</p>
<p>Today as I study data science and the architectures for “big data” systems,
what I see are the infant forms of the systems I was designing for JS/OS, and
what’s exciting is that there was an even more exotic idea which derived from
that work that might be applicable to contemporary streaming “Kappa”
architectures.</p>
<p>Once, in a meeting where I was discussing the idea of having dynamic code on
processing nodes some exceptions came up about node hardware and media
processing limitations of the inexpensive computers we were experimenting
with.  Thinking along these lines I proposed that using a hybrid ARM/FPGA-
based machine might address this because an FPGA codec implementation could
provide hardware assistance.  This train of thought led to thinking “could we
make the FPGA’s code dynamic as well?”, which in turn led to the thought “What
about a cloud of FPGA’s?”</p>
<p>I thought this was fascinating, but the missing component was making FPGA
programming accessible to the average programmer.  I won’t try to explain why
here, but the key difference is that FPGA logic happens immediately, signals
go in, signals come out.  This is a lot different from how software tends to
work, with internal state, looping structures, etc.  So a cloud of FPGA’s
would be cool, but it would require specialized programming skills (and a
skill-set that most cloud-oriented developers lack).</p>
<p>But what if we could make it approachable?  There is some design overlap
between the stateless design patterns popularized by work centered on
implementing REST API’s in Node.js.  If you could describe FPGA programming in
these terms, it’s conceivable that typical programmers could take some
advantage of an FPGA cloud.</p>
<p>However even this seemed too specialized to pursue, and in any event, there
was another emergency to deal with so I set it aside.</p>
<p>This is the part of the story where it all comes together.</p>
<p>While studying Hadoop and other big-data processing architectures I started to
see similarities to the problems and solutions I had explored while working on
JS/OS.  Furthermore, the stream orientation of kappa architecture systems
dovetail nicely into the stateless, stream-oriented approach I had in mind for
applications suitable for a “cloud of FPGA’s”.  This being the case, an FPGA-
enabled JS/OS might not just be a suitable platform for kappa architectures,
but it could provide orders of magnitude leaps in performance, if it can be
realized to its potential.</p>
<p>I’m going to set this thought on the back burner (but still on “simmer”) while
I continue to study the current state of big-data infrastructure, but if
nothing I learn invalidates the idea, I might invest some time in revisiting
JS/OS, even if it means changing the name due to implementation details  😃</p>
</div>
