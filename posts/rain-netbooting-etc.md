---
title: 'RAIN, netbooting, etc.'
date: '2020-01-28T09:49:25'
author: mr
draft: false
tags:
  - preposterous
---
Spending some time getting RAIN to netboot. First step was moving the hardware
and connecting it to a new monitor (instead of swapping between the lab
workstation). I found a working LCD with HDMI for $6 at the thrift store that
was hard to pass-up.

I'm going to try and simplify the setup as well, so I want to see if I can
power both the Clusterboard and the A64 head node from a single supply. The
Clusterboard has an ATX-style connector so I _think_ if I can find a +5vdc
supply and a ground pin on that connector I should be set.

Here's what I found:

**ATX** |  **A64**  
---|---  
Pin 4 (+5VDC)  |  Pin 4  
Pin3 (GND)  |  Pin 6  
  
I stole a connector off an old power supply (not an exact fit but we'll try
it) and then crimped a two-pin header on the wires from pins 3 & 4\. This
header then slipped right on the A64's "Pi Bus" pins. I powered the
Clusterboard and with no smoke or other drama, I soon had boot messages from
the A64 streaming up the new LCD.

This helps reduce the clutter needed to boot the cluster and now I'm down to
one mains connection. Another thing I'd like to do along these lines is try
connecting the serial console from one of the SOPINE modules directly to the
UART pins on the A64, but the last time I tried something like this I had
problems because the SOC uses the UART for console messages at boot or some
such (I think that was the C.H.I.P. SBC?). For now I'll keep using the USB
serial adapter until the system is more stable.

Now I need to find a console-mode serial terminal that doesn't suck. I've been
enjoying moserial, but I don't want to go through the trouble to setup a GUI
on the A64 if (until?) I can avoid it.

Going with  minicom  for now, I've had success with it in the past.

I anticipated the classic permissions problem with running minicom against a
serial device and tried adding my user to the dialout group:

sudo adduser jason dialout

...but it told me I was already a memeber? I guess we'll just give it a go
then.

minicom -s

Stupid mincom won't save the configuration because it wants to store it in
/etc, and I'm not root so...whatever.

Other than that, exiting setup drops me to a prompt and if I hit the reset
button on the Clusterboard I can see the SOPINE searching for its BOOTP
server. It's getting stuck at the same place as before, so that's good (means
the server didn't loose it's configuration!). Now I'm back to where I left
off, but RAIN is now stand-alone and I can do most of what I need to do
remotely (other than reset the Clusterboard...I wonder if I could rig
something up with the GPIO on the A64 to trigger that?).

  

  

**References**

  * [ http://files.pine64.org/doc/Pine%20A64%20Schematic/Pine%20A64%20Pin%20Assignment%20160215.pdf ](http://files.pine64.org/doc/Pine%20A64%20Schematic/Pine%20A64%20Pin%20Assignment%20160215.pdf)
  * [ https://www.lifewire.com/atx-24-pin-12v-power-supply-pinout-2624578 ](https://www.lifewire.com/atx-24-pin-12v-power-supply-pinout-2624578)
  * [ https://www.cyberciti.biz/tips/connect-soekris-single-board-computer-using-minicom.html ](https://www.cyberciti.biz/tips/connect-soekris-single-board-computer-using-minicom.html)

  

#journal

