---
title: "OffGRiD Iteration One Software"
date: "2019-07-01"
---

<div class="content">
<p>So far this post is a very unorganized collection of notes taken while experimenting with different operating systems, window managers and desktop environments on OffGRiD Iteration Zero.  The objective is to find a configuration which makes the most out of the hardware for its intended applications without requiring an obscene amount of configuration and tweaking.</p>
<h2 id="o-s-testing-summary">O/S Testing Summary</h2>
<table>
<thead>
<tr>
<th>O/S</th>
<th>Version</th>
<th>Results</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ubuntu</td>
<td>16.04.6</td>
<td>Everything works and works well</td>
<td></td>
</tr>
<tr>
<td>Ubuntu</td>
<td>xxx</td>
<td>Everything works, but slow</td>
<td></td>
</tr>
<tr>
<td>Hauku</td>
<td>xxx</td>
<td>Locks up at boot screen</td>
<td></td>
</tr>
<tr>
<td>ElemantaryOS</td>
<td>5.0-stable</td>
<td>won’t boot</td>
<td>64-bit only</td>
</tr>
<tr>
<td>Debian</td>
<td>9.8.0</td>
<td>WiFi not recognized even using “nonfree”?</td>
<td>live, nonfree, Cinnamon desktop</td>
</tr>
<tr>
<td>Arch</td>
<td>2018.07.01-i686</td>
<td>N/A</td>
<td>untested</td>
</tr>
</tbody>
</table>
<p>Given the amount of pixels avaliable on the display, I think a full-screen-oriented “desktop” is more suitable than one which is oriented around a number of small windows.  To this end I’ve found a handful of Linux GUI’s which might make a good choice.  Of course any “desktop” can be configured to work this way, but an environment designed intentionally to run things full-screen is likely to do it better and with less up-front effort.</p>
<p>Another key consideration for the software is minimizing resource consumption that may relate to battery usage.  Given the “Off” in OffGRiD, anything I can do to reduce power consumption extends the machine’s usefulness, and makes it easier to power the machine from off-grid sources like solar.  The extreme approach to this would be to hand-assemble the entire software “stack”, optimizing everything from the kernel-up to use only as much power as necissary to run the intended applications.  At the other end of the spectrum is using something that “just works” like Ubuntu, and settle for the energy efficiency that comes out-of-the-box.  After a lot of consideration I’ve decided to pick something in-between these two extremes for OI0 and use an existing Linux distro but customize the installation to reduce the amount of unecissary resource consumption.</p>
<p>Something else I’d like to explore along the way is how I might leverage spare resources (such as extra RAM) to further reduce power consumption.  For example, could RAM be configured as additional disk cache to reduce SSD power consumption (and if so, would this be worthwhile)?  Or perhaps the use of precomputation when the machine is connected to a power source to reduce off-grid computational electrical consumption?</p>
<p>Based on the above I though the right fit for this stage of the project was Arch Linux 32.  However after spending a solid hour fighting chicken-and-egg problems trying to get the WiFi to work, I started to rethink my priorities…</p>
<h2 id="references">References</h2>
<ul>
<li><a href="https://www.linux.com/news/best-lightweight-linux-distros" target="_blank">https://www.linux.com/news/best-lightweight-linux-distros</a></li>
<li><a href="https://cdimage.debian.org/images/unofficial/non-free/images-including-firmware/current-live/i386/bt-hybrid/" target="_blank">https://cdimage.debian.org/images/unofficial/non-free/images-including-firmware/current-live/i386/bt-hybrid/</a></li>
<li><a href="https://wiki.debian.org/bcm43xx" target="_blank">https://wiki.debian.org/bcm43xx</a></li>
<li><a href="https://www.archlinux.org/" target="_blank">https://www.archlinux.org/</a></li>
<li><a href="https://i3wm.org/docs/" target="_blank">https://i3wm.org/docs/</a></li>
<li><a href="http://openbox.org/wiki/Help:Getting_started" target="_blank">http://openbox.org/wiki/Help:Getting_started</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cinnamon_(software" target="_blank">https://en.wikipedia.org/wiki/Cinnamon_(software</a>)</li>
<li><a href="http://www.windowmaker.org/" target="_blank">http://www.windowmaker.org/</a></li>
<li><a href="https://wiki.archlinux.org/index.php/Installation_guide" target="_blank">https://wiki.archlinux.org/index.php/Installation_guide</a></li>
<li><a href="https://wiki.archlinux.org/index.php/Wireless_network_configuration#Troubleshooting_drivers_and_firmware" target="_blank">https://wiki.archlinux.org/index.php/Wireless_network_configuration#Troubleshooting_drivers_and_firmware</a></li>
<li><a href="https://wiki.archlinux.org/index.php/Broadcom_wireless" target="_blank">https://wiki.archlinux.org/index.php/Broadcom_wireless</a></li>
<li><a href="https://wireless.wiki.kernel.org/en/users/Drivers/b43#list_of_hardware" target="_blank">https://wireless.wiki.kernel.org/en/users/Drivers/b43#list_of_hardware</a></li>
<li><a href="https://bbs.archlinux.org/viewtopic.php?id=245145" target="_blank">https://bbs.archlinux.org/viewtopic.php?id=245145</a></li>
</ul>
</div>
