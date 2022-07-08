---
title: "Sync & Backup your files without servers with BitTorrent Sync"
date: "2013-07-23"
---

<div class="content">
<p><a href="http://labs.bittorrent.com/experiments/sync.html" target="_blank"> BitTorrent Sync </a> is
something I’ve been looking for for a long, long time.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/Screen-
Shot-2013-07-22-at-9.23.29-PM.png" target="_blank"> <img alt="Once installed, BitTorrent Sync provides a simple interface to sharing
directories" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07
/Screen-Shot-2013-07-22-at-9.23.29-PM-300x213.png"/>
</a> Once installed, BitTorrent Sync provides a
simple interface to sharing directories</p>
<p>I use a lot of computers and often find myself needing a file that I have
stored at home when I’m at the office, or remoted into a server somewhere on
the Internet, or… you get the idea.  Over the years I’ve used dozens of
different things to access these files from FTP servers to rsync to Dropbox,
on and on and on.</p>
<p>Dropbox was my favorite for awhile because it thought ahead for me and sync’d
files before I needed them, but then I experienced one of the biggest problems
with trusting your data on someone else’s server; <a href="http://news.cnet.com/8301-31921_3-20072755-281/dropbox-confirms-security-
glitch-no-password-required/" target="_blank"> they got hacked
</a> .</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/Screen-
Shot-2013-07-22-at-9.35.01-PM.png" target="_blank"> <img alt="With no server in the middle, files synchronize very
quickly" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07
/Screen-Shot-2013-07-22-at-9.35.01-PM-300x213.png"/>
</a> With no server in the middle, files
synchronize very quickly</p>
<p>Since then I’ve been looking for a way to get that level of simplicity without
having to rely on other people’s servers, but they all leaned on a server at
some point, or required some sort of account, or transmitted data using non-
secure methods, etc.  Enter <a href="http://labs.bittorrent.com/experiments/sync/technology.html" target="_blank"> BitTorrent Sync
</a> .</p>
<p>I’ve used <a href="http://www.bittorrent.com" target="_blank"> BitTorrent </a> to transfer files on a
case-by-case basis, but this is awkward and requires forethought (you need to
publish the files before you forget them), and it also puts your files out in
the open which isn’t always acceptable.</p>
<p>BitTorrent Sync uses the same “swarm” mechanism for moving data round
efficiently, but in the form of a sync application that lets you share folders
on your computer and automatically sync their contents with other authorized
machines.  The transmitted data is encrypted, and since authorizing other sync
points requires exchanging an encryption key, security is preserved.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/Screen-
Shot-2013-07-22-at-9.32.01-PM.png" target="_blank"> <img alt="BitTorrent Sync provides several configurable methods of allowing nodes to
find eachother without servers \(don't worry, the defaults work great out-of-
the-box\)." src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07
/Screen-Shot-2013-07-22-at-9.32.01-PM-278x300.png"/>
</a> BitTorrent Sync provides several
configurable methods of allowing nodes to find eachother without servers
(don’t worry, the defaults work great out-of-the-box).</p>
<p>Other services provide encryption but what if their servers get hacked?  This
is where BitTorrent Sync really shines because there are no servers to hack.
BitTorrent Sync uses the same serverless mechanisms of the regular BitTorrent
protocol to connect computers and sync data across the Internet.  This is done
through various discovery mechanisms which are configurable depending on the
level of privacy and anonymity you require.</p>
<p>My only beef with BitTorrent Sync is that it’s currently closed-source, and
there’s no public API either.  It’s still in beta so this may change, but I’m
not going to count on it.  I have some very interesting application ideas for
BitTorrent Sync, but I’m holding back a bit because I’m cautious to build on
top of closed software, but hey maybe we’ll get lucky and they will open it
up, or perhaps an open alternative will come along.</p>
<p>In the meantime it’s an excellent way to synchronize your data in an very
secure and private way which also happens to be free (as in beer), at least
for the time being.</p>
<p>BitTorrent Sync has clients for Mac, Linux, Android and Windows.  The Linux
version, while lacking an X-Windows interface has a cool http-based front-end
that makes using it on “headless” servers and NAS boxes a piece of cake.</p>
</div>
