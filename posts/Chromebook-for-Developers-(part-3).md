---
title: "Chromebook for Developers (part 3)"
date: "1990-01-01"
---

<div class="content">
<p>This post is going to be about developer tools I’ve used and can recommend on
Chrome OS.  Previous posts describe setting up a Linux chroot environment so
you can use all your familiar Linux dev tools, and as such I won’t spend any
time on those here (you already know who they are).  Instead, here’s a list of
favorite Chrome OS tools I’ve been using for my daily development tasks.</p>
<p><strong>Caret</strong></p>
<p><img alt="" src="/preposterous/assets/225-screenshot 2014-04-21 at 1.11.40 am.png"/><br/>
​</p>
<p><a href="https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml?hl=en" target="_blank"> Caret
</a>
is a lightweight, attractive, performant text editor along the lines of
Sublime Text and others.  It has basic project management skills without being
overbearing.  It’s quick to launch, handles large files with ease and is very
configurable.  It’s also free.</p>
<p><strong>JackDB</strong></p>
<p><img alt="" src="/preposterous/assets/225-screenshot 2014-04-21 at 1.16.46 am.png"/><br/>
​</p>
<p><a href="https://chrome.google.com/webstore/detail/jackdb-sql-database-
clien/mfcjpbmafdljmciineiieedkcbeikkpo?hl=en" target="_blank"> JackDB </a> is a surprisingly complete SQL
database client that works well on Chrome OS.  It’s largely a web app and
seems like it does most of its heavy-lifting back on the server (as opposed to
a pure Javascript wire-level SQL protocol implementation) but this affords a
lot of convenience features such as browsing databases of popular cloud
hosting platforms simply by logging in, etc.</p>
<p>Performance is good and JackDB has all the features I need on a regular basis
to manage data stored in PostgreSQL.  It may not be the best way to execute
large or complex jobs, but for that you can always drop down into your chroot
and use psql.</p>
<p><strong>Postman</strong></p>
<p><a href="https://chrome.google.com/webstore/detail/postman-rest-
client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en" target="_blank"> Postman </a> is an http client (the lazy-
person’s curl) which is a very convenient way to interact with HTTP-based
API’s or other HTTP interfaced systems that don’t provide a user interface.
If you’re comfortable with curl, Postman might seem like overkill, but it does
have some features like saving common queries and pretty-printing JSON data
that can be handy for even the most hardened console cowboys.</p>
<p><strong>Draw.io</strong></p>
<p>**<br/>
**</p>
<p><img alt="" src="/preposterous/assets/225-screenshot 2014-04-21 at 1.30.47 am.png"/><br/>
​</p>
<p><a href="https://chrome.google.com/webstore/detail/drawio/plgmlhohecdddhbmmkncjdmlhcmaachm?hl=en" target="_blank"> Draw.io
</a>
is the app that turned me back on to Google Drive.  It’s the first drawing
tool I’ve enjoyed using since MacFlow (unless you count GraphViz, but that’s
more of a programming experience).  Integration with Drive is awesome although
the bootstrapping process of sharing a drawing with another Drive user who
hasn’t already used Draw.io can be a bit bumpy (probably Googles fault more
than the app developers).</p>
<p><strong>Chrome RDP</strong></p>
<p>Sometimes you just can’t (or don’t want to) run something on the Chromebook,
and sometimes that’s something that only runs on Windows.  There’s a lot of
RDP clients in the Chrome Web Store, but the one I’ve had the best luck with
is called simply <a href="https://chrome.google.com/webstore/detail
/chrome-rdp/cbkkbcmdlboombapidmoeolnmdacpkch?hl=en" target="_blank"> Chrome RDP </a> .  I don’t do a lot of
Windows dev these days, but for the times I’ve needed to this app has worked
as well as any other Remote Desktop client I’ve used on any other platform.</p>
<p><strong>JSON Editor</strong></p>
<p>**<br/>
**</p>
<p><img alt="" src="/preposterous/assets/225-screenshot 2014-04-21 at 1.35.14 am.png"/><br/>
​</p>
<p><a href="https://chrome.google.com/webstore/detail/json-
editor/lhkmoheomjbkfloacpgllgjcamhihfaj?hl=en" target="_blank"> JSON Editor </a> is another tool like Postman
that you can probably get by without, but comes in handy when dealing with
particularly large or complex JSON files.  It’s also very helpful when you
need help working on JSON data by non-programmers (or programmers who just
don’t spend every day sifting through raw JSON data)</p>
<p><strong>BitTorrent Sync</strong></p>
<p>Finally I’ll mention my favorite personal filesharing software, <a href="http://www.bittorrent.com/sync" target="_blank"> BitTorrent
Sync </a> .  It’s not <em>really</em> a Chrome OS app,
but I mention it here because its just so damn useful, and there are a few
tricks to getting it working on the Chromebook see <a href="http://forum.bittorrent.com/topic/22534-btsync-on-samsung-arm-chromebook-
with-crouton/" target="_blank"> this link
</a> for details.  Once the initial fiddling is done, BitTorrent
Sync runs wonderfully in the background and is pretty easy on system resources
while keeping what you need in sync with the rest of your systems.</p>
<p>A better fit for Chrome OS might be a version of BitTorrent Sync that works
more like the mobile versions, which allow you to manage as many shared
folders as you like and browse their contents without actually synchronizing
all of their contents locally (a nice feature on a device that is storage-
constrained).  A clever hacker could make this happen using the <a href="http://www.bittorrent.com/sync/developers" target="_blank"> BitTorrent
Sync API </a> , but for now there’s no
off-the-shelf solution that does this.</p>
<p><strong>Conclusion</strong></p>
<p>There’s a number of other cool applications available for Chrome OS but these
are the ones I use daily for software development.  As stated above once you
have a Linux chroot setup you can just stick to your favorite Linux tools if
you like, but I’ve found that the hybrid approach has significant advantages
in terms of convenience and system utilization.  For the most part, using the
tools above, I use my Linux chroot to run console-based applications and
Chrome OS for GUI tools, which seems to be much easier on battery life than
running and additional X session, and it’s also just a bit more convenient not
having to flip between screens.</p>
<p>For my next installment I’m planning to detail the things I’ve grown to love
and hate (maybe hate is too strong of a word) in the last month or so of using
a Chromebook daily.</p>
</div>
