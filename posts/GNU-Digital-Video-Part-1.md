---
title: "GNU Digital Video Part 1"
date: "2004-06-10"
---

<div class="content">
<p>One of my steps in moving my home workstation to a GNU platform is to find a
replacement for Vegas Video under Windows.</p>
<p>Starting out with my stock Fedora Core 1 system, I first downloaded the RPM
for Cinelerra. This installed without incident and ran on the first try!</p>
<p>Not only this, but with a little tweaking (setting the recording preference to
Firewire) I was able to open the capture tool and record some video off of my
digital camcorder.</p>
<p>This was going amazingly well!</p>
<p>Of course, it was too good to be true. As soon as I added the clip to the
timeline and attempted to play it back, it was nothing but garbage.</p>
<p>Ok, maybe I was getting ahead of myself with something as heavy-duty as
Cinelerra. Let’s take a step back and try to get something more basic running,
Kino.</p>
<p>Kino is not avaliable as a binary RPM, so we’re going to do this the old
fashion way and download the source. The source is built using the typical
configure, make, make install cycle, but I immediately ran into a snag running
the configure script; libdv is required.</p>
<p>No matter, we download libdv and follow the same process (configure, make,
make install)…wait a minute, there is an RPM, cool!</p>
<p>I want to mention that Fedora has a nice pretty GUI that comes up when you
double-click an RPM. So far I’ve used it twice and it’s been nice to me.</p>
<p>Ok, libdv installed from RPM, let’s try to configure Kino again…</p>
<p>Hmm…same problem. Oh wait, we need libdv-devel, not just libdv (silly me!).
That’s OK, we have an RPM for that as well, so let’s just down that and see
what happens…</p>
<p>…ok, now we need libraw1394-devel (I’ll get the devel package the first time
this time around…) Oh boy, the link from Kino’s site is 404, but we can
still get to linux1394.org. More bad news, no RPM, and no source for
“libraw1394-devel”, just the source for libraw. Ok, we’ll try that.</p>
<p>./configure (ok)<br/>
make (ok)<br/>
make install (ok)</p>
<p>Now, let’s try configuring Kino again…sonofabitch; now we need
libavc1394-devel…</p>
<p>Another tarball, another configure, another make, another make install…</p>
<p>Ok third time’s the charm (this is only the third time, right?). No,
libsamplerate is next up to bat.</p>
<p>(on an unrelated note, I like seeing things like “fortran compiler” when a
./configure script runs, it’s just entertaining).</p>
<p>…and wouldn’t you know that my damn camera battery just died…</p>
<p>Anywhoo, libsamplerate configures, makes and make installs without error, but
Kino’s configure script still can’t find it. It’s looking for samplerate.pc
and suggests adding it’s directory to PKG_CONFIG_PATH. Ok I have a crazy idea;
this file exists in the directory where I un-tared samplerate; what if I ran
the Kino configure script from this directory?</p>
<p>no dice.</p>
<p>OK I’ll add this directory to the path…swing and a hit!</p>
<p>So now we’re configured, let’s try to make kino! (for every compilation,
churn, churn churn). Holy crap this is taking a long time…Ok, make is done,
now make install!</p>
<p>Ok, now that we’re installed…what? Well, let’s start the app by typing kino.
Frak.</p>
<p>“error loading shared libraries”; it can’t find libsamplerate, christ. It’s in
/usr/local/lib, wtf?</p>
<p>OK, maybe when I set the PKG_CONFIG_PATH to the directory where I un-tared the
thing I broke something. Let’s switch it to /usr/local/lib, reconfigure and
see what happens.</p>
<p>Nope.</p>
<p>So off to google and what do I find? Someone posted the exact same problem on
the kino message board, last night.</p>
<p>I think this is a sign, it’s time for bed.</p>
</div>
