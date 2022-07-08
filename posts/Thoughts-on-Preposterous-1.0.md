---
title: "Thoughts on Preposterous 1.0"
date: "2013-12-13"
---

<div class="content">
<p>Things are moving rather quickly.  I’d like to say that the code is almost
ready for an initial useful release, but there’s a few important things that I
think need to be in place first (most of these have an entry in the <a href="https://github.com/jjg/preposterous/issues?state=open" target="_blank"> Github
Issues list </a> already).</p>
<p>Probably the most important is handling embedded images.  Right now not only
do emails with embedded images not work right, they cause an error that makes
them get ignored completely.  A good implementation would handle these
seamlessly and preserve their formatting as well as any other HTML formatting
in the email (I think most others are being handled OK right now).</p>
<p>Along these lines, handling plain-text emails needs to be reviewed.  I really
want Preposterous to be useable by simple devices that don’t necessarily deal
in HTML email so I want to test and review the code to make sure plain text
emails are handled as nicely as possible.</p>
<p>Another are to noodle on is the rendered html itself.  I don’t want to go too
far down the rabbit hole with this, but right now the html generated is
straight-up invalid.  I think the right way to do this is to add enough logic
to generate valid HTML with as little formatting as possible.  I also have
some tricks in mind that would allow users to edit the templates used for the
index and posts views, which if I can make these work w/o undermining the
simplicity and stability of the app I’ll put those in, but I don’t consider
them necessary for a v1.0 release.</p>
<p>I’m not big on freaking out about security, but I would like to verify that
we’re not doing something <em>really stupid</em> , like providing a vector for
running arbitrary code on other people’s servers, etc.  To be clear, I’m not
sure that I want to prevent the ability to run “sandboxed” code on
Preposterous (code that can only affect contents within a single blog), but I
want to give the code a once-over from a security perspective to make sure
people can deploy it without lying awake at night.</p>
<p>Configuration needs to be separated from the main script.  Not sure the best
way to do this without making it overly complex, but giving that some thought,
and if it’s going to be easy to update (by simply pulling the git repo) it’s
something that will need to be addressed.</p>
<p>Considering the sort of the index pages.  Seems like these should be sorted in
reverse-chronological order (instead of straight chrono as they are now) but
it seems like there’s a better way to address that, along with things like
search, that don’t violate the simplicity, statelessness and ability to
function as static html.  That said maybe I’m over-thinking it and should just
render the static indexes the way the rest of the world thinks blogs should be
sorted.</p>
<p>There is some sort of internal housekeeping stuff to address as well.  The
slugs generated for filenames need to not have things in them that can’t be
accessed correctly by the web server, and there are other formatting
considerations to consider.  There’s also maintenance things like re-
generating the entire server from IMAP data (pretty easy, but probably should
avoid doing things like re-sending notifications for every post, etc.) and of
course there are larger scalability considerations like how long to keep the
emails in the IMAP box, etc.  In this vein, the idea of providing some sort of
“bundled” http server is a consideration.  I’m pretty sure that if you’re
interested in running a Preposterous server, and you don’t already have an
http server that can serve static HTML, you’re probably OK using Python’s
SimpleHTTPServer until you outgrow it.</p>
<p>That’s pretty much what’s on my mind for a 1.0 release.  There could also be
improvements to notification/welcome messages, better documentation, other
stuff I’m not thinking of, but I think with the above in place it would be
useful enough to consider a production release, and good enough that content
created with it would be stable and upgradeable as features and such are
implemented in later releases.</p>
</div>
