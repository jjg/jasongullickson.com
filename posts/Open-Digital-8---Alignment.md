---
title: "Open Digital 8 - Alignment"
date: "2017-07-16"
---

<div class="content">
<h1 id="open-digital-8-alignment">Open Digital 8 - Alignment</h1>
<p>While waiting on parts, I did a number of experiments with the original Raspberry Pi camera module I have to see if I could capture some pictures through the Super8 camera’s lens.  I started by simply trying to point the camera module at the aperture and ran into a few problems. <img alt="2017-07-13 05-34-52 1085" src="/wp/2017/07/2017-07-13-05-34-52-1085.jpg"/> The first was that the aperture is not centered, and size of the camera module makes impossible to align the module’s lens with the Super8 camera’s aperture. I could kind of work around this by tilting the module which will be good enough for these experiments but long-term it’s not a solution. <img alt="2017-07-07 09-45-50 1020" src="/wp/2017/07/2017-07-07-09-45-50-1020.jpg"/> One work-around I came up with for this was to use a mirror to reflect the Super8’s image so the sensor could be mounted at a right-angle. I think this will solve the alignment issue but it raises some potential packaging problems. <img alt="2017-07-15 15-14-59 1117" src="/wp/2017/07/2017-07-15-15-14-59-1117.jpg"/> The second is that the camera module’s <a href="https://en.wikipedia.org/wiki/Focal_length" target="_blank">focal length</a> is too long to get the camera to focus on the image in the aperture. I was able to work around this somewhat by adjusting the focus on the camera module, but even at maximum adjustment the module can’t be placed close enough to the aperture to fill the sensor with the image from the Super8’s lens. I was able to get some footage through the Super8’s lens by placing the camera module as close to the aperture as I could while keeping it in focus. <img alt="2017-07-15-19-04-17-1121.jpg" src="/wp/2017/07/2017-07-15-19-04-17-1121-e1500217537505.jpg"/>This makes me wonder if it might be possible to use this alignment and simply discard the portion of the frame that doesn’t contain the desired moving image? The sensor of the camera module has a lot more pixels than I plan to use in my final output, so this might be a simple solution. Based on this, I designed a few more iterations of the cartridge to test mounting the camera module the correct distance from the aperture. <img alt="2017-07-15 22-58-09 1127" src="/wp/2017/07/2017-07-15-22-58-09-1127.jpg"/> The results were OK. I used <a href="https://github.com/jacksonliam/mjpg-streamer" target="_blank">mjpeg-streamer</a> to get a live feed from the sensor so I could align it, and the picture didn’t look too bad. However when I used <a href="https://www.raspberrypi.org/documentation/raspbian/applications/camera.md" target="_blank">raspivid</a> to capture some video and reviewed it in <a href="http://www.videolan.org/vlc/" target="_blank">VLC</a>, it looked worse. <img alt="2017-07-15 22-58-27 1129" src="/wp/2017/07/2017-07-15-22-58-27-1129.jpg"/> I’m not sure what contributed to this. It may have just been more visible on the higher-resolution output (the stream is only 640x480 compared to raspivid’s 1080p outpt) or it could be differences in the way the two programs initialize/configure the module, but in any case it’s something I need to learn more about. I was hoping this test would tell me whether or not this “cropping” technique would be a viable solution to the limited focus range of the camera module, but the results were inconclusive. If I can extend the focus range of the sensor, I might be able to get it close enough to the aperture to fill the sensor’s frame with an in-focus image, but I won’t be able to align the lenses if the sensor is that close, so I’ll need to switch to something like the mirror technique mentioned earlier. If that route is taken, there may be packaging problems, and it’s not clear to me if there is enough space for the camera module + lens extension + mirror combination… Of course, many of these problems could be solved using custom-designed parts, and in the long-run I plan on designing just such parts, but for now I want to stick to off-the-shelf components because it gives me more flexibility during the prototyping stage, and it also makes the project more accessible to others. I think the take-away from these experiments is that I seriously underestimated the optical component of this project. This is kind of a bummer, because I’m really looking forward to tweaking on the software and playing with the output video. The up-side is that it gives me an excuse to learn more about optics which is something I’ve always wanted to learn more about anyway.</p>
</div>