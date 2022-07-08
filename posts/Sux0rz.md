---
title: "Sux0rz"
date: "2016-08-06"
---

<div class="content">
<p><em>Note: I’m going to try something different with this post and update it as
the project progresses.  We’ll see how that goes…)</em></p>
<p>Sux0rz  is a robotics collaboration between Jamie and myself.  The name (which
may change) was inspired by the fact that it started it’s life as a vacuum
cleaner.</p>
<p>For my part of the project the starting place is making it move.  It came on
wheels, which is a good start.  The rear wheels look like old lawnmower wheels
and are mounted on a solid axle, here’s the basic measurements:</p>
<ul>
<li>Axle 9.53mm</li>
<li>Wheel ~7in</li>
<li>6 spokes<br/>
<br/>
<br/></li>
</ul>
<p>The front wheels are pivoting casters, so a tank-style two-motor setup should
prove adequate for drive and steering.</p>
<p>After mulling over the drivetrain options I settled on attempting to design  &amp;
print it myself.  This lets me recycle a pair of motors left over from the
Power Wheels autonomous truck/hovercraft project instead of having to buy off-
the-shelf gearmotors, which are kind of expensive and take awhile to get here.</p>
<p>This might not pan out since I’m still learning about designing gears, ratios,
power requirements, etc. and also working with undocumented motors, but this
is more fun than just spending money.</p>
<p>Turns out the gear’s center hole should be 10mm ID (post-print) to fit over
the axle.</p>
<p>The custom gear has been designed to work with the pinion that came with the
motors.  I’d prefer twice the gear ratio (currently 15:1) but that would
require more gears, so we’ll try this for now.</p>
<p>Turned out that the motor nestles in almost perfectly between the deck and one
of the existing axle clamps (?).  Gear engagement seems satisfactory, so all
that’s necessary is something to hold the motor in place.</p>
<p>After considering a few options, I remembered I had a bar of aluminum stock
that was close to the width of the motor.  With a few well-placed holes, the
motor could be mounted through a piece of this bar and the whole things could
be bolted to the side of the deck.</p>
<p>For whatever reason I seem get spacing like this wrong often (perhaps a
“stack-up” problem.  Regardless it seems to hold, so I’m planning to use this
as a template to cut a pair of more accurate mounts later.</p>
<p>I wanted to have some adjustment in the mount, so that the engagement could be
experimented with, but for the first pass I decided against it.  I wasn’t sure
how everything was going to come together and I didn’t want to spend a lot of
time working the mount if it was going to have some fatal design flaw.</p>
<p>After fitting things together it looks like that’s not the case, so I might
put some adjustment ability into the next version, but for now there’s enough
slack in the way the assembly is mounted to the deck that there some
adjustment available.</p>
<p>Once things were together I did a test-run using a 9v battery and everything
seemed to work, but I wanted to see how it looked driving the actual wheel.
My long-term plan is to modify the gear model so that it can engage a standard
lawn mower wheel directly, but in the meantime zip ties suffice.</p>
<p>Coincidentally, this setup creates a sort of ghetto “cush-drive”.  This might
be advantageous, so I’m considering running with it and printing another gear
like the first.</p>
<p>After adding the gear, and spacing it enough to avoid interfering with the
motor mount screws, a longer axle is necessary.  A piece of  <sup>3</sup>⁄<sub>8</sub>” x 22” smooth
rod should do it.</p>
<p>New axel being sized, second motor mount and gear can be seen on the right.</p>
<p>Both motors mounted, preparing for drive test.</p>
<p>Final step for the new axel, drilling holes and placing pins to keep the
wheels on.</p>
<p><strong>Motors</strong></p>
<p>For now we’re recycling the motors from the Power Wheels truck.  They seem to
be some RS540 variant, 16k RPM and 12vdc I guess.</p>
<p>Current (har har har) thought on driving  the motors  is to use a simple
MOSFET + Arduino PWM setup for variable speed drive in one direction.  This is
largely based on the fact that I have all the parts for this on-hand, so it’s
cheaper and faster than buying/building something more sophisticated.
Additionally, I’m just guessing at the max power requirements for these motors
(40 amps?) so I’d rather burn-up a couple dollars worth of MOSFETS than an
expensive (both in dollars and time) controller while I figure things out.</p>
<p>First pass at motor driver (controller is kind of an overstatement)</p>
<p>Setup a test rig on the bench and it worked end-to-end with one channel, so
hopefully the second one works just as well.</p>
<p>Next step is to hook the whole mess up to the real drivetrain and see what
happens…</p>
<p>First live test with the actual drivetrain:</p>
<p>Found out that heatsinks are necessary on the MOSFETS, and there’s suddenly
more friction on the wheel than before.</p>
<p>Todo:</p>
<p>Heat sinks</p>
<p>File-down wheel to reduce friction</p>
<p>Drill-out gear hub</p>
<p>Mount electronics</p>
<p>Find cotterpins</p>
<p>Solder other diode</p>
<p>Heatsinks, hmm…</p>
<p>The heatsinks appeared to help, but unfortunately I noticed a problem with the
solder joints on one of the MOSFETs.  I thought I could repair it, but the
traces on the board were actually lifted and broken, so it looks like this
board it toast.</p>
<p>I might be able to make another one but I’m going to need some parts.  Since
I’m ordering parts anyway, I decided to pick up a couple of cheap RC motor
controllers as well.  I really wanted to build my own drivers for the robot
because I wanted to work with parts-on-hand and learn about motor control in
the process, but the clock is ticking for <a href="https://makerfairemilwaukee.com/" target="_blank"> Milwaukee Makerfaire
</a> and using off-the-shelf controllers is one
less variable at this point.</p>
<p>I guess I still did build my own driver, even if only half of it worked, and
I’ve learned enough that I might take a swing at making a more advanced
driver/controller in the future for another project.</p>
<p>Now I need to find out if I can use the existing pyfirmata - &gt; standardfirmata
setup to drive servos instead of just PWM.</p>
<p>Motor control V2</p>
<p>The new motor controllers basically work, and with that it was possible to
assemble the entire robot (temporarily in some areas) and test the system end-
to-end.  Functionally everything worked, but there were some control problems.
Here’s what we know now:</p>
<ul>
<li>The drivetrain is capable of moving the entire system at a high enough speed</li>
<li>The control system works as expected</li>
<li>All of the parts can be assembled in a form that can move about

<br/></li>
</ul>
<p>Here’s what we need to look into:</p>
<ol>
<li>The robot does not always respond immediately to commands</li>
<li>Braking and reverse</li>
<li>The robot can “fail deadly” in that the drive can become engaged and doesn’t disengage when control signals are lost</li>
<li>There is significant lag (seconds) in the video feed

<br/></li>
</ol>
<p>I have a few things to try in order to address these issues:</p>
<ul>
<li>Network disconnects may be to blame. Configure the robot to use an on-board wifi access point so distance to a stationary AP isn’t a factor</li>
<li>Add a iterator thread to the Python code to avoid overflowing the serial port</li>
<li>Use a queue to send commands from Python to the arduino to throttle command rate</li>
<li>Use a timeout on commands received at the arduino so motors stop if no additional commands are received within a specific window of time</li>
<li>The motor controllers supposedly support braking and reverse, but they came with no documentation so I need to find that and configure them, as well as add support for reverse to the controller software</li>
<li>Use a more sophisticated video streaming method and protocol</li>
<li>Consider switching to WebRTC to kill latency, etc. (<a href="https://janus.conf.meetecho.com/docs/index.html" target="_blank">https://janus.conf.meetecho.com/docs/index.html</a>)<br/>
<br/></li>
</ul>
<p><strong>Software</strong></p>
<p>At the moment it looks like a combination of Python modules will be providing
remote control via WiFi (flask - &gt; pyfirmata).  A REST API will provide
endpoints for motor control input that will come from a simple client-side
javascript remote control (that can run on any device).</p>
<p>Screenshot of current (working!) controller:</p>
<p>**Next Steps<br/>
**</p>
<p>Get the Raspberry Pi mounted securely in the brainpan</p>
<p>Configure the motor controllers  &amp; add “arm” control to UI</p>
<p>Configure Raspberry Pi for mobile hotspot WiFi network</p>
<p>Update UI to include reverse, and configure for forward, braking and reverse
signals</p>
<p><strong>Notes</strong></p>
<ul>
<li>Could the gear include a 608 bearing (or two)?  Would that fit on these axles?</li>
<li>Could ssh tunnels be used to expose the control interface (and associated API) to the public Internet via a gateway server?</li>
<li>Consider picamera to handle video stream via python instead of mjpg_streamer

<br/></li>
</ul>
<p><strong>Reference</strong></p>
<ul>
<li><p><a href="http://bildr.org/2012/03/rfp30n06le-arduino/" target="_blank"> http://bildr.org/2012/03/rfp30n06le-arduino/ </a></p></li>
<li><p><a href="http://bristolwatch.com/arduino/arduino_pwm_hb.htm" target="_blank"> http://bristolwatch.com/arduino/arduino_pwm_hb.htm </a></p></li>
<li><p><a href="http://bristolwatch.com/ele/h_bridge.htm" target="_blank"> http://bristolwatch.com/ele/h_bridge.htm </a></p></li>
<li><p><a href="http://flask.pocoo.org/" target="_blank"> http://flask.pocoo.org/ </a></p></li>
<li><p><a href="https://github.com/tino/pyFirmata" target="_blank"> https://github.com/tino/pyFirmata </a></p></li>
<li><p><a href="https://raspberrypi-aa.github.io/session3/firmata.html" target="_blank"> https://raspberrypi-aa.github.io/session3/firmata.html </a></p></li>
<li><p><a href="http://code.tutsplus.com/tutorials/an-introduction-to-pythons-flask-framework--net-28822" target="_blank"> http://code.tutsplus.com/tutorials/an-introduction-to-pythons-flask-framework–net-28822 </a></p></li>
<li><p><a href="http://picamera.readthedocs.io/en/release-1.12/recipes1.html" target="_blank"> http://picamera.readthedocs.io/en/release-1.12/recipes1.html </a></p></li>
<li><p><a href="http://www.html5rocks.com/en/mobile/fullscreen/" target="_blank"> http://www.html5rocks.com/en/mobile/fullscreen/ </a></p></li>
<li><p><a href="http://www.hongkiat.com/blog/responsive-for-mobile-screens/" target="_blank"> http://www.hongkiat.com/blog/responsive-for-mobile-screens/ </a></p></li>
<li><p><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW1" target="_blank"> https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW1 </a></p></li>
<li><p><a href="http://scruss.com/blog/2012/10/28/servo-control-from-pyfirmata-arduino/" target="_blank">http://scruss.com/blog/2012/10/28/servo-control-from-pyfirmata-arduino/</a></p></li>
<li><p><a href="http://www.rcworld.com.au/media/downloadspdf/TY1%20%20-%20TY1%20Brushed%20%20ESC%20instructions%20May%2008%20EE.pdf" target="_blank"> http://www.rcworld.com.au/media/downloadspdf/TY1%20%20-%20TY1%20Brushed%20%20ESC%20instructions%20May%2008%20EE.pdf </a></p></li>
<li><p><a href="http://techvalleyprojects.blogspot.com/2012/06/arduino-control-escmotor-tutorial.html" target="_blank"> http://techvalleyprojects.blogspot.com/2012/06/arduino-control-escmotor-tutorial.html </a></p></li>
<li><p><a href="https://www.linkedin.com/pulse/faq-rc-esc-calibration-programming-using-arduino-boura-cissp-mphys" target="_blank"> https://www.linkedin.com/pulse/faq-rc-esc-calibration-programming-using-arduino-boura-cissp-mphys </a></p></li>
<li><p><a href="https://janus.conf.meetecho.com/docs/index.html" target="_blank"> https://janus.conf.meetecho.com/docs/index.html </a></p></li>
<li><p><a href="https://www.rs-online.com/designspark/building-a-raspberry-pi-2-webrtc-camera" target="_blank">https://www.rs-online.com/designspark/building-a-raspberry-pi-2-webrtc-camera</a></p></li>
</ul>
</div>
