---
title: "Thoughts on JSFS 4"
date: "2015-11-14"
---

<div class="content">
<p>On Friday I pushed the first  (and second) release of the 4.x series of <a href="https://github.com/jjg/jsfs" target="_blank"> JSFS
</a> to Github.</p>
<p>I’ve been thinking about JSFS for a couple years and have been actively
working on it for the last year or so.  The 4.x series is the result of some
pretty extensive field-testing which lead to a complete re-evaluation of what
is most important to the system.</p>
<p>I started working on JSFS with two features in mind:</p>
<ul>
<li>Storing and retrieving data via an HTTP API</li>
<li>Efficient storage of large amounts of data</li>
</ul>
<p>These needs were met by implementing an HTTP server capable of handling GET,
POST, PUT &amp; DELETE verbs, and performs block-level deduplication on incoming
data before storing it to disk.  Along the way I experimented with a number of
additional features that seemed useful to some of the specific applications,
or related ideas I wanted to explore.</p>
<p>The zenith of the JSFS featureset came during the 3.x series, by which point I
had added directory indexes, encryption, federation, appendable objects,
websocket support, versioning and more.  These features worked great for small
storage pools (&lt;1TB), but production systems with larger pools began to
experience performance degradation based on the implementation of some of
these features.</p>
<p>In some ways this wasn’t a surprise.  Design choices made in early
implementations of JSFS were starting to show their limitations in ways that I
expected (memory consumption) and in ways I didn’t anticipate (ever increasing
start-up times).  Steps were taken to mitigate these issues within the current
implementation, but ultimately it became clear that there were aspects of the
current design that had intrinsic limitations or weaknesses that would need to
go away if JSFS was to scale beyond managing a few terabytes.  Additionally,
the code had grown considerably as features were added, which made testing,
debugging and improving the it much more complicated and time consuming.  As
JSFS was now a production system, I needed to take aggressive steps to resolve
these issues.</p>
<p>Over a weekend I came up with a re-implementation of the storage core that
would eliminate the relationship between pool size and memory.  This approach
eliminated the “memory-resident superblock” which was the source of numerous
problems, but it was also central to the implementation of several features.
I thought I could re-implement some of the features in the new design, but it
would be a “back to the drawingboard” operation so it wouldn’t happen soon.
As I took time to mull this over, production issues mounted and I had to make
a move.</p>
<p>Depreciating features is never fun.  Removing functionality from software is
guaranteed to make users unhappy, even when it’s something that’s only used by
a handful of people and yourself.  But I think it’s important, because I think
a lot of great software gets ruined by pursuing new features instead of
improving it’s core ones.  In my case this happened because there was “spare
time” between the point when JSFS’s core features were implemented and when
the limitations of this implementation were found.  Other causes of this
problem are product or marketing related.  Regardless of the cause, when it
become apparent that a product is letting users down because it is failing to
deliver on it’s original functionality, something must be done, and often
cutting features is the fastest and most reliable way to get there.</p>
<p>I didn’t intend for this to become a philosophical post, but that’s OK.  The
tech world is probably more in need of improved philosophy than technical
documentation.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
