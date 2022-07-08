---
title: "Usenet and JSFS"
date: "2015-10-19"
---

<div class="content">
<p>I was reading about <a href="https://en.wikipedia.org/wiki/Usenet" target="_blank"> Usenet </a> and
realized how much it has in common with <a href="https://github.com/jjg/jsfs" target="_blank"> JSFS </a>
.</p>
<p>I’m generally familiar with Usenet but I’ve never been a deliberate user of
it.  In it’s heyday I was too disconnected to interact with it (it wasn’t
carried by the BBS’s I could dial-in to locally), and by the time that I had
regular, reliable Internet access it was the dawn of the Blog Era and I was
using web-based systems to meet similar needs.</p>
<p>For whatever reason I started digging into the implementation details of
Usenet and found some similarities to JSFS.  The use of hierarchical
namespaces to organize things and the idea of federating content by simply
“broadcasting” data from node-to-node in a peer group.  Also the idea that any
node in the network can access data stored on another node using a forwarding
mechanism, and then caching the results.</p>
<p>I didn’t intentionally design JSFS to overlap with Usenet, and of course the
things they have in common are shared with other systems that did influence
JSFS’s design, but what’s curious is how features specific to JSFS could
address one of the key problems with Usenet: the storage requirements.</p>
<p>If think you could copy Usenet’s hierarchy directly into a JSFS instance by
simply replacing “/” characters used in JSFS paths with “.” used in Usenet
paths.  If you did this JSFS deduplication would kick-in and presumably reduce
the physical storage requirements for the archive.  Providing support for this
sort of “namespace translation” could be intrinsic in JSFS or some sort of
add-on module, but it’s not a lot of work.  In fact JSFS uses a dot-oriented
naming scheme to establish it’s own internal fully-qualified paths.</p>
<p>If implemented as a module, the module could also provide an <a href="https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol" target="_blank"> NNTP
</a> protocol
interface to the archive, essentially becoming an NNTP server that is simply
back-ended to a JSFS store.  Interestingly this would result in the creation
of a web-accessible archive (using the standard JSFS URL’s that would result)
and when JSFS indexing is implemented, a searchable archive as well.</p>
<p>I don’t have a specific point to make here, just that I find it interesting.
I find the idea that Usenet essentially proved that the federation mechanism
I’ve been considering for JSFS could actually work, and at a scale that dwarfs
any other similar network that I know of.  I also like the idea of configuring
federation not only by adding nodes to a peer group, but by offering the
possibility of selecting subsets of the storage by namespace, making access to
content via a peer fast for preferred bits, but still possible for namespaces
that are less of a priority to the node operator.</p>
<p>I’m also very interested in exploring “store-and-forward” architectures for
JSFS and distributed computing in general.  We’ve largely abandoned these
designs in light of the availability of “always-on” Internet, but we need to
remember that there is a cost to making the assumption that everyone can be
connected all the time.  Not just the financial cost of the connection, but
the social cost of cutting-off most of the world who do not have such access
to the Internet.</p>
<p>There is also an intellectual cost that prevents us from seeing and
implementing systems that can function over slow or intermittent connections.
While high-speed, fairly reliable Internet has become more common and less
expensive, systems that can function over slower and less reliable connections
have significantly more freedom, and the hardware necessary to implement them
is within reach for a much larger part of the world.  Even in wealthy
countries, monopolistic business practices mean that in many communities there
is only once choice for Internet access.  Network software architectures that
can work on lower-tech network hardware create opportunities for community-
oriented Internet access that can usurp these monopoly providers.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
