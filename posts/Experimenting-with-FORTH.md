---
title: "Experimenting with FORTH"
date: "2017-08-28"
---

<div class="content">
<h1 id="experimenting-with-forth">Experimenting with FORTH</h1>
<p>I’ve come across the <a href="https://en.wikipedia.org/wiki/Forth_(programming_language)" target="_blank">FORTH programming language</a> a few times in the past (notably as the foundation one of my <a href="https://en.wikipedia.org/wiki/Canon_Cat" target="_blank">favorite personal computers</a>) and while it seemed interesting, I couldn’t come up with an application for it that justified the time I’d need to invest learning it. More recently I came across a <a href="http://hackaday.com/?s=forth" target="_blank">series of articles on Hackaday</a> centered around running FORTH on <a href="https://en.wikipedia.org/wiki/STM32" target="_blank">STM32</a>-based <a href="https://en.wikipedia.org/wiki/Microcontroller" target="_blank">microcontrollers</a>. This intrigued me because I’ve been on the lookout for a more “interactive” programming environment for microcontroller work (vs. the typical code-build-flash-test-repeat cycle). The ability write code directly on the controller itself and tweak a system build around one <em>in situ</em> really clicks with the way I like to work and would speed up my experiments considerably. It also makes the whole development system more portable since all you need is a serial terminal. I had an STM32 board on-hand from some some (apparently unfinished) project but in order to put FORTH on it I would need a <a href="https://www.amazon.com/Logisaf-ST-Link-Emulator-Downloader-Programming/dp/B01N79YDJE/ref=sr_1_3?ie=UTF8&amp;qid=1503967201&amp;sr=8-3&amp;keywords=stm32+programmer" target="_blank">programmer</a>. They’re not very expensive, but it’s kind of a special-purpose thing and not something I had in the toolbox. Once that came I was able to get FORTH flashed to the STM32 in about 30 minutes (there’s some tooling that needs to be downloaded, compiled, etc.). Then I realized I’d need to solder on some headers before I could talk to it via serial, so that was another delay. However, after I found a few minutes to solder some headers on I coupled the STM32 with a slick serial-to-usb interface I picked up on <a href="https://www.tindie.com/products/Earth_People_Technology/ftdi-usb-to-serial-breakout-board-the-visiport2/" target="_blank">Tindie</a> and snapped it all together on a small breadboard. <img alt="IMAG0010" src="/wp/2017/08/imag0010.jpg"/> After figuring out the right minicom settings (seems like I’m away from it just long enough to forget how to use it) I was having a conversation in FORTH with the chip. <img alt="IMAG0012" src="/wp/2017/08/imag0012.jpg"/> I’m really excited to play with this setup. In a way it’s a lot like the 8-bit micros I grew up with; you turn it on, you get a prompt and you start writing programs. I have an application in mind for this which has been on the back burner because it requires a microcontroller and a lot of fiddly experimentation. If I can get my head around the language, I think FORTH on the STM32 might be the perfect tool for that job.</p>
</div>