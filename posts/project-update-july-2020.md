---
title: 'Project Update July 2020'
date: '2020-07-31T23:08:59'
author: mr
draft: false
tags:
  - preposterous
---
This month is mostly software projects. My trusty MP Mini Delta 3D printer
started acting-up and has become so unreliable that I put it on the shelf.
After weighing the options, I’ve decided to overhaul my Prusa i2 to replace
the Delta, which means it will be a bit before I can resume any projects that
require printed parts.

  

**Jrip**

I’m re-ripping my CD collection and I didn’t have any luck finding a piece of
software that works the way I want it to, so I started [ building my own
](https://github.com/jjg/jrip) . By “building” I mean writing some Python to
glue together a few of my favorite open-source tools.

  

It’s far from done, but it’s working good enough to get a few of my favorite
discs back online so I can listen to them on my PinePhone and in the car. My
long-term plan is to use this software to power a device dedicated to ripping,
storing and sharing music. I’ve got some fun design ideas in the notebook
already that I’ll share in a future post.

  

  

**Paperboy**

As I wean myself off social media I need a way to keep-up with current events,
but I’m also enjoying spending less time looking at my phone. The solution of
course is a newspaper, but there’s none that cover the blend of news that I’m
interested in.

  

[ Paperboy ](https://github.com/jjg/paperboy) solves this problem by
generating a “newspaper” from a choice selection of RSS feeds filtered through
a “block list” of things I don’t want to read about, printed fresh
automatically every morning.

  

![](/assets/80-image2.jpeg)  

  

To minimize waste, only a single sheet, double-sided page is printed each day.
The contents consist of the title and a summary of each article. If something
piques your interest, you can scan the QR code printed next to each article to
read the full version using your phone, tablet, laptop, etc.

  

I originally imagined this as running on a public server where anyone could
create subscription and have a new issue pop out of their printer each day,
but I haven’t had any luck so far getting this to work. My initial approach
was to use the “print by email” feature of HP printers but it doesn’t work for
me.

  

For now I’ve switched to using a CUPS module for Python to print directly to
printers on the local network, which works well but requires having the code
running in-house, so a public service isn’t an option at this point. If I find
another way to print to users printers over the internet I’ll pursue this
route again.

  

  

**Explore**

I’ve wanted a game for a long time where I could explore a universe of
procedurally-generated planets, but I’ve never found one that met my needs so
[ I started writing one ](https://github.com/jjg/explore) .

  

The game is text-based and as you can see very little effort has been put into
the visual aspects of the game so far. At the moment I’m not planning on
adding graphics, but I will eventually improve the text interface to be more
interesting.

  

![](/assets/80-image3.jpeg)  

  

So far there’s not a lot to it, but I’ve got enough working that I was able to
perform a successful round-trip to the moon of my players home planet and
back, which felt like quite an accomplishment.

  

I’ve since refactored much of the code to be more amicable to producing an
entire universe (as opposed to just a pair of celestial bodies) while making
an effort not to go overboard and focus on the parts that are necessary for
the primary goal of the project, exploring unknown worlds.

  

It’s kind of silly but I’m having a lot of fun working on it, and I’m learning
a lot as well. It’s given me an excuse to dive deeper into object-oriented
programming in Python as well as a reason to learn about how to model and
navigate space.

  

  

**ROM Jason**

As I mentioned in an [ earlier project update
](https://jasongullickson.com/blog/project-update-june-2020.html) , I’m now
the sysop of a Mastodom server, and this has given me an excuse to play with
writing some agent software to inhabit the place. Specifically, I’ve created a
“digital clone” of myself named “ROM Jason”.

  

![](/assets/80-image0.jpeg)  

  

The “ROM” part comes from the idea of “ROM Constructs” in Neuromancer. The
current iteration is basically a Markov chain fed a few decades worth of my
blog posts.

  

The results have been surprisingly good. While it’s pretty bad at answering
questions, it’s pretty good at producing toots that are indistinguishable from
things I might actually say, especially from the perspective of non-technical
audiences.

  

![](/assets/80-image1.jpeg)  

  

I have a few ideas for improving the Construct (especially when responding to
a mention) and I’ve got a lost of other agents I’d like to experiment with as
well. I’ll continue to post these experiments in the [ Agent Alpha
](https://github.com/jjg/agentalpha) repository, and if you’d like to interact
with ROM (or just regular) Jason, consider becoming a [ Neuromantic
](https://theneuromantics.net/about) .

