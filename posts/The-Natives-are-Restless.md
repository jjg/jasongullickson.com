---
title: "The Natives are Restless"
date: "2012-12-05"
---

<div class="content">
<p><em>note: this was originally going to be a response to my friend Dave on
Facebook but then he convinced me it should be a blog post (because that takes
a lot of coinvincing after all…)</em></p>
<p>The question essentially is, have you considered Mono for cross-platform
mobile development, especially when cost and maintainability are a
consideration?</p>
<p>This discussion (native-vs-cross-platform) has come up a few times since I
started doing mobile development a few years ago and the answer is definately
a fourth-dimensional thing, so the best I can do is answer it in the context
of now, and note that I’m continually reviewing this reasoning myself every
few months or so.</p>
<p><strong>Favor the User’s Experience</strong></p>
<p>As a developer in general (but more importantly as a mobile developer) my
choice of tools is always based on providing the best possible user
experience.  This is particularilly important for mobile devices because these
are treated much more intimately than a desktop computer or even a laptop and
so an application must adopt that directness and personalness as well.  This
tends to favor native app development, because it allows the developer to
leverage familiar interface paradigms in a more seamless way than any cross-
platform tool can.  It also means that the resulting application will be able
to take advantage of the latest platform features (cross-platform tools
usually require time to catch-up to new hardware and operating system
features, if they adopt them at all).  Of course the best performance is
obtained using native tools, and responsiveness is a key element to getting
that natural feeling and one-ness expected from mobile applicatons.</p>
<p><strong>If it’s all the same to the user, go HTML5</strong></p>
<p>If you can provide a natural, personalized experience using an HTML5
interface, and if you get get at the device resources you need via HTML5, and
you want cross-platform portability, go with HTML5.</p>
<p>(did I say HTML5 enough?)</p>
<p>If you can live with the compromises of speed, hardware access and integration
that come with building your app as an HTML5 “web app” and you have a need for
cross-platform support then above all other options I recommend going HTML5.
Most other cross-platform tools have simular limitations and few (if any) of
them provide the benefit of providing recyclable experience (anything you do
in HTML5 can be leveraged in non-mobile web projects as well).  Furthermore,
most devices have some sort of method of treating HTML5 web apps almost as
well as native ones (allowing you to create an icon on the dashboard, etc.) so
while not quite as seamless as native, HTML5 web apps can integrate pretty
well with the platform.</p>
<p>The last thing I’ll point out in this section is Mozilla’s <a href="http://www.mozilla.org/en-US/firefoxos/" target="_blank"> FirefoxOS
</a> ; this is an entire platform based
on HTML5 web apps (all the way down to the phone dialer).  Personally I think
this has huge potential, since it leverages a huge existing HTML developer
base and provides these developers with first-class application treatment and
platform integration.</p>
<p><strong>Conclusion</strong></p>
<p>I’ll wrap up with saying that I really recommend against trying to build a
single cross-platform application.  Users select a platform (be that a phone,
tablet, desktop computer, etc.) because they have an affinity for the
environment which that device provides, and good user experiences come from
software that embraces the context of that platform.  If you are compelled to
maximize your codebase, choose a service or API-based approach that allows you
to re-leverage your code on the back-end but provide a unique and appropriate
experience for the user on the front-end by embracing the native tools and
design patterns to present the information and processing that is shared via
the API across platforms.</p>
<p><strong>Dude you didn’t answer the question, what about Mono?</strong></p>
<p>Honestly I haven’t looked into using Mono on mobile yet, maybe that should be
a blog post…</p>
</div>
