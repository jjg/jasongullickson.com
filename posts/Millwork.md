---
title: "Millwork"
date: "2016-08-03"
---

<div class="content">
<p>A few months back I picked up a Lab-Volt CNC mill on Craigslist. It’s an
impressive machine, and seems to generally be in working order.  However the
software needed to drive it is proprietary, and only runs on Windows. Also I
don’t have a copy of it.</p>
<p>So I want to replace the “brains” with something I can work with, and since
I’m familiar with the open-source <a href="https://github.com/grbl/grbl" target="_blank"> GRBL </a> CNC
controller software, it seems like a natural choice for the job.</p>
<p>I spent a couple hours pulling the mill apart (most of which was simply
turning it around, it’s about 400lbs), examining the components and taking
readings. The good news is that it’s very modular, and I should be able to re-
use a lot of the components.</p>
<p>This is what the step drivers look like:</p>
<p>The bad news is that I wasn’t able to simply identify the control inputs and
drive the machine directly using a an Arduino running GRBL.</p>
<p>I’m fairly sure I’ve identified the inputs for the stock stepper-motor drivers
correctly. Using my little <a href="https://www.amazon.com/gp/product/B015X6LZFO/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&amp;tag=jjg00-20&amp;camp=1789&amp;creative=9325&amp;linkCode=as2&amp;creativeASIN=B015X6LZFO&amp;linkId=61acdd12a080cd281edbb9814e5bff1d" target="_blank"> DSO Nano v3
</a>
oscilloscope, I captured signals on the various pins leading to the driver
boards while manually operating the X axis.</p>
<p>This trace was taken from one of the pins leading to the X axis stepper driver
while I was manually jogging the X axis. From the train of pulses seen here I
guessed that this was the “step” pin, which by process of elimination
identified the “direction” pin as well.</p>
<p>However once I connected the GRBL Arduino accordingly, I wasn’t able to move
the axis using GRBL commands. It’s not clear to me why this is exactly, which
I’m sure is due to the fact that I’m still learning how to use the scope and
read the trace captures. Driving the stepper board should be a matter of
feeding it pulses of the right voltage and of the right frequency, so if I can
positively identify what the stock computer is sending, I can figure out how
this is different from what the GRBL board is doing (and hopefully change it
to match the original computer).</p>
<p>I could just replace the stepper drivers as well, but that would make the
project considerably more expensive. Also I don’t know enough about the motors
to even spec. drivers for them, and I’m guessing they need something a little
beefer than the ones I use for my 3D printer.</p>
</div>
