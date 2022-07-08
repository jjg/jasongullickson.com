---
title: "Protocols"
date: "2015-08-31"
---

<div class="content">
<p>This will evolve into a longer one but I wanted to get the essentials captured
before they floated away.</p>
<p>There’s a lot of talk today around “decentralized” software and leveraging
things like public API’s and blockchain technology.  This is cool stuff, but
it’s surprising to me how many people excited about this fail to realize that
the problems we have today with centralized services on the Internet is a
rather new occurrence.</p>
<p>Basically before The Web, everything on the Internet was decentralized.  The
reason this was possible is because of standard protocols.  This might sound
obvious, but if you look at how we value an open or public API, it’s value
pales in comparison to an open protocol.  A public API allows you to interact
with a service as it was designed by someone else, but a protocol allows you
to interact with <em>any</em> service in the same way.  It liberates both the service
consumer and the creator from having to worry about compatibility.  It also
delegates some of the hard questions about how services should interact to
larger groups of experienced engineers concerned with the global scope of the
Internet vs. smaller groups concerned with (or at least only most familiar
with) their own domain.</p>
<p>Let me give you an example.  There are an assortment of services that provide
file storage in the cloud: Amazon S3, Microsoft Azure, Dropbox, etc.  Most of
these provide an open REST-based API.  However to interact with them each one
does things slightly differently, even though they all work over HTTP and
attempt to adhere to REST conventions.  The result is that if you write code
against one and decide to use another (or are forced to switch) you have to
write more code that looks a lot like the code you wrote in the first place,
but not exactly.  Moreover, as each vendor improves their service, new
versions of the API are released.  If you want to support more than one
service, you have a lot of work cut out for you.</p>
<p>Now consider email.  Before most people had access to the Internet a lot of
them used email, but they were private, closed systems that could only
exchange mail within their own network.  Some mail systems engineered
“gateways” that could talk to foreign systems but these were complex and
certainly not universal.  The development of the SMTP protocol allowed these
systems to talk to each-other without having to continually adopt the other’s
changing standards.  Not only this, but it allowed mail servers and clients to
no longer be tightly bound to each-other, giving users a lot more choice and
forcing down the cost of email.</p>
<p>Imagine if the same was true for storage.  Imagine if there was a SSTP (Simple
Storage Transport Protocol) that you could code against and know your code
would work against any compliant server.  This doesn’t magically force vendors
to adopt the standard, but in the case of email, not having SMTP compatibility
put your server at a disadvantage against systems that did, and users demanded
it as well (they wanted to be able to email their friends on different
systems).</p>
<p>Remember I said this was going to be short?  Whoops.</p>
<p>To wrap it up, if we really care about returning the Internet to a distributed
system we need to turn our attention to developing new open protocols instead
of focusing on implementation, because without these protocols, we are
destined to simply create new and more interesting cages.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
