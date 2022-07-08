---
title: "When the heat is on..."
date: "2013-12-16"
---

<div class="content">
<p>…I tend to think a lot about heating.  A few weeks back I was thinking about
networking space heaters to make them capable of out-performing central
heating systems (or at least work more cooperatively with them) and today I
ran across a post on <a href="http://hackaday.com" target="_blank"> Hackaday </a> that had an interesting
take on the same line of thinking: <a href="http://hackaday.com/2013/12/16/a-new-way-to-heat-people/" target="_blank"> heat people not buildings
</a> .</p>
<p>Once I saw this the thought occurred to me: could <a href="http://en.wikipedia.org/wiki/Beamforming" target="_blank"> beamforming
</a> be used to improve upon this
design?  If you’re not familiar with beamforming it’s pretty fascinating
stuff, the first I heard of it was from Mike White describing how it’s using
in wireless access points to improve reception without violating signal
strength limits.</p>
<p>I haven’t thought through the physics of it yet, so there may be some
fundamental problem with the approach, but if I’m right a beamforming
technique could address a number of concerns that have been raised about
Leigh’s current design.  A beamforming transmitter shouldn’t require the
physical apparatus that is required by Leigh’s system (in fact, it might not
require any moving parts at all).</p>
<p>Without moving parts, it may be able to overcome another concern with Leigh’s
design, that is how do you use this technique to provide heat for multiple
people or objects.  Since a non-mechanical beamforming device can change
“focus” orders of magnitude faster than a mechanical armature, heating
multiple targets simply means moving quickly between them.  It’s also possible
that simultaneously focusing on multiple targets is possible, but I’d have to
think that through some more (it might still be round-robin, but so fast that
it seems instantaneous).</p>
<p>The other area in which I’d improve this design is by using a simpler motion
capture system.  Watching the demo, I wondered how the Kinect functioned with
all the infrared being pumped out of the heating unit.  This made me realize
that the targets for this system are (or should be) warmer than their
surroundings, and furthermore their IR signature could be used to measure
their local temperature.  With these two bits of information it should be
possible to design a tracking system based on measuring radiation instead of
movement that would likely be simpler, less expensive and just as (if not more
than) effective as the Kinect motion capture system.</p>
<p>This doesn’t itself allow for personal selection of temperature per se
(although I don’t know that the Kinect-only system would allow for this either
without some sort of visual cue), but preferred local heating could be
accomplished using some sort of device or fob held by the user, which would
eliminate the need for the visual/radiant targeting system altogether (the
signal from the device could be used, in this case it could use existing
beamforming data used to target the device’s wifi radio :)</p>
<p>- Jason</p>
</div>
