---
title: "Preposterous 1.0"
date: "2013-12-16"
---

<div class="content">
<p>I’m happy to announce that Preposterous 1.0 is now available!</p>
<p>A number of features have been implemented and many bugs have been put to bed.
There’s also been some minor architectural changes that allow Preposterous to
be a little more sophisticated (like, rendering non-incomplete HTML) but also
retain the spartan-by-design spirit.</p>
<p>Notably, the index pages (the server index as well as the post indexes for
individual blogs) use an ajax-style request to load the contents of their
lists.  If this sounds too fancy, don’t panic, the static lists are available
in the files <strong>/blogs.html</strong> and **/ <blog id="">/posts.html ** respectively.
This lets the index pages be written in complete HTML without having to parse
and update them each time a new blog or post is written.  This also opens the
door for customization of these indexes by clever hackers.</blog></p>
<p>Additional points of interest include support for text, html, image (jpg, png,
gif), audio (mp3, ogg, wav) and video (mp4, mov) posts, and a “reload” flag
for the script that allows server operators to update all static content on
the site from the original IMAP source.</p>
<p>To see what’s being considered for the next release, visit the <a href="https://github.com/jjg/preposterous/issues?page=1&amp;state=open" target="_blank"> Issues list
</a> of the <a href="https://github.com/jjg/preposterous" target="_blank">
Github repository </a> and stay tuned to <a href="https://twitter.com/preposterous_me" target="_blank">
@preposterous_me </a> on twitter for
updates.</p>
<p>Also I’d like to thank everyone who’s shown interest in the project and
provided encouragement to see this through.  I’m excited to see what you do
with it!</p>
<p>- Jason</p>
<p>_p.s. if you’d like to give Preposterous a try without setting up your own
server, you can join the beta site by sending a post to<a href="mailto:preposterous1984@gmail.com" target="_blank">
preposterous1984@gmail.com </a> to get
started. _</p>
</div>
