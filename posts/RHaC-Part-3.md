---
title: "RHaC Part 3"
date: "2015-11-06"
---

<div class="content">
<p>I think I’ll be taking a break on the reversible hash as compression project.</p>
<p>The idea is fun and the potential is exciting.  I think the theory is sound
and my initial proof-of-concept demonstrated that it could work.  The next
step was to reach a “break-even” point (to borrow from nuclear reactor
vernacular) and this was achieved, although the results were sobering.</p>
<p>I had originally planned to optimize the code from the proof-of-concept
experiment before trying to reach break-even, but then decided it made more
sense to at least <em>attempt</em> it with the original code.  So I set this loose
and about a day later (27.76 hours) break-even, storing as much data as was
represented by the hash value, was achieved.</p>
<p>The sobering part was the throughput: <strong>1785 seconds per bit</strong> (as opposed to
bits per second).  Now I understand that no effort was put into making the
code faster, and of course no parallelization, etc. was applied.  These
results are from a very crude C program that I wrote in a couple hours (and my
C is pretty rusty), so I didn’t expect it to be fast.  But I do think it
throws some light on just how significant of a challenge this project will be.</p>
<p>I still feel confident that this can be done as none of my findings so far
disprove it.  I do however think it is ambitious enough that it will take a
dedicated amount of time to work on and it’s not something I’ll be able to do
in spare hours here-and-there.  I’ll need to dedicate extended periods of
clear-headed mental energy to the work and  I’ll also need help, because as
much as I’d like to learn all that is needed to accomplish this goal, doing so
will extend the timeline indefinitely.</p>
<p>I also still believe that it is worth pursing.  Even a modest accomplishment
could yield enormous value.  This is why I’m setting forth a simple and
achievable rubric for success:</p>
<p><strong>1 megabyte, 320 kilobits, 32 bytes.</strong></p>
<p>One megabyte represented by a 32 byte hash, stored and retrieved at a rate of
320 kilobits per second.  This goal achieves a outstanding compression ratio
while maintaining a data rate suitable for high-quality audio and moderate-
quality video playback.  Achieving this goal would allow for the creation of a
media player capable of holding hundreds of millions of songs, or tens of
thousands of hours of video, on a $25 SD card.  It could contain all of
Wikipedia and be updated daily over the most meager Internet connection.  If
it can be achieved with reasonable power consumption (which I believe it can
through an FPGA or ASIC implementation), it could fit in your backpack or your
pocket and be recharged by the sun.</p>
<p>I think this is an achievable and worthwhile goal, and warrants the dedication
it will require.  However I’m not sure how to arrange the necessary resources
at this time, so I’m going to have to suspend the project until I’m able to
solve that problem.  As usual the barriers to innovation are not technical or
scientific ones.</p>
<p>In the meantime, I plan to gather my notes and document my thoughts on the
concept (this is part of the effort) so they are not lost and I can make them
available to others who are interested in working on the parts I’m struggling
with.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
