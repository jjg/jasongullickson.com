---
title: "The future is written in Javascript"
date: "2013-12-27"
---

<div class="content">
<p>There are a lot of programming languages, but there is only one that runs in
your web browser, and that’s  <a href="http://en.wikipedia.org/wiki/Javascript" target="_blank"> Javascript
</a> .  <a href="http://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank"> Ruby
</a> ,  <a href="http://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank"> Java
</a> ,  <a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank"> C#
</a> ,  <a href="http://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"> Python
</a> ,  <a href="http://en.wikipedia.org/wiki/Php" target="_blank"> PHP
</a> and  <a href="http://en.wikipedia.org/wiki/Web_development#Server_side_coding" target="_blank"> dozens more
</a> are used to
write software for the web but in the end they all produce  <a href="http://en.wikipedia.org/wiki/Html" target="_blank"> HTML
</a> and Javascript, and HTML is not a
programming language. That means that there’s only one programming language
for the web, and that’s  <strong>Javascript</strong> .</p>
<p>If you’re writing software for the web, you’re programming in Javascript, it’s
just a matter of how many layers of “comfort zone” there is between you and
your application.</p>
<p><strong>But what about the servers?!?</strong><br/>
Fine, great, the future of  <em>user interface</em> might be written in Javscript,
but what about the server code?</p>
<p>If you’re a web developer you have of course heard of  <a href="http://en.wikipedia.org/wiki/Node.js" target="_blank"> Node.js
</a> (if you haven’t, you can get the scoop
<a href="http://nodejs.org/" target="_blank"> here </a> ). The short of it is that you can now write your
server code in Javascript as well as your client-side code, and Node.js has
been around long enough to have proven that it has the necissary ingredients (
<a href="http://zgadzaj.com/benchmarking-nodejs-basic-performance-
tests-against-apache-php" target="_blank"> performance </a> ,  <a href="http://lanyrd.com/2012/dibi/sqtyb/" target="_blank"> scalability
</a> and  <a href="http://wegnerdesign.com/blog/why-node-js-security/" target="_blank"> security
</a> ) to function in a
production environment.</p>
<p>That being the case, why would you spread your focus accross multiple
languages to write a web application? Some will argue that Javascript isn’t
appropriate for writing server-side code, that there is something in the
nature of the language or the runtime that just isn’t right. I argue that this
is patently incorrect, and the only way to arrive at such a conclusion is to
have an inaccurate or incomplete understanding of the Javascript language.</p>
<p>Javascript has been designed from the beginning to work in the event-driven
environment of the browser and excels at asyncronous processing. There was a
time where this was not a useful feature for server-side web software, but
since the proliferation of  <a href="http://en.wikipedia.org/wiki/Ajax_(programming)" target="_blank"> AJAX
</a> techniques the old “page
at a time” method of server-side processing has gone by the wayside.</p>
<p>Beyond the technical or implementation-level featurs that make Javascript
suitable for these tasks is the philosophy of the language and its constructs
that lead the developer into an event-driven way of thinking. Once embraced,
this mode of thought changes the way a developer designs applications and
opens them up to new ways of providing better, more responsive and more
engaging experiences to users.</p>
<p><strong>But the future isn’t all on the web right? What about mobile?</strong><br/>
The future of mobile is Javascript as well.</p>
<p>This isn’t a radical idea, in fact Apple knew this when the first iPhone was
introduced back in 2007. Until 2008, the only way to write software for the
iPhone (unless you were an internal Apple developer) was to write it in
Javascript in the form of “  <a href="http://www.apple.com/webapps/" target="_blank"> Web Apps </a> “.
Early on, there was no indication that Apple would ever open up the iPhone to
allow third-party developers to write “native” applications for the iPhone,
and the fact that Apple provided Javascript API’s to access device features in
these early versions of iOS is evidence that they saw the potential of
delivering fully-functional Javascript-based applications to mobile devices
(why did Apple change directions? That’s  <a href="http://9to5mac.com/2011/10/21/jobs-original-vision-for-the-iphone-no-third-
party-native-apps/" target="_blank"> another story
</a> ).</p>
<p>Since then, the number of device features that have been made accessible via
Javascript API’s has grown, and technologies like  <a href="http://en.wikipedia.org/wiki/Websockets" target="_blank"> Websockets
</a> and  <a href="http://en.wikipedia.org/wiki/WebRTC" target="_blank"> WebRTC
</a> make writing Web Apps that rival native
applications even easier, and that’s just the tip of the iceberg. With the
introduction of  <a href="https://developer.mozilla.org/en-
US/docs/Mozilla/Firefox_OS" target="_blank"> FirefoxOS </a> (also known as “Boot to Gecko” or B2G), there is
now a platform where Javascript and native code applications are on equal
footing (a predecessor with a similar philosophy is  <a href="http://en.wikipedia.org/wiki/Webos" target="_blank"> WebOS
</a> ), and by equal I mean feature parity,
however Javascript has several distinct advantages.</p>
<p><strong>Developers, Developers, Developers</strong><br/>
There is no other language with more developers using it than Javascript
(remember the first few paragraphs where we talked about how all web
developers are writing Javascript?). This means that, all else being equal,
the potential of Javascript applications is orders of magnitude higher than
“native” applications based on the sheer number of developers with decades of
experience behind them. What’s more is that these same developers have been on
the cutting-edge of creating compelling user experiences (much of the original
use of Javscript was to provide realtime feedback and event-driven user
interface elements). These developers have been sidelined on mobile platforms
by restricted subsets of device features or second-class integration into the
user experience. With B2G, a whole new army of developers will be able to
build great applications for mobile, and as the iPhone has proven, great user
experiences drive the platform.</p>
<p><strong>Developer productivity and other excuses</strong><br/>
There is a case to be made that other languages, frameworks, etc. are more
than up-to-the-task of creating compelling experiences on the web (and
beyond), and that these tools and platforms lend themselves to increased
developer productivity. I could dispute these points as well but instead I’ll
agree, that any language can be used to generate HTML and Javascript and
return it to a browser for processing, and that frameworks and toolkits and
the like can make creating applications more convinient for programmers
unfamiliar with raw Javascript and it proper use. I’ll even go so far to say
that anything you can find on the web today could probably be created using
any of these toolsets, and if you have those tools (or those trained in those
tools) at your disposal then you can probably get more done faster by using
what you know.</p>
<p>However, this essay is about the future, and if there’s anything certain about
the future it is that you can’t build it within the restrictions of models
from the past. If you’re using a toolset it is a fact that creating something
that wasn’t considered when the toolset was designed will be difficult if not
impossible, and in either case will doing so will compromise your vision.</p>
<p>Javascript is the most complete programmatic interface avaliable to web-based
applications. Instead of mastering analogies and metaphores that insulate the
developer from the platform (and often mask its most exciting features), time
spent embracing this single language allows a developer to not only create
what is known, but to invent future applications and techniques that have not
yet been imagined by the authors and architects of today’s convinience
frameworks.</p>
<p>This, coupled with the ever expanding list of  <a href="https://github.com/leapmotion/leapjs" target="_blank"> exciting new technology
</a> that is programmable using javascript
is what I mean by “the future is written in Javascript”.</p>
<p><strong>Easier said that done (or, “how do we get there from here?”)</strong><br/>
Understanding and even accepting this philosophy is one thing, but how to
transition from an existing application, or from previous experience, to
Javascript-based development? The path will varry for every developer and each
application, but what I can do is share the path that I have personally
embraced.</p>
<p><em>Learn the code</em><br/>
Most web developers have used Javascript code directly, and many have even
written it, but few have taken the time to learn Javascript as a language unto
itself. Read a good book and learn Javascript as if from scratch. Take care to
learn the  <a href="http://amzn.to/108GJJg" target="_blank"> good parts </a> , and learn how to avoid the
<a href="http://amzn.to/10xIwri" target="_blank"> bad parts </a> .</p>
<p>Write Javascript programs in an environment where you won’t get hung-up on
dealing with the browser and its DOM or third-party Javascript libraries
(Node.js is a great environment for this).</p>
<p><em>Draw a line in the sand</em><br/>
Javascript fits more naturally on the front-end than on the back end, and the
proliferation of REST and JSON-based API’s makes implementing user interfaces
in Javascript much easier than it was in the past. Begin here by building
directly against these interfaces using client-side Javascript code, and
resist the urge to leverage frameworks and libraries whenever possible.</p>
<p>Partition your existing applications by implementing a  <a href="http://amzn.to/13a4eWC" target="_blank"> Hypermedia API
</a> . Use this as a “firewall” to push existing code
behind a clean surface to attach a Javascript client to. Refactor the code
behind the API over time and eventually replace it with service calls built on
Node.js.</p>
<p><em>Learn a new platform</em><br/>
Start developing for FirefoxOS, or develop Web Apps for other platforms. iOS
provides decent support for making Web Apps behave like native apps (including
launcher icons and full-screen modes that hide browser chrome). Android
provides a rich set of Javascript-accessible device API’s as well, but for the
full experience FirefoxOS is really the way to go (in fact all of the built-in
software is written this way).</p>
<p>There are as many paths over the mountain as there are developers, but the
first step is to look at Javascript not as an inconvinience or a compromise,
but as an elegant solution to a complex problem. A language which is
encumbered with demons from its past, but which are only harmful to those who
know not how to avoid them.</p>
<p>Any of the steps above can be the beginning of this understanding, and all of
them can lead to building the applications of the future, with Javascript.</p>
</div>
