---
title: "Runtime"
date: "2015-08-08"
---

<div class="content">
<p>I’m looking into various “container” systems like <a href="https://coreos.com/" target="_blank"> CoreOS
</a> because I’m on the hunt for the next level of
refinement of the systems I build and maintain.  These systems are an
improvement over previous “virtualization” technologies from my perspective
because they don’t require the redundancy and overhead of full-blown
“computers” to run each component.</p>
<p>That said, I don’t think containers take this far enough, and to some degree
they are more awkward; not exactly sysadmin territory, but not really
developer turf either.</p>
<p>What I really want is push everything further up, squarely into developer
territory, far enough up to make the term “devops” obsolete.</p>
<p>What I have in mind is just enough O/S to support a <a href="https://nodejs.org/" target="_blank"> Node.js
</a> runtime.  This could be a custom Linux distro, or
better yet, a custom kernel that boots the hardware and supports the native
system calls supported by Node.js.</p>
<p>This would lay the foundation for the higher-order functions I’ve described
before as <a href="http://jjg.preposter.us/thoughts-on-js-os-1-0.html" target="_blank"> JS/OS </a> ,
implemented in pure Javascript.  Of course this is possible now, on existing
operating systems, but I want something simple, fast and secure, that I can
install on whatever hardware I have available and decide later how I want to
distribute application and service code to these nodes.</p>
<p>JSFS lays much of the foundation for these higher-order functions, and as-is
it’s possible to build a wide array of applications on JSFS alone, but I want
to add a few key features that would make this a truly general-purpose
operating system, suitable for almost any imaginable application.</p>
<p>You would think that something like this exists, an OS that “boots to
Node.js”, but if there is, it isn’t quite what I need, or I haven’t found it
yet.  There are many similar things, but the ones I’ve found have different
goals, and therefore depart from my precise requirements.  That being the case
my current way forward is to go the <a href="http://www.linuxfromscratch.org/" target="_blank"> Linux From Scratch
</a> route to build the smallest possible
distro that meets these needs, unless something better comes to mind.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
