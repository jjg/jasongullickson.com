---
title: "JSFS-"
date: "2015-09-24"
---

<div class="content">
<p>JSFS’s scalability limits center around two things:</p>
<p>1.  The memory-resident superblock</p>
<p>2.  Maximum memory available to a single Node.js process</p>
<p>The memory-resident superblock means that memory utilization grows in-step
with storage pool size.  This design choice was selected to focus on
performance as opposed to absolute scalability.  JSFS outperforms other
deduplicating file systems in terms of memory efficiency (RAM-to-storage
ratio) but this still limits maximum storage based on available system memory.</p>
<p>The first problem wouldn’t be quite so bad if not for the second one.  If the
maximum JSFS storage pool size was limited to the amount of memory in a 64 bit
address space this would seldom be a showstopper, however Node.js imposes a
per-process memory limit that is significantly lower than what a 64 bit system
can address.  It’s hard to get an authoritative answer about the limit but
from what I’ve read it’s at most 4GB and possibly as low as <strong>2GB</strong> .</p>
<p>When I settled on the memory-resident superblock I wasn’t aware of this
limitation of Node.js.  Even so I did consider other implementations that not
only eliminate the memory-resident superblock (and associated scalability
limits) but also make it possible to leverage multithreading more, which can
help work-around Node.js’s per-process memory limits.</p>
<p>The reason I didn’t pursue these options, aside from not knowing about
Node.js’s memory limits was that they would make some of the features I wanted
to include in JSFS either more complex or potentially impossible.</p>
<p>Now that I’m aware of the memory issues I must adopt one of these other
designs in order to scale JSFS for one of my core use cases.  That said I
don’t want to throw away functionality for systems that don’t have the
scalability requirements I’m facing with this one case.</p>
<p>So my plan is to fork the project, and since the forked version will have
fewer features, I’m calling it JSFS- (as opposed to JSFS+).  This might seem
counterintuitive as this fork will be capable of handling much more storage
(and potentially more load as well), but I want to make it clear that it is
not a “superior” version of JSFS, but simply a more specialized one.</p>
<p>I do want to maintain API-level compatibility between JSFS and JSFS-, as well
as federation support to the degree that it makes sense.  There will however
be a few features that will have to go, and there may also be a performance
penalty when compared to JSFS, at least when storage pool sizes are below a
certain threshold.</p>
<p>I haven’t completed the design for the new version yet, but right now it’s
clear that the “directory” functions (returning an index of files stored
within a namespace or path) will probably have to go.  It’s also likely that
versioning will be eliminated as well (although this is less certain).  Write
performance is likely to take a hit as the inode data previously stored in-
memory will be written out to disk (although with this new distributed
superblock design, synchronous writes may not be required).  Read times are
likely to be slower too although there may be some ways to work around this.</p>
<p>Since there will be no more monolithic superblock it will be possible to split
reads and writes off into separate processes which will help improve
performance on multi-core systems (as well as reduce the impact of the Node.js
memory limit).  It remains to be seen exactly how far I can go with this
before the overhead of each process become inefficient, but it’s at least more
parallelizable in theory compared to the memory-resident superblock.</p>
<p>I hope to begin working on JSFS- within the next week.  I don’t expect it to
take more than a few days to complete the coding, but testing is another
matter (especially at the scales in targeting.</p>
<p>I’ll post updates here as the project progresses</p>
<p>// jjg</p>
</div>
