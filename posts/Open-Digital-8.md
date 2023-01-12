---
title: "Open Digital 8"
date: "2017-07-10"
---

<div class="content">
<h1 id="open-digital-8">Open Digital 8</h1>
<p>I’ve often complained that no one seems to make a proper indie movie camera anymore. There are phones with cameras and there are still cameras that can shoot movies and there are even “action cams” which can be mounted anywhere and take enormous abuse, but there doesn’t seem to be a modern equivalent to the <a href="https://en.m.wikipedia.org/wiki/Panasonic_AG-DVX100" target="_blank">Panasonic DVX-100</a> or Canon XL-2 of the original digital filmmaking revolution. <img alt="" src="/wp/2017/07/img_1068.jpg"/> So I sat down and made a list of things I’d like if I were designing such a camera, and interestingly the list looked a lot like features of the Super8 cameras I’ve experimented with. I really loved shooting Super8, but it’s just too expensive and time-consuming (in terms of shoot-edit-release) for my projects. However thinking about this reminded me of an effort in the early days of digital phototography to create a “digital film” that could be used to convert a film camera to digital.  This got me thinking about applying the same idea to a Super8 film cartridge, and re-using Super8 cameras instead of building the entire thing from scratch. <img alt="" src="/wp/2017/07/img_1071.jpg"/> It turns out someone else thought of the same idea, and designed a very attractive version called “<a href="http://nofilmschool.com/2013/12/nolab-digital-super-8-cartridge-make-film-cameras-go-digital" target="_blank">Nolab</a>”.  However it doesn’t appear to have actually been produced, so it may have just been a prototype or a design study. Regardless, there are a few things I think are important that the Nolab design doesn’t address.  First I want the design to be open (both hardware and software) so that it can be modified and improved by anyone without constraint.  Second I want to use as much off-the-shelf tech as possible so that hackers and filmmakers with more time than money can build their own and access the technology.  Third, I want anything that isn’t a commodity part to be 3D printable so it can be re-created without a lot of special tools, materials, etc. Openness is very important to me, because I’ve owned a number of digital cameras whose hardware was capable of doing more than the factory software would allow.  I’ve often wished I could customize the behavior of the camera to suit my shooting style and that’s just not possible with proprietary hardware and software. I started out with some <a href="https://gitlab.com/jgullickson/open-digital-8" target="_blank">3D modeling</a> to attempt to re-create a Super8 film cartridge that I could use to see how much room there would be to work with.  This would have been much easier if I had a film cartridge in hand.  That not being the case, I took some measurements from the two Super8 cameras I have and iterated on the model a few times.  After awhile I had something that seemed to fit in both cameras. <img alt="" src="/wp/2017/07/img_1027.jpg"/> The next step was to figure out what electronics I could cram in there.  I started with a Raspbery Pi because I happened to have one along with the Raspberry Pi camera module, but it was immediately apparent that a regular Pi wasn’t going to fit. <img alt="" src="/wp/2017/07/img_1032.jpg"/><img alt="" src="/wp/2017/07/img_1031.jpg"/> I would have preferred to have used a Next Thing Co CHiP, but I’m not aware of a tightly-integrated camera module for the CHiP, so instead I decided to try a Raspberry Pi Zero W. While waiting for the new electronics I did a few basic tests with the Pi and camera I had on-hand.  This revealed another problem. <img alt="" src="/wp/2017/07/img_1072.jpg"/> <img alt="" src="/wp/2017/07/img_1036.jpg"/> The film of a Super8 cartridge is off-center, so the camera’s apreature is offset to match.  Given the size of the Rapberry Pi camera module (and the fact that the lens is in the center of the module), it might not be possible to place the camera module in-line with the aperature as I originally imagined.  Determining this for certain will require additional testing, but if it’s not possible it might be necessary to use a mirror or prism to place the camera module at a 90 degree angle to the aperature. Another problem with using a Raspberry Pi is that it has no facility for charging or running from a battery.  To address this I ordered a <a href="https://www.adafruit.com/product/1903" target="_blank">li-ion battery charger/power supply</a> that will provide 5 vdc to power the Pi and camera board from a small li-ion battery I had on-hand.   <img alt="" src="/wp/2017/07/img_1040.jpg"/> I think this will fit along with the Pi and camera module inside the printable film cartridge, but we’ll know for sure once the parts arrive. At this point I have a good starting point for the printable case and a complete set of electronics for the project.  Aside from waiting on parts, there’s a few immediate problems to solve:</p>
<ul>
<li>How to get the camera module aligned with the Super8 camera aperature</li>
<li>How to fit all of the electronics inside the film cartridge</li>
<li>How to synchronize the digital camera frames with the frame rate and mechanical shutter of the Super8 camera
Of course there are a lot of other problems to tackle but these are the ones I think need to be taken on next.  I’m hoping to do a few more tests aligning the optical path while I’m waiting on parts so I can have a working plan to place the camera module when the hardware arrives. I’m also doing research on how the software side of driving the Raspberry Pi camera works to see how the GPIO could be used to synchronize the digital camera with the mechanical camera’s timing. For the curious I’m posting the design files and code on <a href="https://gitlab.com/jgullickson/open-digital-8" target="_blank">Gitlab</a>.  There’s not a lot there yet, but that will change as the experiments continue and the project begins to take more shape</li>
</ul>
</div>