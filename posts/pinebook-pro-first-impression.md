---
title: 'Pinebook Pro: First Impression'
date: '2019-11-04T10:43:41'
author: mr
draft: false
tags:
  - preposterous
---
﻿

My Pinebook Pro arrived a few days ago. Here's my first impressions on this
machine.

![](/assets/34-image0.jpeg)  

It's solid. Compared to previous Pinebooks I've owned (the original 14" and
the [ "1080p" 11" ](https://www.pine64.org/pinebook/) ) it's built like a
tank, and even compared to the Thinkpads and Macbooks I've owned, it feels
solid and substantial. There's no flex in the frame, nor the keyboard, and
while I don't want to mar the matte black finish testing it, I bet it could
take a few big drops in stride.

The keyboard is another area that is vastly improved over the previous models.
It's still not perfect, but I like it better than the Mac keyboards, but not
quite as much as the Thinkpad (although it's close). It's no challenger for my
favorite keyboard (the [ Das Keyboard Model S Professional
](https://www.daskeyboard.com/model-s-professional/) ), but no laptop keyboard
comes close to that so it's not really a fair comparison.

Speaking of the keyboard, it's ISO, not ANSI, and I only note that because
until it arrived I didn't know the difference. All the Pinebooks I've owned
have had slightly unusual keyboard layouts that required some getting used to,
and the Pro is no exception. The ISO keyboard is so close to the ANSI layout
I'm used to that it's almost harder to adapt to compared to a more unusual
layout. On the other hand, if you configure the O/S to use an ANSI layout you
can ignore the ISO keyboard for the most part, as long as your touch-typing is
up-to-par. I found this out after creating a new account on the machine that
used a default keyboard layout and didn't realize the change until I had to
look at my fingers to find the caret symbol.

![](/assets/34-image1.jpeg)  

The trackpad, a chronic source of pain for all other Pinebooks I've owned is
an improvement, but it's still torturous to use for any pointer-intensive
work. The good news is that I think it's at least _possible_ to improve the
trackpad via software, especially because the trackpad's firmware itself is
open-source. In the meantime it's easy enough to attach an external pointing
device, and I've become so accustomed to my trackball that I prefer using
something other than a trackpad anyway.

Battery life so far is impressive, but this isn't surprising in comparison to
previous Pinebooks. Both the 14" and the 11" I've owned have never wanted for
battery capacity and the Pinebook Pro carries on this tradition. I haven't
scientifically analyzed the battery life, but so far the battery has outlasted
my capacity to work on it, going 4-5 hours easily before throwing warnings
about charging the battery. One concern in regard to the battery is that it
seems to take a long time to recharge. I haven't measured this carefully, but
I've noticed that there's been a couple times that I've went to grab the
machine off the charger and the battery wasn't quite full yet. This is using
the stock charger, and perhaps faster charge rates are possible with a beefier
supply or by using USB-C charging, but either way this is something I want to
pay closer attention to.

The display is great. Matte finish and sufficient resolution to display fonts
clearly well below the size I'm able to comfortably read anymore. I haven't
tested it outdoors yet (we've already had our first snowfall so I don't expect
to be spending too much time outside hacking for awhile), but I expect it will
perform similarly to other standard LCD displays (too bad I can't retrofit it
with a PixelQi!).

Performance, compared to previous Pinebooks is spectacular, and even when
compared to my most recent Thinkpad the Pro fairs well in the tasks I've used
it for so far. It's somewhat of a mixed bag however, some tasks being faster
than expected, others slower. I attribute this inconsistency more to the
software than the hardware however, which is easier to improve after delivery.
Hardware expansions in other dimensions (RAM, storage, etc.) are greatly
appreciated and while I never felt too constrained on the older hardware, the
Pro feels like it has a lot more "headroom" when using it heavily.

There's a few other features of the Pro that I think are worth mentioning
because they are simple and helpful and missing from most other laptops. As I
mentioned earlier the firmware for the track pad is open-source, and the same
is true for the keyboard. This means that these devices can have functionality
that is isolated from the operating system, and Pine has taken advantage of
this by providing keyboard combinations that function as "kill switches" for
the laptop's camera and radios. These switches cut the electrical path to
these peripherals, and since the keyboard firmware is out of reach from the
operating system, this function can't be compromised or overridden using
security vulnerabilities in the operating system or user applications.

![](/assets/34-image2.jpeg)  

Another nice feature is how the power LED is modulated to indicate disk
activity. This is an old-fashioned feature from the days when disks were so
slow and computers were so unreliable that you needed a physical indication
that things were still working. Most (all?) modern computers have removed
this, but it is extremely helpful when working with a semi-experimental
system, or anytime that you need confirmation that the system is busy.

So far everything I've done with the machine has been using the build of
Debian it is delivered with, and I think for most people this is a prudent
choice. The Pine64 community is actively working on this build and providing
regular updates that deliver major improvements. Personally, I'm excited about
diving-in and trying other flavors of Linux as well as continuing to work on
porting Haiku to ARM, and specifically this laptop. I'm trying to balance
excitement about this with the practical need to keep the machine operational
enough to use for regular work. I guess time will tell which force wins out.

I'll be writing additional articles about this machine as I spend more time
with it. In particular I'd like to see how it performs using strictly open
software (no hardware blobs, etc.; at the moment I'm not sure what's in the
stock O/S). I also want to look into adding some NVMe storage and measuring
how that impacts performance compared to the included eMMC drive.

I also want to roll-my-own O/S build as well, something with a UI that goes
well with the flat-black, magnesium chassis...

