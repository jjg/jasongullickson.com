---
title: 'RAIN NetBoot getting closer'
date: '2020-01-29T07:40:58'
author: mr
draft: false
tags:
  - preposterous
---
Found a typo in the DHCP server config that was giving the BOOTP clients the
wrong path for the O/S image. After fixing this, I’m finally seeing proof that
the two are talking as the image is downloaded and executed by the SOPINE
compute module.

  

![](/assets/58-image0.jpeg)  

  

This is major progress! However the node still fails to boot Linux. Based on
the console output it looks like I need more files on the tftp server. I have
a vague memory of reading about this somewhere so it’s not a complete
surprise.

  

I think the next step is to make an Armbian SD card, boot the SOPINE module
with it and complete the setup process via the serial connection. Then I can
take the contents of the /boot directory and copy them over to the tftp server
root. I think this will give me what’s needed to get past this error.

  

![](/assets/58-image1.jpeg)  

  

I don’t _think_ that will be enough to get all the way to a login proper
though. I think I still need to share the rest of the O/S files over NFS from
the head node, and tell the compute node to mount this shared directory (maybe
by tweaking the files in the tftp root?). My plan for now is to take this next
guessed step and learn what I can from the error messages.

  

![](/assets/58-image2.jpeg)  

  

The system is slowly coming together. Hardware-wise is have a bunch of ideas
to refine the setup but I’m trying really hard to avoid getting distracted by
that until I get the whole cluster booting.

  

  

#journal

