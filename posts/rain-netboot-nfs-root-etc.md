---
title: 'RAIN netboot, NFS root, etc.'
date: '2020-01-30T09:19:19'
author: mr
draft: false
tags:
  - preposterous
---
Last night I did some reading that confirmed that I'm on the right track with
getting RAIN to boot over the network. I found a couple of pages that describe
the process in more detail than I've seen before, and one of them even
revolves around the Parallella, one of my favorite SBC's

In a nutshell, you take the BOOT and ROOT filesystems that work with the
target board, share the BOOT via TFTP, the ROOT via NFS and then tell the
target board where to find them. There's a couple different ways to do this,
but my favorite is having the DHCP/BOOTP server handle it, so I'll try that
first.

**Steps**

  1. Select, download & extract a suitable disk image for the SOPINE 
  2. Create a subdirectory under the TFTP server root for the disk image BOOT partition contents 
  3. Create a subdirectory under /srv/nfs for the ROOT partition contents 
  4. Modify the DHCP server config to include the NFS ROOT information option 
  5. Setup the NFS server and export the ROOT partition directory 

I'd like to use an Armbian image since that will match the head node, but the
Armbian images have an initial setup process that makes things a little
tricky. I won't be able to just boot all the nodes from this image w/o going
through that setup process at least once, and I'm not sure what will happen if
I do it one and then boot the others (there may be some node-specific
configuration that happens that I don't want the nodes to share.

I'm also not sure how things like hostnames work if all nodes are using the
same ROOT partition? Maybe that's something I can pass along in the DHCP
options as well, but I'd think there are other things (logs?) that the nodes
will fight over in the shared NFS ROOT?

I suppose I can just try it with Armbian and see what happens? If nothing else
I should be able to get at least one compute node booting, and that will
exercise almost all of the parts of the system. If I run into trouble when I
add another node, I can always swap-out another Linux distro and troubleshoot
those specific problems instead of the entire system at once.

**Command Log**

mkdir -p compute-node-images/armbian-buster

cd compute-node-images/armbian-buster

wget [ https://dl.armbian.com/pine64so/Buster_current
](https://dl.armbian.com/pine64so/Buster_current)

mv Buster_current Buster_current.7z

sudo apt install p7zip-full

7z e Buster_current.7z

sudo apt install nfs-kernel-server

sudo systemctl restart nfs-kernel-server.service

sudo systemctl status nfs-kernel-server.service

sudo mkdir -p /srv/tftp/armbian-buster

sudo mkdir -p /srv/nfs/armbian-buster

sudo vim /etc/exports

Add the following line to /etc/exports:

/srv/nfs/armbian-buster 10.1.10.11(rw,sync,no_root_squash,no_subtree_check)

sudo exportfs -a

sudo mkdir -p /mnt/img

sudo fdisk -l ./Armbian_20.02.0-rc1_Pine64so_buster_current_5.4.14.img

Calculate the offset by multiplying the block size * the Start block of the
partition

sudo mount -t auto -o loop,offset=4194304
./Armbian_20.02.0-rc1_Pine64so_buster_current_5.4.14.img /mnt/img/

sudo cp -r /mnt/img/boot/* /srv/tftp/armbian-buster/

sudo cp -r /mnt/img/* /srv/nfs/armbian-buster/

  

That's all for now. Next we need to [ modify
](https://elinux.org/Parallella_NFS_rootfs_Setup) the files we copied over to
the NFS root, [ modify ](https://developer.toradex.com/knowledge-base/boot-
from-a-tftpnfs-server) the DHCP server config to set the NFS root, hostname,
etc., [ verify
](https://elinux.org/TFTP_Boot_and_NFS_Root_Filesystems#TFTP_Server)
permissions on all the stuff under /srv and then we might be ready to try
booting again!

  

**References**

  * [ https://developer.toradex.com/knowledge-base/boot-from-a-tftpnfs-server ](https://developer.toradex.com/knowledge-base/boot-from-a-tftpnfs-server)
  * [ https://kasiviswanathanblog.wordpress.com/2017/11/24/booting-linux-kernel-from-tftp-and-nfs-file-system-for-pandaboard/ ](https://kasiviswanathanblog.wordpress.com/2017/11/24/booting-linux-kernel-from-tftp-and-nfs-file-system-for-pandaboard/)
  * [ https://elinux.org/TFTP_Boot_and_NFS_Root_Filesystems ](https://elinux.org/TFTP_Boot_and_NFS_Root_Filesystems)
  * [ https://forum.pine64.org/showthread.php?tid=7116 ](https://forum.pine64.org/showthread.php?tid=7116)
  * [ https://www.armbian.com/sopine-a64/ ](https://www.armbian.com/sopine-a64/)
  * [ https://www.linuxquestions.org/questions/linux-general-1/how-to-mount-img-file-882386/ ](https://www.linuxquestions.org/questions/linux-general-1/how-to-mount-img-file-882386/)
  * https://elinux.org/Parallella_NFS_rootfs_Setup 

  

#journal

