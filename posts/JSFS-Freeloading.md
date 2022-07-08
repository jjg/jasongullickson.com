---
title: "JSFS Freeloading"
date: "2015-02-08"
---

<div class="content">
<p>I’ve been thinking more about the conversations <a href="https://twitter.com/gl33p" target="_blank"> Preston
</a> and I have had about freeloading (mostly due to
having conversations with people who are against it) and in particular the
idea that freeloading is necessary to achieve reasonable levels of efficiency
in robust or redundant systems. This morning a very concrete, practical
application of this principle came to mind.</p>
<p><strong>Background</strong></p>
<p><a href="https://github.com/jjg/jsfs" target="_blank"> JSFS </a> is a REST/HTTP-based file storage system
I’ve been working on.  JSFS provides block-level deduplication of the files it
stores, which means that each file gets cut up into pieces and only unique
pieces consume disk space.  I plan to write a lot more about JSFS soon, but
I’m holding off until the next release is ready.</p>
<p><strong>JSFS Freeloading</strong></p>
<p>As the number of unique blocks stored increases, so does the likelihood that
the next stored file will contain a block that has already been stored.  Based
on this, it is at least <em>conceivable</em> that some new files will be composed
exclusively of existing blocks and therefore consume no storage at all* in
JSFS.  What I propose, is an extension to JSFS that makes determining this
state user-accessible and that any commercial JSFS store allow files like this
to be stored at no cost.</p>
<p>It might seem unlikely that this could actually occur (a file composed
completely of pre-existing blocks) but in practice it is not uncommon
depending on the nature of what is being stored.  If JSFS is used to store a
lot of small original works from say, a blog author, then this scenario is
less likely.  If it is used to store large media files, and in particular
things like collections of music or video for many different users, it is
actually quite likely that that duplicate blocks exist, and in some cases
complete identical files (differing only in their name or namespace) are
stored as well, in which case it’s obvious that additional copies of these
files will require zero additional storage.</p>
<p>There are other aspects about how JSFS works that will further increase the
likelihood of a no-unique-blocks file scenario, but I’ll leave elaborating on
that that for a later post.</p>
<p>Considering this, it’s not hard to imagine a large commercial JSFS system that
would potentially “generate” a large amount of this “free” storage that would
potentially go unused.  Like waste heat from a power plant, if this can be
captured and used for useful work it pushes the system to otherwise
unobtainable levels of efficiency.  If the SLA’s for this “free” storage are
established and managed correctly, any impact on the “primary” applications
can be minimized or eliminated while empowering users who might otherwise be
unable to afford un-subsidized storage (or avoid the exploitation that comes
with subsidized storage).</p>
<ul>
<li>some resources are consumed to relate the existing blocks to the new file, and of course some resources are required to retrieve the stored file, but these are orders of magnitude less costly than the disk storage that would be required to store the data in a traditional filesystem.</li>
</ul>
<p>--</p>
<p>- Jason</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
