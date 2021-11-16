---
title: 'Project Update December 2020'
date: '2020-12-16T07:17:41'
author: mr
draft: false
tags:
  - preposterous
---
Like most of us the biggest project I’ve been working on during the last
quarter of 2020 is surviving, but if found time to play with a few more things
as well.

  

**Homer**

I’ve been fascinated with nuclear reactors most of my life, and I’ve always
wanted to play with a nuclear power plant. I’ve seen a few software
games/simulators over the years, so I thought it might be cool to build a
physical one.

  

Creating a replica of an existing power plant control room is more than I have
the resources to do, so instead I’m designing a control console for a reactor
of [ my own design ](https://github.com/jjg/homer) . Since I have to
physically purchase and build the thing I’m keeping it as simple as possible
(at least for the first version).

  

I want to make sure it works the way I want it to be for I start ordering
parts, started by writing a Python module to simulate the reactor itself.
Initially I created some automated tests and a simple text-mode interface to
try the simulation out. It was hard to get a “feel” for the thing using these
tools, so I decided to try creating a simple GUI to make it a little more
realistic.

  

![](/assets/102-image0.jpeg)  

  

This gave me an excuse to try learning a GUI toolkit for Python again, and I
settled on pyqt. I was even able to find a nice book that covered exactly what
I needed and within an hour or so it was up and running.

  

With this test harness I was able to make the simulation much more “playable”
and find a number of bugs as well. With any luck I’ll have all of the kinks
out of the software side of the project and I can start building the physical
interface in the next month or so.

  

**Mixtape**

This is another project I’ve thought about for years but never put to paper
until recently.

  

![](/assets/102-image1.jpeg)  

  

At the end of 2020 I started seeing friends post their “most listened to
tracks” from various streaming services and this reminded me of how sharing
tapes with friends was how I discovered the music that has most influenced my
life.

  

Playlists can provide some of this “functionality”, but for a number of
reasons they fall far short from the “mix tape” of the 1980’s. [ My mixtape
project ](http://jasongullickson.com/a-hardware-mixtape.html) is an effort to
come up with something better.

  

**COVID-19 Monitor**

I hacked-together a little “bad news gauge” as part of a number of [
experiments conducted ](https://github.com/jjg/recon-sentinel-hacking) with an
unexpectedly good but cheap single-board computer “dev kit”.

  

![](/assets/102-image2.jpeg)  

  

It displays a daily summary of COVID-19 numbers for our county based on the [
code ](https://github.com/jjg/covid-analysis) that Jamie and I developed to
replace the county health department’s “dashboard” when they stopped sharing
theirs on social media.

  

**More Recon Sentinel Hacking**

I picked up a couple of these kits and I’ve got a completely different project
in mind for the second one. Here’s a few shots of the chassis:

  

![](/assets/102-image3.jpeg)

  

![](/assets/102-image4.jpeg)

  

![](/assets/102-image5.jpeg)

  

![](/assets/102-image6.jpeg)

  

![](/assets/102-image7.jpeg)  

  

  

  

  

  

