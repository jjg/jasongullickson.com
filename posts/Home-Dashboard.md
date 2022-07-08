---
title: "Home Dashboard"
date: "2013-04-20"
---

<div class="content">
<p>This morning I was just noodling on an idea to put some of the idle hardware
we have around the house to use.</p>
<p>Old computers, tablets and even new things like TV’s, etc. have network
capabilities and embedded web browsers. I’d like to create a simple household
“dashboard”, that would display information useful around the house
(temperature (inside), weather (outside), status updates from occupants,
etc.). It would be implemented in html/javascript so that it could be
displayed on anything capable of running a reasonable web browser.</p>
<p>Architectually, I’m thinking a static html/javascript page that gets its data
by polling other services via ajax calls. These services can be local
computers, remote servers or even devices capable of emmiting status data (or
consuming control requests) over the local network. To this end, it might be
interesting to use uPNP or zeroconf to discover these devices.</p>
<p>I don’t know of a way to do either of those things from javascript however, so
it might be necissary to create a program or script that runs on a “proper”
computer to generate the dashboard page. This could be as simple as a python
script that polls the local network for avaliable services and then creates a
menu of these devices and other pre-defined sources of information (weather
service, calendar service, etc.) that can be selected and then spit out an
html page that can be loaded on the various screens and devices that display
the dashboard.</p>
<p>I imagine there are things like this out there already, but most of the
dashboard implementations I’m aware of are focused on business-oriented things
that are not really what I have in mind here, or they require configuration
and infrastructure that is overly complex, especially for this application.</p>
<p>That said, if you’re aware of something like this I’d love to hear about it,
and if I get around to building it, I’ll be sure to post some updates.</p>
</div>
