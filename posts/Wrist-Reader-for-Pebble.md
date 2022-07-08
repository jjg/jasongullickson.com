---
title: "Wrist Reader for Pebble"
date: "2015-03-07"
---

<div class="content">
<p>WristReader is a Pebble app version of an idea for a minimalist e-reader that
came out of some research I had read on how constrained reading devices can
make reading <em>easier</em> for people who struggle with reading and a number of
e-reader user interface conversations Preston  &amp; I have had.</p>
<p><img alt="wristreader_title.jpg" src="/preposterous/assets/32-wristreader_title.jpg"/></p>
<p>The original idea was to design a device that displayed one line of text at a
time instead of an entire page, the principle being that you can only read one
line at a time*, so why carry around something the size of a page?  I even
went as far as to begin designing a piece of hardware along these lines called
SlimReader ( <a href="https://github.com/jjg/slimreader" target="_blank"> https://github.com/jjg/slimreader
</a> ), but due to the limitations of off-the-
shelf parts, it was a bit of a compromise and ended up being less convenient
that desired.</p>
<p>When I started wearing a <a href="https://getpebble.com/#/AToOEW:H7t" target="_blank"> Pebble watch </a>
the topic came up again and it seemed like the Pebble had all the ingredients
necessary for the reader, so I took a whack at writing it as a Pebble app.</p>
<p>It didn’t take long to realize that fitting an entire line of text on the
Pebble screen was out of the question, so instead I broke it down to one word
at a time.  This was a frustrating limitation but after thinking about it the
same logic applies to one word as does to one sentence (you only read one at a
time) so I ran with it.</p>
<p>As it turns out one word at a time might even be better.  After loading up
some test text and using the reader as designed I noticed that with a little
tuning of the display speed the story starts to play in your head almost like
listening to an audiobook.  I added manual control to adjust the display speed
while reading and with that I was able to make it through an entire chapter of
the book without strain and with comprehension.</p>
<p>I added a couple other details for demonstration purposes (showing the title
screen when paused, indicating progress, etc.), just enough to get a feel for
what it feels like to use it, but stopped there to review some of the ideas
and questions that came to mind once it worked.</p>
<p>(For the curious and ambitious, the work-in-progress code is available on
Github here: <a href="https://github.com/jjg
/wrist-reader" target="_blank"> https://github.com/jjg/wrist-reader </a> )</p>
<p>There’s a couple of routes to go forward from here.  I could develop
WristReader as a stand-alone e-reader application, capable of being loaded
with text from various sources, or I could develop the app as a sort of
“container” that could be used to release books as independent, stand-alone
apps (perhaps with unique functionality).  I think that the platform may be
too constrained to create a general-purpose reader (especially in terms of
managing a library, etc.) but on the other hand those chores could be
“outsourced” to more robust ebook management tools, which use WristReader as
an output device (like iTunes and an old-school iPod).</p>
<p>It’s important to me that the book be self-contained, not dependent on
connectivity to a phone or the Internet for reading.  The convinced of having
a book on your wrist coupled with the Pebbles excellent battery life would
make it a great companion for getting far away from it all and reading as long
as these dependencies are avoided.</p>
<p>What do you think about a water-resistant ebook you can always have with you?
Reading a book this way might seem awkward, I felt that way myself while I was
developing it, but it’s really something you have to experience to judge.  I’d
love to get some feedback on the idea to shape the direction it goes or to
decide if it warrants further development.  Free free to comment or message me
on the medium of your choice via the links below</p>
<p>*There are speed-reading techniques that involve reading a page-at-a-time.</p>
<p>--</p>
<p>- Jason</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
