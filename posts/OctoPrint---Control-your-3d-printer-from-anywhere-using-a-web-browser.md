---
title: "OctoPrint - Control your 3d printer from anywhere using a web browser"
date: "2013-01-19"
---

<div class="content">
<p><a href="https://github.com/foosel/PrinterWebUI" target="_blank"> OctoPrint </a> (available on <a href="https://github.com/foosel/PrinterWebUI" target="_blank"> github
here </a> ) is an alternative “host”
program (the program that controls the 3d printer, typically a desktop
application running on a desktop or laptop computer) which is controlled
entirely via a web interface.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/01
/OctoPrint-Main.png" target="_blank"> </a></p>
<p><em>OctoPrint Homescreen displaying status and temperature graph</em></p>
<p>This means that instead of having to be physically nearby the printer to start
and monitor print jobs, you can submit them from anywhere* and keep an eye on
the progress of the print from any device with an internet connection and a
web browser.</p>
<p>I’ve been looking for something like this ever since I started using <a href="http://www.gullicksonlaboratories.com/projects/reprap/" target="_blank" title="RepRap"> my
Reprap </a> , as
the machine is located in the laboratory and I’m not always able to hang out
for hours to keep an eye on things.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/01
/OctoPrint-Controls.png" target="_blank"> </a></p>
<p><em>Manual printer controls</em></p>
<p>In addition to basic host features like loading files, monitoring print
progress and manually operating the various axis of the printer, OctoPrint
includes a few additional features to address the fact that you’re not in the
same room with the printer to keep an eye on it.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/01
/OctoPrint-Webcam.png" target="_blank"> </a></p>
<p><em>Monitoring a print job remotely via live video feed</em></p>
<p>The first is the ability to display a live video feed inside the OctoPrint web
interface.  Essentially this passes-through a feed from an external program
that operates the web cam, but having it right in the same page makes it very
convenient to monitor all of the critical elements of the print job while it’s
running and intervene immediately if you see something going wrong.  OctoPrint
uses an http request (just a web link) to get the images from the camera,
which has the added benefit of working with dedicated stand-alone web cameras
as well as cameras connected to other computers.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/01
/OctoPrint-Timelapse.png" target="_blank"> </a></p>
<p><em>OctoPrint can automatically create timelapse movies of your print jobs</em></p>
<p>In addition to displaying a live video feed, OctoPrint has a timelapse feature
which captures still images from the camera feed at regular intervals (time-
based or triggered when the printer begins a new layer).  OctoPrint then
collects these stills and assembles them into a video file automatically.</p>
<p>Aside from being cool to watch, these videos can be extremely valuable when
tuning and troubleshooting the printer (or seeing what went wrong with a
failed print in the middle of the night).</p>
<p><a href="http://www.youtube.com/watch?v=8EbIO71Bi-M" target="_blank">http://www.youtube.com/watch?v=8EbIO71Bi-M</a></p>
<p>OctoPrint also keeps a copy of each file it’s printed so you can easily re-
print something without having to upload the file again (important since
devices like the iPad can’t upload local files via web page), and since the
design of the web interface is “responsive”, it works well on any browser
regardless of screen size (at least every one I could test).</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/01
/OctoPrint-Files.png" target="_blank"> </a></p>
<p><em>OctoPrint keeps a copy of the files you print for easy reproduction later</em></p>
<p>Another nice thing about OctoPrint is that it was designed from the beginning
to work well on the <a href="http://www.raspberrypi.org/" target="_blank"> Raspberry Pi </a> , which can
be easily attached to the printer and make the whole setup self-contained.  In
my case I’m using WiFi on the Raspberry Pi as well, so my entire printer can
be operated with nothing but a power cable (and perhaps in the future, on
batteries alone).</p>
<p>I’ve been using OctoPrint in its various incarnations since I first heard
about the project in a <a href="https://plus.google.com/u/0/106003970953341660077/posts/GQmn9tSgfGP" target="_blank"> post to the Google+ 3D Printing Group
</a> by it’s
author <a href="https://plus.google.com/u/0/106003970953341660077/posts" target="_blank"> Gina Häußge
</a> around Christmas
2012.  I’ve been using it as my exclusive printer host for the last week or so
without incident.  I’ve used it for prints lasting more than 7 hours, and I’d
say at this point it’s stable enough to be used as a replacement for my old
standby <a href="https://github.com/kliment/Printrun" target="_blank"> Pronterface </a> .</p>
<p>As with anything, there are <a href="https://github.com/foosel/PrinterWebUI/issues" target="_blank"> room for improvements
</a> , and while I can do things
like load filament by entering the extruder commands directly into the app’s
terminal, it would be nicer if these functions were exposed via buttons on the
control tab.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/01
/OctoPrint-Terminal.png" target="_blank"> </a></p>
<p>_ When all else fails, you can always get it done in the terminal _</p>
<p>I’d also like to see the ajax hooks documented (so I could have other devices
interact with OctoPrint via http) and have the ability to have “callbacks” in
the form of URL’s that are called when certain interesting events occur like
the completion of a file parsing, target temperature reached, end of print,
etc.  The good news here is that the developer has been extremely responsive
to both bug and feature requests while maintaining the discipline to keep the
program focused on its key objectives (i.e., avoiding “bloat”).</p>
<p>OctoPrint is a great example of the advantages of <a href="http://en.wikipedia.org/wiki/Open_source" target="_blank"> Open Source
</a> software development and in a
later post I plan to outline some of the non-technical aspects of its
development to illustrate why I think OctoPrint could have only existed in an
Open Source environment and why it’s important that we keep the future of 3d
printing (and all other technology) open.</p>
<p><em>*to access OctoPrint outside of the network your printer is attached to
you’ll have to open up your firewall/router to let those requests in.
Currently OctoPrint doesn’t provide a means to authenticate requests, so until
it does, this would probably be a “bad idea”.</em></p>
</div>
