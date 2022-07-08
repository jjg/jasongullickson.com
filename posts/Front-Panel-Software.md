---
title: "Front Panel Software"
date: "2018-03-14"
---

<div class="content">
<h1 id="front-panel-software">Front Panel Software</h1>
<p>The front panel of RAIN-PSC serves three essential purposes:</p>
<ol>
<li>Show the status of each node</li>
<li>Show the load on each node</li>
<li>Look really cool
The panel is actually eight individual control panels (one for each node in the cluster). Each panel consists of five LEDs and a toggle switch. The switch selects between two display modes: <strong>status</strong> and <strong>load</strong>. When the switch is in the <strong>status</strong> position, each LED indicates the following:</li>
</ol>
<ul>
<li><code>boot</code> (<strong>on</strong> when the os has booted successfully)</li>
<li><code>network</code> (<strong>on</strong> when the node has successfully connected to the network)</li>
<li><code>temp</code> (<strong>on</strong> when the node temperature is too high to run at full-speed)</li>
<li><p><code>user 1</code> &amp; <code>user 2</code> (used to indicate custom status selected by the programmer)
When the switch is in the <strong>load</strong> position, the LEDs behave as a bar-graph displaying the <a href="https://en.wikipedia.org/wiki/Load_(computing)" target="_blank">unix load</a> of the node. To provide this display the software needs to be able to:</p></li>
<li><p>Poll the status of each monitored subsystem (os, network, etc.)</p></li>
<li><p>Read the system load</p></li>
<li><p>Read the toggle switch position</p></li>
<li><p>Turn the LEDs on and off
When I started putting the electronics together, I used some command-line tools to interact with the LEDs and switches (I think it’s possible to write do all of the above in a shell script). In the long-run, I’ll probably write this in something faster/more efficient (Rust?) but for now, I’m going to use Python to get the hang of talking to the new hardware. I’m installing a few things on top of the base Armbian to make this happen:</p></li>
<li><p>python</p></li>
<li><p>python-dev</p></li>
<li><p>python-pip</p></li>
<li><p>python-smbus
The source code for the current version of the software <a href="https://gitlab.com/jgullickson/rain/blob/master/mark-ii/psc/software/panel.py" target="_blank">can be found here</a>. The script can be broken-down into three primary components:</p></li>
</ul>
<ol>
<li>Functions to gather system information</li>
<li>Functions to read and update the front panel components</li>
<li>A loop to periodically update the display
Gathering system information using Python is a pretty well-worn path, so I won’t discuss that in detail here. Reading the position of the toggle switch and turning the LED’s on and off is done using the <a href="https://pypi.python.org/pypi/smbus-cffi/0.1" target="_blank">smbus Python package</a>. This package interacts with the bus in much the same way as the command-line i2c tools. The hardest part of this for me is coming up with the best way to translate between the binary representation (the pins themselves), the boolean/decimal values I’m used to working with and the hexadecimal values that glue the two together. What I settled on was using hexadecimal internally to the functions which generate the display (<code>display_status()</code>, <code>display_load()</code>) and boolean/decimal values everywhere else. At some point I’ll abstract all this away into a library or a module, but since I don’t plan on using Python for this long-term I’ll probably hold-off on that for now. [caption id=“attachment_5117” align=“aligncenter” width=“783”]<img alt="octomonitor" src="/wp/2018/03/octomonitor.png"/> Remote hardware debugging thanks to Octoprint’s webcam…[/caption] Finally, the main loop simply loops forever, calling <code>toggle_on()</code> to determine the position of the status/load switch and then calling <code>display_load()</code> or <code>display_status()</code> accordingly. Once the display is updated the loop <code>sleep()</code>s for one second and then starts over. In its final form this will need to update the panel much faster than once-per-second (potentially leveraging interrupts as well), but for this version this is probably fast enough.</li>
</ol>
<h2 id="references">References</h2>
<ul>
<li><a href="https://pypi.python.org/pypi/smbus-cffi/0.1" target="_blank">https://pypi.python.org/pypi/smbus-cffi/0.1</a></li>
<li><a href="http://raspberrypi.link-tech.de/doku.php?id=mcp23017" target="_blank">http://raspberrypi.link-tech.de/doku.php?id=mcp23017</a></li>
<li><a href="https://cdn-shop.adafruit.com/datasheets/mcp23017.pdf" target="_blank">https://cdn-shop.adafruit.com/datasheets/mcp23017.pdf</a></li>
<li><a href="http://cagewebdev.com/raspberry-pi-showing-some-system-info-with-a-python-script/" target="_blank">http://cagewebdev.com/raspberry-pi-showing-some-system-info-with-a-python-script/</a></li>
</ul>
</div>
