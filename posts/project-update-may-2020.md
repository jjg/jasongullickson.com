---
title: 'Project Update May 2020'
date: '2020-05-12T22:48:56'
author: mr
draft: false
tags:
  - preposterous
---
Remember when I was going to do a monthly project update post?

  

**Art Robot**

Inspired by an [ Instructable ](https://www.instructables.com/id/Keyboard-Cap-
Micro-Watercolor-
Bots/?fbclid=IwAR0zQpwetNXr9D5MhwD8bBRzSKX0TH9xE2lcL7C9NRhtkppb_MGPESwVVI8)
Jamie found, We’ve started working on a [ printable version
](https://github.com/jjg/artbots) of the cobbled-together robots described in
the article. I’m designing the model to be parametric so it can easily
accommodate whatever parts you can get your hands on.

  

![](/assets/73-image0.jpeg)  

  

So far the first iteration needs some adjustment to the tolerances to work
with the motors, batteries, etc. that I have on-hand but another iteration or
so and we should have something to test in the studio.

  

**RC2014**

I finished enough of my [ RC2014 ](https://rc2014.co.uk/) kit to boot it and
run some BASIC code! There’s still plenty of more soldering to do to get all
the parts working, but I took a break from the electronics long enough to
start putting together a protective chassis.

  

![](/assets/73-image1.jpeg)  

  

You may recognize the box as similar to the one I used for my [ RAIN Mark II
Supercomputer Trainer ](https://hackaday.io/project/85392-rain-mark-ii-
supercomputer-trainer) project, however this one is slightly taller and has a
removable cover which I choose to make adding and removing boards from the
backplane easier.

  

I’m also working on a [ custom front panel
](https://github.com/jjg/rc2014-hacks) similar to the RAIN design that will
include switches and LED’s to expose the features of the [ Digital IO Module
](https://www.tindie.com/products/semachthemonkey/digital-io-module-for-
rc2014-z80-homebrew-computer/) .

  

**Linebird**

This is another one Jamie came up with. So far we’ve done the first step of
the proof-of-concept and I expect to finish enough of it to do some field
testing in the next week or two.

  

Once we know whether or not it could work, we’ll share more about it. For now
I’ll mention that it’s been fun to have an excuse to experiment with [
Micropython ](http://micropython.org/) again and learn more about embedding
and interfacing with the [ ESP32 ](https://en.wikipedia.org/wiki/ESP32) .

  

**Bike Computer**

I’ve looked at several ways to add some instrumentation to my [ Super73 Z1
](https://super73.com/collections/z-series) but nothing I’ve found is a good
fit for the bike. I’ve looked at using my phone with a mount but it’s hard to
read in full sun, and I’m not sure that it’s the safest thing for my phone.

  

I gave some thought to what would meet my needs while also being safe to use
and fit well on the bike and I came up with the idea for an interface based on
a single mechanical gauge.

  

So far I’ve sketched-out a few design ideas and [ created a repository
](https://github.com/jjg/bikegauge) for the project. I plan to build a
prototype for myself from off-the-shelf parts, but if there’s any interest in
the device from others I’ll design something more suitable for small-scale
mass production.

  

**GitHub Migration**

Speaking of repositories, for reasons I [ explained earlier
](https://jasongullickson.com/blog/going-back-to-github.html) earlier I’ve
been slowly moving all of mine to Github, and it’s been an educational
process.

  

For the majority of my repositories it’s been easy, but for the remaining ones
it’s getting exponentially more difficult. A couple refuse to be pushed, with
the other end “hanging up” after running for hours. Perhaps worse are
repositories that are half in one place and half in another. These have to be
merged manually to make sure I’m not loosing changes by mixing up the
timeline.

  

Speaking of loosing things, somehow I managed to loose at least one repository
along the way, sadly one containing a manuscript for one of the books I was
closest to finishing.

  

**OffGRID**

I got an email out of nowhere from someone who came across one of my OffGRID
posts and it inspired me to dust the thing off and get it ready for summer. I
was somewhat disappointed the last time I worked on it because my attempts at
adding solar charging were thwarted by inconveniences inherent in the stock
charging system. After a few attempts I decided it didn’t make sense to fight
with it and turned my attention to working with more modern hardware.

  

![](/assets/73-image2.jpeg)  

  

But that beautiful Pixel Qi display, there’s nothing like it for working
outdoors and I’ve yet to find a way to interface it to the modern SOC-based
machines I’ve been building with.

  

So instead of trying to make it do more, I decided to simply make the most out
of the hardware as-is, and find a Linux distro that suits it. I’ve found a
good fit in [ Bodhi Linux ](https://www.bodhilinux.com/) . I’ll do a more in-
depth review soon, but for now it seems like a great fit for this little
machine and I’ve already been taking advantage of it to revive the writing
project I’ll talk about next.

  

**How to Hack**

While migrating repositories I had a chance to revisit many unfinished
projects and among those several books.  [ How to Hack
](https://github.com/jjg/how-to-hack) is one that I’ve made several attempts
to write, but failed to complete and had kind of forgotten about over the last
few years.

  

![](/assets/73-image3.png)  

  

I was surprised to find that the book is fairly complete. I’m not sure why I
didn’t wrap it up other than simply getting busy with other things.

  

Having revisited the manuscript I’ve already started to make some edits and
come up with some ideas on how to wrap things up. The timing is fortuitous
because as I mentioned earlier, OffGRID is operational again which means I can
work on the book while enjoying the increasingly pleasant Wisconsin weather. I
don’t want to jinx the project by committing to a specific date, but I can
imagine finishing the writing over the summer and perhaps having it in
publishing shape by the fall.

  

Mark your Xmas lists kids.

