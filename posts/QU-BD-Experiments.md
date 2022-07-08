---
title: "QU-BD Experiments"
date: "2013-02-18"
---

<div class="content">
<p>I blew-up the heating resistor in my J-Head so while that was down awaiting
parts I thought I’d take another stab at getting the QU-BD extruder to work.</p>
<p>The first step was a modification to the filament drive designed by <a href="http://www.thingiverse.com/whosawhatsis" target="_blank">
whosawhatsis </a> ( <a href="http://www.thingiverse.com/thing:15718" target="_blank">
http://www.thingiverse.com/thing:15718
</a> ).  Fortunately I happened to print
these parts before my J-Head croaked so I had them around to test with.</p>
<p>Next I was happy to find that since my last attempt at getting these extruders
to work someone had published a resistor table that they could demonstrate
good results with.</p>
<p>I updated my firmware settings with this table and made the necessary steps-
per-mm adjustments and then re-ran the PID autotune.</p>
<p>After several tests, the exact same problems from my earlier attempts to get
these to work exist.  I tried one more time with a more extensive resistor
table to make sure I exhausted every option.</p>
<p>I ran the PID autotune again and flipped over to Google to see if I could find
any more nuggets of wisdom that I might use to get something useful out of
this hardware when I noticed a stream of smoke pouring out of the nozzle.
Apparently the resistor table I used wasn’t quite right and the hot-end was on
it’s way to meltdown.  This is when I noticed that setting the temp to 0
doesn’t override the PID tuning procedure and it was time to hit the E-Stop
(i.e., pull the plug).</p>
<p>Thus ends another chapter in the futility of trying to do something useful
with the QU-BD extruder.  I guess I’ll be setting the printer aside until my
replacement parts arrive…</p>
</div>
