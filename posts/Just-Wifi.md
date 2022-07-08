---
title: "Just Wifi"
date: "2016-10-19"
---

<div class="content">
<p>A configure-and-forget device that provides reliable, fast, no-frills WiFi.</p>
<p>It seems like all consumer wireless access points available today focus on
features over quality.  This is probably because it’s hard to market something
simple, and hard to compete from a price perspective unless you can offer some
obvious, user-facing value.  The problem is, as with most mature tech
products, this focus on features undermines the ability for the device to
deliver basic, essential functionality.</p>
<p>What I propose is a device (or perhaps a collection of devices) that do the
opposite.  A wireless access point which, once configured, can be forgotten
about.  I would like wireless networking equipment that is as sexy and
glamorous of a circuit breaker box.</p>
<p>At one time commercial-grade devices existed that met this criteria, and
perhaps they still do, but the ones I’m familiar with focus on features as
well, even if it’s a different subset of features.  Most of these devices (and
their associated administration systems) provide features to manage an army of
access points and deal with the kind of complexities that exist in corporate
or industrial environments (privacy, security, backward-compatibility, etc.).
While necessary in these environments, they don’t really have a place in the
home.</p>
<p>So what I’m proposing is a device which features high-quality hardware running
the simplest possible firmware to provide wireless network access.  I’m even
considering eschewing routing features to keep the device as simple as
possible (perhaps offering routing as a separate device).  The question is, if
I constrain the problem space to wireless only, what’s required?</p>
<p>Minimally this will require:</p>
<ul>
<li>An Ethernet interface to connect to the wired network</li>
<li>A wireless radio to provide signal</li>
<li>A bus to connect the Ethernet interface and wireless radio</li>
<li>A cpu, microcontroller or similar to manage communication between the wired and wireless network, as well as provide a configuration interface, etc.</li>
<li>A power supply

<br/></li>
</ul>
<p>It would seem that there may also be a need for an “out-of-band” configuration
interface (USB, serial, etc.) and some kind of non-volatile storage for
firmware (although this may be incorporated in the cpu/etc.).  It may also be
worthwhile to include some sort of status indicator to communicate the
condition of the device when a fault occurs.</p>
<p>It’s tempting to use off-the-shelf hardware, and there may be something out
there that fits the bill.  I’ll have to do some research but I’m not willing
to compromise the goals of the device just to make it fit into an existing
design.</p>
<p>I’m planning to try another device just because time is of the essense, but
I’ll continue to work this problem and update this post as progress is made.</p>
<p>Reference</p>
<ul>
<li><a href="https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html" target="_blank"> https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html </a></li>
<li><a href="http://www.pcengines.ch/" target="_blank"> http://www.pcengines.ch/ </a></li>
<li><a href="http://www.anandtech.com/show/6180/open-source-router-platforms" target="_blank"> http://www.anandtech.com/show/6180/open-source-router-platforms </a>
<br/></li>
</ul>
</div>
