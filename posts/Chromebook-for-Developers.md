---
title: "Chromebook for Developers"
date: "1990-01-01"
---

<div class="content">
<p>Thirteen days ago I switched from a loaded Macbook Air to an <a href="http://www.amazon.com/gp/product/B00FJXVRM8/ref=as_li_ss_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B00FJXVRM8&amp;linkCode=as2&amp;tag=jasontheprodu-20" target="_blank"> HP Chromebook
11
</a>
.</p>
<p>Admittedly, software developers are not the target market for Google’s
Chromebook and Chrome OS.  Most of the developers I know believe that their
work requires the most powerful computer they can afford.  I was once in this
camp as well, and when I purchased my previous machine (even though it was
under-powered in comparison to larger notebooks) I made sure that I “optioned
it up” so I wouldn’t find myself suddenly trapped without enough processing
power to do my daily work.  As it would turn out, it wasn’t the limits of the
hardware that held me back, but those of the software.</p>
<p>I’ve been a Unix and Linux user for years, and switched from Thinkpads running
Redhat to Macbooks when Apple switched to using the NeXT-based OSX, having
been a long-time fan of NeXT STEP, but over the last few years I’ve decided to
make a conscious effort to use only open technologies, and after multiple
failed attempts at getting the MBA to run Linux well, I decided to look for an
alternative.</p>
<p>I won’t go into details about the search, but suffice it to say in the end the
machine that fit the most of my needs while being great at running Linux
turned out to be the surprisingly nice and inexpensive Chromebook 11.</p>
<p>I’ll cut to the chase and say that after having used my daughter’s 11 for a
few hours (as we attempted to make it run Minecraft), the only concern I had
about making one my “daily driver” was the 16GB of internal storage.  All my
other needs were met, including a good keyboard (as laptop keyboards go), good
battery life, a nice display and a good balance between screen size and
portability.  On-board processing power seemed adequate under Chrome OS and
even better under Linux, and in every other way that matters to me the machine
performs as well (or better) than the Macbook Air.</p>
<p>What genuinely surprised me was just how well it runs Linux, and how easy it
was to get it setup thanks to David Schnider’s <a href="https://github.com/dnschneid/crouton" target="_blank"> Crouton
</a> .  Following the instructions on the
Crouton Github page, you can have your Chromebook running Linux in about 30
minutes (most of which is waiting for things to download and install
themselves).  When you’re done, you’ll have a nice fast Linux box where all
the hardware works and best of all you can flip almost instantaneously between
Linux and Chrome OS using a keyboard combination.  This lets you use Chrome OS
for the things it does well (web browsing, Google Docs, etc.) and use Linux
for what it does well and keep both environments running side-by-side.  Save
for the fact that you can’t cut-and-paste between the two, it’s quite a
seamless setup!</p>
<p>So in my case almost all of my “productivity” work (email, documents,
drawings, etc.) are done using web-based applications which work great under
Chrome OS.  Additionally I do most of my web debugging and testing using
Chrome so these tasks can be carried out under Chrome OS as well.</p>
<p>The Linux side comes in to play when it’s time to run code, most of which for
me these days is node.js or Python which easily runs well within the limits of
the Chromebook’s hardware.  Additionally other system utilities (network
monitors, etc.) are run under Linux as well as databases (postgresql, redis)
and other server components necessary for my software development projects.</p>
<p>The Linux side also gets use running applications that are not available via a
browser, such as media management, file conversion and some 3d-printing
related things (modeling tools, slicing software, etc.), all of which perform
adequately as well.</p>
<p>So with all this good news what about the limited file storage?  For now I’ve
learned to be cognizant of it and work within the constraints of what’s
available.  I don’t store media files and other types of storage-consuming
things and instead stream the media I need or store it in Google Drive (I
should mention that the Chromebook 11 comes with a bonus 100GB of Google Drive
storage).  That said it’s a concern, and I’m planning to test running my Linux
environment on a USB flash drive to give everything a little more room to
breathe.</p>
<p>My next post will discuss the process of selecting a device to expand the
Chromebook’s storage, migrating an existing Linux chroot environment and an
assessment of the impact this has on usability of the environment.</p>
</div>
