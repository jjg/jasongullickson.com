---
title: "Mildred Pearson (RHaC Part 3)"
date: "2015-10-29"
---

<div class="content">
<p>Proof-of-concept is working.</p>
<p>As predicted, it is slow, but I’m able to store &amp; retrieve data without
actually storing the data anywhere.  It’s tempting to immediately jump into
attacking the performance problem, but I’m doing my best to hold-off until I
understand every inch of what works and why.</p>
<p>After a somewhat long search for a hash function I settled on <a href="https://en.m.wikipedia.org/wiki/Pearson_hashing" target="_blank"> Pearson
hashing </a> .  It seemed to
have the essential properties while being fairly simple to understand and not
deliberately cryptographic.  I’m using a “textbook” implementation which can
probably be improved on, and I’m still studying it so I can effectively
improve it’s performance in my test system.</p>
<p>This brings up the next interesting observation.  I have a hunch that it’s not
the speed of the hashing function that is holding me back at this point but
the speed of the “combinational” code that generates all possible input data.
At first I thought this was a “permutation” problem and found a number of
discussions on optimizing permutation however my problem is a bit more complex
because the range of values isn’t limited to some initial set, just the size
of the input.</p>
<p>I suspect I’m spending at least as much time in the combinational code as I am
hashing, if not considerably more.</p>
<p>So other than documenting current progress, next steps include making sure I
understand all of the parts of the working POC completely, and then inserting
timing measurements to establish optimization priorities.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
