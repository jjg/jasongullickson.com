---
title: 'OffGRiD 2021'
date: '2021-03-14T13:36:38'
author: mr
draft: false
tags:
  - preposterous
---
With the weather warming I'm dusting-off the OffGRiD testbed, otherwise known
as the "summer computer". So far it's little more than a [ Lenovo Ideapad
S10-2
](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjA3dPYrLDvAhUyAZ0JHQKvAH4QFjABegQIBhAD&url=https%3A%2F%2Fwww.cnet.com%2Freviews%2Flenovo-
ideapad-s10-2-review%2F&usg=AOvVaw3aWF_LpWJhUrsKZWGMy_ka) with upgraded RAM,
disk (SSD), battery and a [ PixelQi display
](https://en.wikipedia.org/wiki/Pixel_Qi) .

Last year I spent a lot of time looking for an operating system that was full-
featured enough to support the hardware I need but lightweight enough to
perform well on this 12-year-old machine. I didn't have much luck then but
this morning I found a good solution in the form of [ Debian 10.8
](https://www.debian.org/) \+ the [ LXQT desktop ](https://lxqt-project.org/)
.

![Photo

      of debian loading](/assets/120-debian-loading.jpg)

Debian is my favorite distro, probably because I have the most experience with
managing and maintaining it. I've wanted to run Debian on this machine since
the beginning but had trouble because there wasn't "free" drivers for all the
hardware and at the time I didn't have any luck getting the nonfree drivers
installed and working. I decided to give this another try today and for
whatever reason I had better luck! Everything other than the WiFi interface
worked using [ this particular iso
](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-
firmware/10.8.0+nonfree/i386/iso-dvd/) , and I was able to get the WiFi
hardware working using a wired connection post-installation using [ this guide
](https://wiki.debian.org/bcm43xx) .

I wasn't planning on using a "desktop environment" on this machine or even a
GUI at all. I expected to make it text-only, but decided to give LXQT a try
with the intention of removing it later if it gave me any trouble. I was
pleasantly surprised to find that LXQT looked quite nice on the old netbook,
had a nice assortment of tools and applications and was nice and snappy to
boot.

One thing I couldn't find right away was a GUI tool for configuring the
wireless network so I went looking through the docs to see what the
recommended manual option was in Debian Buster. Historically I've used [
wpasupplicant ](https://packages.debian.org/wpasupplicant) for this but came
across the [ iwd ](https://packages.debian.org/wpasupplicant) package and
decided to give it a try.

![Screenshot of iwctl](/assets/120-iwctl.png)

This was a good choice, because iwd is not only easier, it also appears to
streamline the process and the dependencies that came along with older WiFi
configuration tools and methods. The only problem I ran into was that for some
reason the interface initially appeared to be powered-off (the S10-2 has a
hardware killswitch for the radios but this wasn't engaged), and the solution
was to use rfkill to unblock the radio from the software side (why was it this
way? unknown).

My initial impression of Debian 10.8 + LXQT is very good. It seems capable of
comfortably running the essentials and then some (I'm even able to write this
using Mozilla Thunderbird which would barely run under regular Ubuntu on this
machine last year). The biggest problem I've had in the past with DE's on this
machine is the size of the screen. The PixelQi's resolution is only 1024x600,
and most modern GUI applications expect a much higher resolution. As a result,
dialog boxes are often too large to fit on the screen and you can sometimes
get stuck inside them (if the keymappings are incomplete). So far this hasn't
been a problem with LXQT as long as the "panel" is set to auto-hide.

![Screenshot of LXQT desktop](/assets/120-lxqt-desktop.png)

It remains to be seen how running a desktop will impact battery performance so
I may still switch to using a text-only interface. Once I can spend some time
"in the field" with the machine as things warm-up outside I'll get some data
on that.

  

  

  

