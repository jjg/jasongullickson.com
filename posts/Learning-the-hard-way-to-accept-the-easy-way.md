---
title: "Learning the hard way to accept the easy way"
date: "2016-08-31"
---

<div class="content">
<p>It’s a bit humbling to admit it, but I may have been wrong about my fierce
resistance to third-party modules in Node.js.</p>
<p>I started working with Node.js before NPM, and before there were any third-
party modules (that I was aware of).  Much of my excitement about the platform
was based on the fact that you were starting from scratch, all the way down to
the webserver itself.  This was exciting to me because most of my work on
server-side code was, and still is, writing fast, stateless API’s.</p>
<p>My predisposition to avoid modules goes all the way back to my experience with
C.  C was my first experience with a compiled language (I don’t think an
assembler counts) and the thing that stood out to me was it’s simplicity.  The
language was so small that you could memorize the whole thing (there are
something like ~30 built-in functions?), but with that small set of tools you
could build anything.</p>
<p>Programming in Node.js was a flashback to this feeling, the ability to build
an entire server out of pure Javascript (and in my case, limiting it to <a href="http://amzn.to/2bROJ4e" target="_blank"> The
Good Parts </a> ), and know every line of code that will
run when a request is made.</p>
<p>However this was less exciting to the majority of developers who were used to
working in environments like Java or Ruby on Rails which had a rich ecosystem
of modules (“gems”) that could be drawn upon for almost any need that could
arise.  So these developers quickly set about creating modules for Node.js
that re-created the structures they were familiar with, notably the web
framework Express, which made Node.js work like a typical MVC-style web
application.</p>
<p>None of this interested me so I more or less ignored it.  Over the years I
would occasionally draw upon a third-party module to do something that
couldn’t be done natively in Javascript (modules which contained binary
functionality that can’t be replicated in Javascript running inside of
Node.js), but in each case I would read every line of the module’s source code
to maintain an awareness of what code was running when requests were made to
my servers.</p>
<p>I also ignored “convinience” libraries, modules that made Node.js work more
like other environments.  I considered each as it came to my attention but for
the most part they were either shortcuts to things that could be done directly
in Javascript, or they introduced changes to the processing model which traded
programmer convenience for runtime performance.  My position on this is that
it’s better to learn how to speak to the machine once vs. forcing the machine
to conform to the programmers predisposition on every incoming request.</p>
<p>It’s in this area where I’m learning I may have made a mistake.  In
particular, there are two modules that I now believe are worth the added
complexity of including them in a server project.</p>
<p><strong>Underscore.js</strong></p>
<p>I’ve heard <a href="http://underscorejs.org/" target="_blank"> Underscore.js </a> referred to as
“Javascript’s missing standard library”, and that statement alone is probably
why I ignored it for years.  Going back to C, the standard library provides
functions that already exist in Javascript, and in particular the extensions
to Javascript that already exist in Node.js.  That said, looking at that claim
from another perspective makes it less dubious.</p>
<p>Underscore is a “standard library” in the sense that it provides a standard
way for developers to solve problems that commonly occur in Javascript
programs.  It is essentially a way to short-circuit arguments on the best way
to implement these common bits of code, as opposed to providing functionality
that doesn’t exist in the basic language.</p>
<p>The difference may be subtle, but that change in perspective made it a lot
easier for me to accept Underscore’s claim of being a standard, or otherwise
necessary.</p>
<p><strong>Moment.js</strong></p>
<p>Time and computers don’t get along.  Dealing with time is hard in any
language, but it seems particularly painful in Javascript.  This might be due
to Javascript’s origin as something that runs on a computer in the same
timezone as the user, but I think it’s more related to deficiencies in
Javascript’s type system.  Regardless of the reason, Javascript support for
working with time is really frustrating.</p>
<p>After years of fighting with this I’ve come to accept <a href="http://momentjs.com/" target="_blank"> Moment.js
</a> as a solution to this problem.  Like Underscore.js,
this is less about Moment.js’s ability to do things you can’t already do, or
it’s performance, etc. and more about establishing a consensus between
programmers on the way to handle these things.</p>
<p><strong>Conclusion</strong></p>
<p>I’m still extremely cautious about including third-party modules in my
projects, and every day there are more and more poorly-implemented,
unnecessary modules uploaded to NPM, but I’m working on getting comfortable
with making exceptions for modules which are proven to reduce errors and
increase developer productivity (specifically when collaborating) so long as
they can be proven to have minimal impact on performance, reliability and
security.</p>
</div>
