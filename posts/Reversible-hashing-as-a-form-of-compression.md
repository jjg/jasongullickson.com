---
title: "Reversible hashing as a form of compression"
date: "2015-10-25"
---

<div class="content">
<p><a href="https://github.com/jjg/jsfs" target="_blank"> JSFS </a> stores files as blocks (1MB typically)
named for a hash of their contents. If it were possible to reverse this hash,
it wouldn’t be necessary to store the contents on disk, right?</p>
<p>So the idea is to use a hash function that is easily reversible when the a
file is stored, and then reverse the hash when the file is  retrieved, thus
reducing the amount of disk storage consumed.</p>
<p>I don’t expect to get this for free, and I anticipate that the trade-off will
be processing time for storage, but I’m interested in exploring that because
processing power increases much faster than storage density, and this problem
has the potential to be “ <a href="https://en.wikipedia.org/wiki/Embarrassingly_parallel" target="_blank"> embarrassing parallel
</a> “.</p>
<p>I figured this was a solved problem but it turns out that most people working
in this space are trying to accomplish the opposite (an unreversable hash) so
it’s been hard to find much prior work.</p>
<p>Right now my only thought on implementation is as follows:</p>
<ul>
<li>At write-time, append a known value to the block data before generating the hash</li>
<li>At read-time, feed random values into the hash function until the known value appears in the output</li>
</ul>
<p>I’m sure there are more clever ways to do this, but I think this will work,
and it can easily be run in parallel. The key optimization would be to select
(or create) a hashing function that can generate a sufficient non-clashing
“namespace” while being simple and fast, and generating as little output as
possible.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
