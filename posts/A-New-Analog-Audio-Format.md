---
title: "A New Analog Audio Format"
date: "2019-05-05"
---

<div class="content">
<p>Let’s start by agreeing that analog formats like vinyl do a better job of capturing music than digital formats.</p>
<p>That said digital (and especially electronic digital) formats offer a lot of features and convinience to both the listener and the artist.  You can’t buy a car stereo today that can play records, and while you <em>can</em> make your own records at home, <a href="https://thevinylfactory.com/features/a-beginners-guide-to-lathe-cutting-your-own-records/" target="_blank">it’s pretty hard</a>.</p>
<p>Technology has come a long way since the LP was “perfected”.  Could there be a new way of producing analog recordings that are as good or better than vinyl?  Or if not <em>better</em>, at least more convinient to listen to and easier to make at home if we apply technology that would have been impractical back when vinyl LP’s set the standard?</p>
<p>I had a faint memory that video <a href="https://en.wikipedia.org/wiki/LaserDisc" target="_blank">LaserDisc</a>s were analog, so I started my research there.  As it turns out this is true, and while eventually LaserDisc added digital audio tracks, the video tracks were always analog.  Physically the format is similar to <a href="https://en.wikipedia.org/wiki/Compact_disc" target="_blank">Compact Disc</a> (CD), but how the signal is encoded on the disc is different.</p>
<p><em>“However, while the encoding is of a binary nature, the information is encoded as analog pulse-width modulation with a 50% duty cycle, where the information is contained in the lengths and spacing of the pits. In true digital media the pits, or their edges, directly represent 1s and 0s of a binary digital information stream”</em></p>
<ul>
<li><a href="https://en.m.wikipedia.org/wiki/LaserDisc" target="_blank">https://en.m.wikipedia.org/wiki/LaserDisc</a></li>
</ul>
<p>Further reading revealed that something akin to this may already have been done.  The <a href="https://en.wikipedia.org/wiki/Super_Audio_CD" target="_blank">Super Audio Compact Disc</a> (SACD) used <a href="https://en.wikipedia.org/wiki/Pulse-density_modulation" target="_blank">pulse-density modulation</a> to record audio on an optical disc.  They don’t call this <em>analog</em> however, and use a <a href="https://en.wikipedia.org/wiki/1-bit_DAC" target="_blank">1-bit analog-to-digital converter</a> to turn the analog signal into a <a href="https://en.wikipedia.org/wiki/Bitstream" target="_blank">bitstream</a> that is then written to the disc.</p>
<p>Another related technology is the development of the <a href="https://en.wikipedia.org/wiki/Class-D_amplifier" target="_blank">Class-D amplifier</a>.  These amplifiers use a binary electrical signal (essentially a <a href="https://en.wikipedia.org/wiki/Switched-mode_power_supply" target="_blank">switching power supply</a>) to drive a speaker which, due to its mechanical nature, converts the digital signal to analog automatically.</p>
<p>The SACD format isn’t very common now, like most physical media formats (I’m not sure if it was ever possible to create your own SACD’s at home).  Even so it’s encouraging to know that it’s at least possible to use these techniques to create an optical audio disc.</p>
<p>This makes me wonder: could a typical CD burner be modified to record an <em>analog</em> audio using an encoding similar to LaserDisc on standard CD-R media?</p>
<p>I don’t think this can be done with software alone.  Most CD drives use a <a href="https://en.wikipedia.org/wiki/ATA_Packet_Interface" target="_blank">ATAPI</a> or <a href="https://en.wikipedia.org/wiki/SCSI" target="_blank">SCSI</a> interface which <a href="https://en.wikipedia.org/wiki/List_of_acronyms:_A#AF" target="_blank">AFAIK</a> doesn’t provide low-level commands necissary to control how and when the laser etches pits into the disc. It might be possible to modify the <a href="https://en.wikipedia.org/wiki/Firmware" target="_blank">firmware</a> of a CD-ROM drive to accomplish this, but I’m not currently aware of any way to do it.</p>
<p>I have however sucessfully driven CD-ROM transports using <a href="https://en.wikipedia.org/wiki/G-code" target="_blank">g-code</a>.  In fact the <a href="https://www.youtube.com/watch?v=VNuxN39d9xs" target="_blank">first CNC machine I built</a> was a laser engraver made out of two CD-ROM drives.  This is a pretty brute-force way to go about it, and it’s not the most “repeatable” (as it involves a lot of cutting and soldering) but it might be the fastest way for me to begin experimenting and developing this format.  Once I have a proof-of-concept, it might worth the effort to find a drive that can be more easily modified to support the format and make the whole system more accessible.</p>
<h2 id="references">References</h2>
<ul>
<li><a href="https://web.archive.org/web/20080513083110/http://www.access-one.com/rjn/laser/legacy/ld96.html" target="_blank">https://web.archive.org/web/20080513083110/http://www.access-one.com/rjn/laser/legacy/ld96.html</a></li>
<li><a href="https://www.allaboutcircuits.com/textbook/digital/chpt-13/delta-sigma-adc/" target="_blank">https://www.allaboutcircuits.com/textbook/digital/chpt-13/delta-sigma-adc/</a></li>
<li><a href="https://en.m.wikipedia.org/wiki/Pulse-density_modulation" target="_blank">https://en.m.wikipedia.org/wiki/Pulse-density_modulation</a></li>
<li><a href="https://en.m.wikipedia.org/wiki/Super_Audio_CD" target="_blank">https://en.m.wikipedia.org/wiki/Super_Audio_CD</a></li>
</ul>
</div>
