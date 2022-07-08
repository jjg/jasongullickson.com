---
title: "Turning the corner (cleanly)"
date: "1990-01-01"
---

<div class="content">
<p>This post is about more Reprap tuning, so if you don’t find stuff like this
interesting, feel free to tune in next week. The first test turned out like
this:</p>
<ul>
<li><p>Layer height: 0.254</p></li>
<li><p>First layer height: 0.35</p></li>
<li><p>Perimeter speed: 30</p></li>
<li><p>First layer temp: 190</p></li>
<li><p>Layer temp: 185</p></li>
</ul>
<p>Dimensionally the part is close, the sides are within .1mm but the height is
about 10.3, which has me worried I have something wrong in the firmware since
I swapped out the z-rods. The thing I was trying to address are “blobs” on the
corners of the Tantillus parts I printed last night. Unfortunately (?) when I
printed this part with the same settings I don’t get those blobs. For now I’m
continue to test to get the dimensions closer, and to address one distortion
I’m seeing where the z axis changes layers. Second Test</p>
<ul>
<li><p>Layer height: 0.25</p></li>
<li><p>First layer height: 0.25</p></li>
</ul>
<p>This didn’t seem to improve the dimensional accuracy, and about <sup>1</sup>⁄<sub>3</sub> the way
through the print left the table, so we should re-test with an initial height
of .35 to see if the part sticks again. Third Test</p>
<ul>
<li>First layer height: 0.35
<br/>
<br/></li>
</ul>
<p>This didn’t appear to have any effect either, but at least the part stayed on
the table. Fourth Test</p>
<ul>
<li>All layer temps: 190
<br/>
<br/></li>
</ul>
<p>I tried making the temp consistent across layers to see if I could get the
first layer to stop shrinking relative to the others.  Visually, the part
looked a little better but it didn’t make a difference in what I’m testing so
I’m taking the temp back down to 185. Fifth Test</p>
<ul>
<li><p>First layer temp: 190</p></li>
<li><p>Other layer temp: 185</p></li>
<li><p>Retract: 0</p></li>
</ul>
<p>This did wonders for the distortion when the z axis is lifted, but I’m afraid
that it’s going to cause stringing so adding back .3mm of retract (vs the
original 1mm). Sixth Test</p>
<ul>
<li>Retract: .3
<br/>
<br/></li>
</ul>
<p>This looked alright but since the cube I’m testing with won’t tell me much
about stringing at this point I re-printed one of the real parts I printed
last night for comparison. Seventh Test</p>
<ul>
<li>Extrusion multiplier:
<br/>
<br/></li>
</ul>
<p>Lowering the extrusion multipler is a way to determine the correct e-steps you
need to make sure you’re feeding the right amount of plastic in to get the
right amount out; too much and you get blobs, so i’m testing reducing this.</p>
</div>
