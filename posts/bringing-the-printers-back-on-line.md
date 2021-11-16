---
title: 'Bringing the printers back on-line'
date: '2019-12-13T22:53:39'
author: mr
draft: false
tags:
  - preposterous
---
I'm finally getting around to getting my 3d printer(s) back online. I'm
starting with the **MP Mini Delta** ( [
https://www.monoprice.com/product?p_id=21666
](https://www.monoprice.com/product?p_id=21666) ) because frankly it's going
to be less work than the Prusa.

For the most part the hardware was ready to go. The filament did something
I've never seen before where it cracked between the spool and the extruder
drive, so I warmed-up the nozzle a bit and pulled that section out.

Did I say the Delta was going to be less work? Hmm...

![](/assets/49-image0.jpeg)

![](/assets/49-image1.jpeg)  

It's been a long time since I've setup the software side of this from scratch,
and everything's become a lot easier and nicer since then. On the workstation
side, my prefered modeling software is **OpenSCAD** ( [
http://www.openscad.org/ ](http://www.openscad.org/) ) and the slicing
software I've been using is **Slic3r** ( [ https://slic3r.org/
](https://slic3r.org/) ) On the printer side I use **Octoprint** ( [
https://octoprint.org/ ](https://octoprint.org/) ) and I happen to have an
unused Raspberry Pi 3 Model A+ which might be small enough to mount directly
on the printer.

![](/assets/49-image2.jpeg)  

![](/assets/49-image4.jpeg)  

Since I'm starting with a clean, modern Pi I decided to try Octopi instead of
installing Raspbian and Octoprint from scratch. Octopi is an SD card image
that includes both O/S and Octoprint software, but crucially it provides all
the dependencies and little O/S tweaks needed to fully take advantage of what
Octoprint can do. I've used it in the past and it was good, but it's really
become something great.

One of the most annoying parts of setting up Octoprint on a new Pi is the
chicken-and-egg problem of setting up WiFi. You can do it over ssh, but you
can't ssh without a network, wash rinse repeat. This used to mean hauling out
a keyboard and monitor just to configure the network (unless you happen to
have an Ethernet segment handy), but I'm happy to say that it's now as simple
as editing a text file on the SD card before you boot it up in the Pi. If
everything goes well all you have to do is point a browser at
http://octopi.local once the Pi boots and you can configure everything else
through the web UI.

Once that's done there's some tweaking to do to configure Octoprint for the
Delta Mini, including installing a plugin to deal with intermitent drops in
the serial connection to the printer. Here again this used to be a manual
thing, clicking "connect" with just the right cadence, but now the plugin just
handles it.

Back on my laptop I was worried that getting OpenSCAD installed was going to
be a pain because it's missing from some distros, and building it from source
requires a lot of dependences that can be tough to resolve, so I was very
happy to see that Manjaro ARM preview4 has it built and ready to install using
their package manager. Performance is excellent on the Pinebook Pro, with none
of the rendering problems I've seen on other machines.

Unfortunately Slic3r wasn't avaliable in the package manager, and they don't
provide an ARM build so I was looking at building it from source. Not the end
of the world but it also has some dependences that an be tough to resolve, and
since I'm pretty green when it comes to Arch-based systems like Manjaro, I
wasn't looking forward to this. After some poking-around I found that Manjaro
does have **PrusaSlicer** ( [ https://www.prusa3d.com/prusaslicer/
](https://www.prusa3d.com/prusaslicer/) ) in the package manager, and from
what I've read it's based on Slic3r, so I decided to check it out.

![](/assets/49-image5.jpeg)  

I wasn't sure if PrusaSlicer was Prusa-specific or if it could be configured
for other printers so I was pleasantly surprised to find out that you can
configure it almost exactly the same was as Slic3r. I was even able to find an
existing config for the Mini Delta and after a few tweaks it was spitting out
gcode the Mini was happy to digest.

![](/assets/49-image6.png)  

At this point I had a completely functional end-to-end manufacturing system,
but then I remembered one more thing. My friend Chase allowed me to beta test
an Octoprint front-end for iOS he was working on and since my lab was offline
I hadn't looked at it for a couple months. Turns out that the app is now live
in the app store, and it's very slick. If you use Octoprint and have an iOS
device, I highly recommend checking it out.

