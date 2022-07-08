---
title: "A Page-Oriented UI"
date: "2015-08-01"
---

<div class="content">
<p>Since the first GUI’s scrolling has been a stable of the genre.  Today it is a
given that a graphical interface will involve scrolling windows of content, as
if there is an inherent value in displaying information this way.  In reality,
scrolling was a compromise driven by the limits of graphical displays in the
1980’s.  These limitations has long since been overcome, and now even
inexpensive screens are capable of displaying full print-quality pages of
information.  This opens up the possibility of returning the graphical
interface to one that is page-oriented, and the elimination of scrolling.</p>
<p>If you’re already questioning the feasibility of this consider the fact that
until about 1984 all information was conveyed via page-oriented interfaces,
notably books and periodicals.  This was not only sufficient, but centuries of
refinement had reduced the process to a science, and even today many web
designers attempt to emulate the practices of the printmakers of old.  By
eliminating scrolling views and applying traditional page layout techniques we
can leverage this knowledge to produce not only higher-quality information,
but a more pleasant experience as well.</p>
<p>For example, long lists are well known to be the bane of performance-oriented
interfaces.  Interestingly enough this has been addressed by providing a
“paging” interface (you’ll still see this in some places where search results
have a “next page” button at the bottom).  However, these “pages” are often
presented inside a scrolling container.  This is logical only from the
programmer’s perspective, who is trying to relieve stress on the back-end
system by only returning a subset of the information at a time, but oblivious
to how this information is rendered to the reader.  A better system would
produce results in pages whose contents could be displayed in full, therefore
taking advantage of the human capacity to take in information a whole page at
a time, and eliminating the unnecessary interaction (and associated processing
overhead) of scrolling the page around.</p>
<p>If you don’t think these are real problems consider the currently trendy
“infinite scroll” which is replacing these “paginated scrolls” in list
results.  This technique eliminates the pagination by creating the illusion of
an infinitely long scrolling page.  Aside from the fact that most
implementations fail to preserve the illusion (often displaying a “loading”
indicator if you scroll too fast), they create a new problem of orienting
yourself within the list, and in particular quickly navigating the space.  The
result is the introduction of “back to top” buttons and the like that are
essentially admitting “yeah, we know we broke the scrollbar, but we don’t know
what to do about it”.</p>
<p>There are of course computer applications that don’t lend themselves to a
page-oriented interface.  Many applications that did not exist before
graphical computers (applications that were “born into” the digital world)
have canonical interface elements that define the application as much as the
other way around.  However the are many other applications which emulate
information systems that existed before graphical computers that would benefit
from this approach, and not just old fashioned things like “desktop
publishing”, but the web itself.</p>
<p>Remember that the web was born as a document publishing system, and all
cleverness aside, one of it’s most valuable applications is providing a
distributed, networked and indexed store of textural and visual information.
The web could become a significantly more useful, efficient and pleasant means
of conveying information if presented in a page-oriented interface.</p>
<p>This may seem like a lot of abstract ideas and hand-waving and I accept that.
I do plan to write more on the subject and provide more concrete examples that
may make the benefits of this approach more clear.  In the meantime, imagine
how systems might be different if you were to simply make a rule that
eliminated any sort of scrolling.  Imagine not only how existing applications
would change, but how new applications might be designed under these
constraints.</p>
<p>--</p>
<p>- Jason</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
