---
title: "NASLite"
date: "2004-07-13"
---

<div class="content">
<p>NASLite turns any i386 box into a Network Attached Storage (NAS) device. In
essense, it is a box of disks (BOD) that you can access via the network.</p>
<p>While this could be accomplished through any number of means, wWhat makes
NASLite interesting is that it is contained on a single floppy disk.</p>
<p>So, to use NASLite, you take a box (even a crusty old 200mhz Pentium), pop
this floppy in it and any disks installed in it can be used as network
storage.</p>
<p>In addition, NASLite can do hardware-independent large-disk access, so for
example, chances are the machine above has an old BIOS and IDE controller
which cannot deal with say, a 160GB disk. NASLite will deal with this on its
own, so you can take your P200, slam four 160GB disks in it an have yourself
500GB+ of fast, reliable network storage.</p>
<p>NASLite provides SMB, CIFS and HTTP network filesystem support and is managed
via a web browser or TELNET.</p>
<p>I haven’t used this yet (I just found out about it today), but I will be
making a disk and experimenting with it over the weekend. The only snag that I
see so far is that it uses a floppy formatted for 1.72MB. This is easily
created on a Linux system but there is no way (that I know of) to do this
under Windows (once I get it up and running and you would like one of these
disks, let me know).</p>
<p>The actual requirements (from the manual):</p>
<p>486DX<br/>
PCI (no ISA or EISA support)<br/>
16MB RAM<br/>
1 to 4 IDE hard disks<br/>
PCI NIC<br/>
3.5” HD Floppy Disk Drive</p>
<p>The entire manual (PDF) can be found here, and is much more useful than the
website for information:</p>
<p><a href="http://www.serverelements.com/bin/NASLite-Manual.pdf" target="_blank">http://www.serverelements.com/bin/NASLite-Manual.pdf</a></p>
<p>The only thing I would have liked to see added to this (and I only say it
because it’s already built into SAMBA, a core component of NASLite) is the
ability to hang a printer off the NAS box printer port and use it as a network
print server. That aside, I think this is a pretty amazing tool and I’ll add a
second part to this post when I have had a chance to actually test it out at
home.</p>
<p>So, using my Fedora partition I create the 1.77 floppy as described on the
website.</p>
<p>I dig out a Dell XPSM200s from my garage and haul it in the house (I picked
this one because it was cleaner than the others).<br/>
Here’s the specs for this box:</p>
<p>Pentium 200<br/>
32MB RAM<br/>
2.4GB HDD<br/>
<sup>10</sup>⁄<sub>100</sub> 3Com PCI NIC</p>
<p>The first time through I want to see exactly what this thing does, so I hook
it up to a keyboard and monitor (turns out this is necissary unless the
default IP is valid on your network). The NASLite disk boots like any other
Linux boot disk, various kernel messages scrolling along, untill it comes to a
login screen. The first time I booted the system I received an error
reguarding the first fixed disk, which was accurate. I had trashed it with
another experiment long ago.</p>
<p>So, once I logged into the NASLite menu, I selected option #4. There was a
warning about lost data (which I ignored) and entered 1 to indicate that I
wanted to setup the first fixed disk. This then formatted the disk and
requested a reboot before it would be avaliable. I rebooted, and this time, no
fixed disk error.</p>
<p>Just out of curiosity, I opened “Network Neighborhood” on one of my other
machines to see if I could see the NASLite box yet; nope.</p>
<p>OK, so I log back into NASLite and take a look at the menu. There is a number
of network-related options (network settings, name, workgroup, etc), so I’m
going to run through that next.</p>
<p>First, I changed the IP from the default (192.168.1.1) to something reasonable
for my network and outside of my DHCP scope.</p>
<p>After making this change, I’m prompted that I must save the configuration, so,
I select “save config” from the menu and after confirming the save, it writes
the config back to the floppy. I think I could have changed the remaining
settings as well and saved them all at once, but I’ll try to follow the rules
first (not that this did not require a reboot).</p>
<p>After saving the config and changing the other parameters (name, workgroup,
etc.) I shut the thing down and parked it in it’s permanent home (behind the
couch). Booting it without a monitor, it became avaliable in about 2 minutes
(remember, we’re reading this from a floppy).</p>
<p>Managing the system remotely is done via a telnet interface which is identical
to the menu displayed on the console. Fireing up “Network Neighborhood” now I
can see the NASLite box.</p>
<p>The box has a default share for the disk I setup along with an INFO share. The
INFO share has a number of webpages that display system information, disk
information and system logs. This was useful in troubleshooting the beeping.</p>
<p>Yes, the beeping.</p>
<p>NASLite has a neat “audible feedback” feature. Since it’s assumed that this
box will be hidden in a closet somewhere without a monitor, it uses the PC
speaker (no soundcard required) to provide feedback on the device’s status. It
has different beeps (described in the manual) for things like “ready”,
“shutdown”, etc. It also provides notification when something is wrong with
one of the disks, using S.M.A.R.T. pre-failure testing (which is performed
every five minutes).</p>
<p>In my case, I’m using a disk that is so old it doesn’t provide any S.M.A.R.T.
data, so NASLite issues a set of warning beeps, every five minutes. I looked
around in the config and didn’t see any way to turn this off (maybe I should
read the ENTIRE manual?)r.</p>
<p>Other than that I have been very, very impressed with NASLite. Within one hour
(including the time-outs I took to take these notes) I have a chunk of
networked disk to dump all of my media and other backup junk. I want to point
out that the manual (PDF) is excellent, easily the best I’ve ever seen for a
GNU project, and the rest of the system works as advertised. I have some
larger disks I’m going to throw in the system this week and really beat it up
(transfer all of my music and some uncompressed video to the thing) and see
how it holds up, but so far my testing has revealed no significant weakness.</p>
<p>I highly recommend this software.</p>
</div>
