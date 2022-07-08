---
title: "Crypton Part 2"
date: "2016-08-25"
---

<div class="content">
<p>I’ve managed to spend a little time working on Crypton.  I’ve created a Github
repository (<a href="https://github.com/jjg/crypton" target="_blank">https://github.com/jjg/crypton</a>) which at the moment consists of
some slightly more detailed implementation notes and some experiments with
openpgp.js.</p>
<p>Things are progressing even if there’s not a lot of code to show for it yet.
I’ve been modeling the system in my mind and working through various workflows
and came to a few conclusions that resulted in significant departures from my
original design.</p>
<p>For example, I started by defaulting to implementing a REST API for the
server-side of the system, but after realizing that the bulk of the system
resides in client-side code, and that a communication system should be as
“realtime” as possible, I’m leaning toward implementing a pure websockets
interface to the server.</p>
<p>I used to have to write code and experiment with it to reach these kind of
conclusions, but I’ve noticed over the last couple of years that I can do more
and more of this in my head.  This is helpful because I don’t have a lot of
time in front of the terminal to work on my independent projects, and it’s
also faster than typing it all out by hand.</p>
<p>There’s still a long way to go, and I’m still working to round-up a small
group of alpha testers, but I’m excited to work on the project, and I with any
luck I’ll have something usable to experiment with before the end of the year.</p>
</div>
