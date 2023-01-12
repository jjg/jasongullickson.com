---
title: "Repreposterous?"
date: "2018-10-09"
---

<div class="content">
<h1 id="repreposterous">Repreposterous?</h1>
<p>Reading about <a href="https://solar.lowtechmagazine.com/2018/09/how-to-build-a-lowtech-website.html" target="_blank">Low-Tech Magazine’s solar powered website</a> got me thinking about <a href="https://gitlab.com/jgullickson/preposter.us" target="_blank">Preposterous</a> again, specifically in regard to the low-overhead nature of Preposterous’s architecture. When I created Preposterous, I was “scratching a personal itch”, but as a side-effect created a modestly-powerful blogging platform with exceptionally low resource consumption and impressive scalability. While reading the about the Low-Tech Magazine site, I started to think about how Preposterous could be used to build a similarly energy-efficient website, as well as tackle some of the limitations LTM is running into with their implementation. For example, at the moment LTM’s solar-powered site doesn’t implement a comment system (a side-effect of static content). Preposterous had the same limitation (as its content was static as well), but I did come up with an alternative to traditional comment systems that not only worked within these constraints, but also provided a means of automatic moderation. The idea is simple: comments on one user’s post are in the form of a post to your own blog. In other words, if you post something, and I want to comment on it, my comment becomes a post on my own blog. The system links the content so it can be displayed inline with the original post (like a typical comment), but it also appears on my blog (linked to the original post for context). The beauty of this design is that it imposes some “personal responsibility” because your comments become featured on your blog; your behavior on the site is displayed in-line with the content you want to share (instead of hidden in a thread somewhere). At the same time, this works within the constraints of Preposterous’s existing static-content architecture. Another aspect of Preposterous’s design that makes it attractive for the solar-power model is that transient outages (due to lack of sunlight) don’t interfere with authoring. Since user’s author content in their local email clients, they can create new content whether the server is up or not, and thanks to the store-and-forward architecture of email they can submit this content when the server is off-line and know it will be accepted and posted automatically when the power comes back on. This also makes it easy to distribute content to several servers with almost no additional overhead. This makes it easy to distribute these servers geographically in such a way that it’s always sunny over one of the servers, resulting in potentially zero downtime. I’ve been getting frustrated with Wordpress and feeling-out alternatives that better suit my needs. I didn’t have any luck finding exactly what I wanted, and I wasn’t excited about building another blog platform for myself (again), but reading about LTM’s solar-powered setup has me seriously considering “rebooting” Preposterous and turning it into a hybrid of these ideas.</p>
</div>