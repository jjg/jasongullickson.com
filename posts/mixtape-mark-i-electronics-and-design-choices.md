---
title: 'Mixtape Mark I - electronics and design choices'
date: '2021-04-19T23:07:43'
author: mr
draft: false
tags:
  - preposterous
---
I’ve been revisiting the [ Hardware Mixtape
](https://jasongullickson.com/a-hardware-mixtape.html) project and I’ve
selected this [ DFRobot
](https://wiki.dfrobot.com/Voice_Recorder_Module_Breakout_SKU_DFR0745) board
for the heart of the first prototype.

  

![](/assets/125-image0.jpeg)  

  

I started sketching the connections and a case and came up with a basic design
that consists of the following components:

  

* The board 

* 3 AAA batteries 

* Two 1/8” TRS jacks (headphones and line-in) 

* A SPST slide switch 

* Some kind of momentary rocker switch (volume up/down) 

* Small 8 ohm speaker with 5 watt capacity 

  

All other controls are already provided on the breakout board so all I should
need to do is expose them.

  

Dimensions-wise the case should be similar in size to an audio cassette. I’m
still interested in making these easy to send through the mail, so that may
alter the dimensions if I figure that out, but for now expect something about
the size of a [ Compact Cassette
](https://en.m.wikipedia.org/wiki/Cassette_tape) case.

  

![](/assets/125-image1.jpeg)  

  

The board includes a microphone, which I had planned on removing, but when I
started thinking about how to allow monitoring while recording (some sort of
line-in -> headphone out pass through) I realized that most iOS devices no
longer provide an analog audio output. If the music you want to share is
stored on such a device, the only option for using this mixtape (without an
additional “dongle”) is to record using the microphone.

  

_I wonder if this was deliberate, breaking the ability to make decent-quality
recordings via an analog output?_

  

Maybe this isn’t so bad? After all imperfect recording quality is deliberately
part of the design, and using the microphone eliminates the need to solve the
monitoring problem (since you’ll hear the music coming out of the players
speaker during recording).

  

I’m not sure if this will diminish the quality of the recording significantly
more than other factors but it simplifies the design and it certainly adds a
unique character to the recording on the mixtape. It also opens the door for
all sorts of 80’s-style “DJ” voice-overs which were part of the charm of old-
school mix tapes.

  

So for the first prototype I’m thinking about leaving the line input entirely,
and perhaps even the headphone jack. I’m not 100% sure about the headlines
just because there is an intimacy about mixtapes that might be worth
preserving and is more appropriate for the privacy of headphones.

  

  

  

