---
title: "RHaC Part 2"
date: "2015-10-28"
---

<div class="content">
<p>Need to think up a clever name for this.</p>
<p>So following-up from my <a href="http://jjg.preposter.us/reversible-
hashing-as-a-form-of-compression.html" target="_blank"> last post </a> , I did some experiments and realized
that I was making it more complicated than it had to be.</p>
<ul>
<li>There’s no need to “seed” the data, if you have the hash, then you already <em>know</em> when you’ve found the right source data (the hash will match, <strong>duh</strong> )</li>
<li>Using random input data doesn’t make sense because you could theoretically be searching forever, as opposed to having a finate (if very long) search by simply incrementing through all possible input combinations</li>
</ul>
<p>Since my original post I’ve looked into a number of hash functions and learned
more about the field of study.  I still didn’t find a function that suits my
purpose, but at least I know what to call one that would.  What I’m looking
for is a hash function that is:</p>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Collision_resistance" target="_blank"> Collision-resistant </a> (or ideally. collision-proof)</li>
<li>Not especially <a href="https://en.wikipedia.org/wiki/Preimage_attack" target="_blank"> Preimage attack </a> resistant</li>
<li>Suitably large range</li>
</ul>
<p>More broadly, I want a hash function that is fast to hash and not resistant to
being reversed.  Unfortunately most collision-resistant hash functions are
designed for cryptographic applications where reversability is undesirable.
So I’m still on the lookout for a hash function that suits my oddball needs.</p>
<p>On the upside I’ve seen several conversations that indicate even a brute-force
approach to what I’m trying to do may be feasable due to newer technology that
is becoming more commonplace (GPU’s and FPGA).  Also it’s worth noting that
what I have in mind is almost <a href="https://en.wikipedia.org/wiki/Grover's_algorithm" target="_blank"> trivial for a quantum computer
</a> , so I’ve got that to
fall-back on.</p>
<p>For now I’m going to plow ahead using existing (if not ideal) cryptographic
hash functions and see if I can at least demonstrate results with small input
data.  If that works, then I’ll consider it proof-of-concept, and I can look
deeper at accelerating the reversing process as well as selecting/designing a
hash function more suited for the application.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
