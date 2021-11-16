---
title: 'Recon Sentinel Hacking and c2c philosophy'
date: '2020-10-06T14:27:30'
author: mr
draft: false
tags:
  - preposterous
---
I recently picked up a pair of devices that were advertised as Pine64 dev kits
but in reality are a (defunct?) device which just happens to contain a  [
Rock64 ](https://www.pine64.org/devices/single-board-computers/rock64/) .

  

![](/assets/94-image0.jpeg)  

  

This being the case it was a simple matter of opening the case, loading
Armbian on the SD card and powering it up to turn this end-of-life product
back into a useful computer.

  

![](/assets/94-image1.jpeg)  

  

With a little more work I got the LCD working (another off-the-shelf module)
and I was able to turn the device into an entirely different (if depressing)
piece of hardware.

  

![](/assets/94-image3.jpeg)  

  

_You can find the source code for this application along with notes from my
adventures hacking this device on[ Github ](https://github.com/jjg/recon-
sentinel-hacking) . _

  

This transformation brought to mind a book I’m reading called [
Cradle_to_Cradle
](https://en.m.wikipedia.org/wiki/Cradle_to_Cradle:_Remaking_the_Way_We_Make_Things)
. The premise is that reusing a product when it reaches its end-of-life should
be part of the original design process. This is akin to recycling but instead
of being an afterthought, it is part of the design process and informs
everything from the materials selected to how they will be broken-down into
components that can be used directly with little or no additional processing.

  

I think this is a great idea, but I didn’t know how to apply it to my own work
until I started playing with repurposing this network device. Whether it was
deliberate or not, the Recon Sentinel is a perfect example of how the cradle
to cradle (c2c) philosophy can be applied to electronic devices.

  

By designing the device to use modular, off-the-shelf hardware, the Sentinel
can easily be reused for a wide-range of applications without specialized
skills or access to recycling machinery. Again it’s unclear as to if this was
a consideration during the design process, but regardless we can learn from
this example.

  

Here’s a couple of principles for creating c2c electronics:

  

_If you are going to put a computer in a device, use one that can be
reprogrammed by the end user._

  

_If you are going to include other electronics in a device, choose modular
components over custom or specialized hardware._

  

_Use easily reversible fasteners and connectors (screws > glue, headers >
solder, etc.) _

  

_If custom components are unavoidable, choose methods which can be reproduced
through distributed methods (3D printing, laser cutting, etc.)_

  

I’ll be applying these principles to my own projects from now on, and if I’m
ever to a point where I have the means to turn one of these projects into a
product, you’ll be able to make use of the parts when you get tired of it.

  

  

[ @jjg@theneuromantics.net ](https://theneuromantics.net/web/accounts/1)

  

  

