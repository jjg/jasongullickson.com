---
title: "Solarhome Inputs and Outputs"
date: "2019-02-06"
---

<div class="content">
<p>Spent some time researching and documenting everything I could find about the on the <a href="https://www.bioliteenergy.com/products/solarhome-620" target="_blank">SolarHome 620</a>.</p>
<h2 id="battery">Battery</h2>
<p>BioLite publishes the following battery details on their website:</p>
<ul>
<li>3300mAh</li>
<li>6.5 VDC</li>
<li>20 Wh</li>
<li>LiFEPO4 chemistry</li>
</ul>
<p>Based on this I believe that the battery is a pair of 26650 cells, perhaps simular to this: <a href="https://www.batteryspace.com/custom-lifepo4-26650-battery-6-4v-3300mah-s-s-21wh-3-5a-rate.aspx" target="_blank">https://www.batteryspace.com/custom-lifepo4-26650-battery-6-4v-3300mah-s-s-21wh-3-5a-rate.aspx</a></p>
<h2 id="inputs-outputs">Inputs &amp; Outputs</h2>
<p>I also spent some time probing the inputs and outputs.  Between the documentation and the lables on the hardware you can find a number of useful details:</p>
<table>
<thead>
<tr>
<th>Count</th>
<th>Description</th>
<th>Connector</th>
<th>Volts DC</th>
<th>Amps</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Solar panel input</td>
<td>4.8mm barrel</td>
<td>12</td>
<td>0.5</td>
</tr>
<tr>
<td>2</td>
<td>Lamp output</td>
<td>5.5mm barrel</td>
<td>12</td>
<td>0.5</td>
</tr>
<tr>
<td>2</td>
<td>USB charger</td>
<td>USB A-Type</td>
<td>5</td>
<td>0.5</td>
</tr>
<tr>
<td>1</td>
<td>Expansion battery</td>
<td>Female Mini DIN-4</td>
<td>?</td>
<td>?</td>
</tr>
</tbody>
</table>
<h3 id="power-in">Power In</h3>
<p><img alt="Solar panel specifications label" src="/solarhome_panel_specs.jpg"/></p>
<p>Knowing the power input parameters is exciting because one of the most common complaints I see online about the SolarHome is that there’s no way to charge the battery other than using the solar panel.  This isn’t a big deal if you’re installing the system somewhere for awhile where it can get charged-up, but if you’re going camping or something more temporary, it would be nice to head-out with a full battery in case you don’t have a full day of sunlight ahead of you.</p>
<p>It also opens up the possibility of using other off-grid power sources such as wind or micro-micro-hydro.  Without knowing how much regulation capacity the SolarHome provides, it would be prudent to have regulation on the supply-side of any alternative power source you come up with, but so long as you <strong>don’t push more than 12VDC @ 0.5A into the unit</strong>, you shouldn’t be in any more danger than you would be using the supplied solar panel.</p>
<h3 id="power-out">Power Out</h3>
<p><img alt="Controller specifications label" src="/solarhome_controller_specs.jpg"/></p>
<p>My guess is that the USB charging ports will be the best way to get power out of this unit.  Since they are designed to charge unknown devices they should have ample regulation to prevent you from harming the device.</p>
<p>12VDC is avaliable via the jacks intended for the lamps which ship with the system, but it’s less clear how the control unit interacts with devices connected to these outputs, so you may experience unexpected fluctuations in power from these ports.  In addition, since these ports are intended specifically for the lamps provided by BioLite it’s possible that they don’t have any regulation.  If you were to connect a load that draws more current than the ports are designed to deliver (0.5 amps) you may damage the system.</p>
<p>Unless you can be sure to only draw 0.5A or less, it’s best to avoid using these for now.</p>
<h3 id="mysterious-expansion-port">Mysterious Expansion Port</h3>
<p>BioLite doesn’t provide any additional information about the “Expansion battery” port other than that it’s used to connect additional batteries and that I can’t buy one.  I started poking-around at the port to see what it does and here’s my best-guesses so far:</p>
<p><img alt="Mini DIN-4 diagram" src="/1024px-MiniDIN-4_Diagram.svg.png"/></p>
<p><em>Pins are numbered counter-clockwise starting with the lower-right pin.</em></p>
<table>
<thead>
<tr>
<th>Pin</th>
<th>Measurement</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>Skirt</td>
<td>0 VDC</td>
<td>Ground</td>
</tr>
<tr>
<td>1</td>
<td>0 VDC</td>
<td>Serial RX</td>
</tr>
<tr>
<td>2</td>
<td>3.3 VDC, fluctuating</td>
<td>Serial TX</td>
</tr>
<tr>
<td>3</td>
<td>12 VDC</td>
<td>Power to charge external battery</td>
</tr>
<tr>
<td>4</td>
<td>Floating</td>
<td>Not connected</td>
</tr>
</tbody>
</table>
<p>The only connections I’m sure of are the skirt (ground) and pin 3 (12VDC).  At first I thought pin 4 was another ground but after seeing a signal on pin 2, I think it might be the receiving pin for a 3.3v serial connection (given the proximity to pin 2).</p>
<p><img alt="Controller connected to oscilloscope" src="/solarhome_oscope.jpg"/></p>
<p>When the control box is idle pin 2 is at 0 volts.  If a button is pressed, pin 2 goes high to 3.3v.  With the oscilloscope connected there appears to be a signal transmitted on pin 2 which appears as a series of voltage drops.  This sequence repeats about once ever 5 seconds as long as the LCD is displaying information.</p>
<p>It may be possible to learn more about this signal using only an oscilloscope, but if my scope can do it, I don’t know how to use it that way.  I did a little searching on reverse-engineering serial signals and landed on using a <a href="https://en.wikipedia.org/wiki/Logic_analyzer" target="_blank">logic analyzer</a> as the next step in decoding this signal.  I’ve never used a logic analyzer before, but I was able to find a <a href="https://www.amazon.com/gp/product/B077LSG5P2" target="_blank">USB-based device for about $12</a> that is compatible with the open-source <a href="https://sigrok.org" target="_blank">Sigrok</a> software, so I decided to give it a go.</p>
<p>Based on the above my guess as to how this works is that the external battery communicates with the control box using a serial command protocol to share state-of-charge information.  This data is then used by the control box to display capacity information to the user via the LCD.  I’m not sure why the battery charge voltage is 12VDC vs. something closer to typical <a href="https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery" target="_blank">LiFEPO4</a> charging voltage (around 3.5VDC), my only guess is that they are using the same charging circuit design in the expansion battery that they are using in the control box (which uses a 12VDC supply as well).  Since there appears to be 12VDC on pin 3 all the time (even when there is no power coming from the solar panel and the  LCD is turned off), my guess is that it’s up to the expansion battery to decide how much to draw from the control unit and that this is negotiated via serial communication.</p>
<p>That said these are all guesses.  I haven’t done enough of this type of signal analysis to have much confidence in my findings so don’t go out using these pins assuming I know what I’m talking about.  Hopefully I’ll be able to confirm some of this after the logic analyzer arrives (and I learn how to use it).</p>
</div>
