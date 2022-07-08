---
title: "Sipeed MAIX BiT"
date: "2019-03-07"
---

<div class="content">
<p>The Sipeed MAIX BiT is one of a family of devices aimed at the “<a href="https://en.wikipedia.org/wiki/Edge_computing" target="_blank">AI at the edge</a>” market.  It caught my eye primarily because of its RISC-V CPU, and I’ve been looking for a low-cost way to dip my toes into working with RISC-V hardware, but I’m also curious to see if I can apply the devices hardware-accelerated [machine learning] capabilities to my work on accessible high-performance computing systems.</p>
<p><img alt="" src="/smb_case.jpg"/></p>
<p>The <a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-p-2872.html" target="_blank">Seeed Studio product page</a> provides a lot of detail about the device, but it’s buried in <a href="https://en.wikipedia.org/wiki/Three-letter_acronym" target="_blank">TLA</a>’s and lingo which can be hard to decode.  Here’s what I found interesting:</p>
<h1 id="hardware-details">Hardware Details</h1>
<p>The heart of the module is the <a href="https://s3.cn-north-1.amazonaws.com.cn/dl.kendryte.com/documents/kendryte_datasheet_20181011163248_en.pdf" target="_blank">Kendryte K210 system-on-a-chip</a> chip.  This <a href="https://en.wikipedia.org/wiki/System_on_a_chip" target="_blank">SoC</a> combines a dual-core RISC-V CPU, hardware-accelerated neural network accelerator (KPU) &amp; audio processor (APU) along with SRAM, ROM  and an array of I/O interfaces.</p>
<ul>
<li>CPU

<ul>
<li>Dual 64-bit <a href="https://en.wikipedia.org/wiki/RISC-V" target="_blank">RISC-V</a> cores</li>
<li>400MHz (overclockable to 800MHz)</li>
<li><a href="https://en.wikipedia.org/wiki/RISC-V#ISA_base_and_extensions" target="_blank">IMAFDC</a> ISA

<ul>
<li>64-bit Base integer <strong>I</strong>SA (RV64GC)</li>
<li>Integer <strong>m</strong>ultiplication and division</li>
<li><strong>A</strong>tomics</li>
<li>Single-precision <strong>f</strong>loating-point</li>
<li><strong>D</strong>ouble-precision floating-point</li>
<li>16-bit <strong>C</strong>ompressed instructions</li>
</ul></li>
<li>2 (one per core) IEEE754-2008 FPU</li>
<li>2 (one per core) 32KiB instruction cache</li>
<li>2 (one per core) 32KiB data cache</li>
<li>8MiB SRAM</li>
</ul></li>
</ul>
<p>In addition to the RISC-V CPU, the SOC include hardware designed to accelerate AI applications:</p>
<ul>
<li>Neural Network Processor (KPU)

<ul>
<li>64 KPU</li>
<li>576 bit width</li>
<li>0.25 TOPS(<a href="https://en.wikipedia.org/wiki/Tensor_processing_unit" target="_blank">tensor</a> operations per second?) @ 400MHz (0.5 TOPS when overclocked to 800MHz)</li>
<li>Maximum model sizes

<ul>
<li>Fixed-point real-time: 5.9MiB</li>
<li>Floating point (pre-quantisation) realtime: 11.8MiB</li>
<li>Non-realtime: limited only by flash capacity (fixed or floating point)</li>
</ul></li>
</ul></li>
<li>Audio Processor (APU)

<ul>
<li>8 channels of audio input data</li>
<li>12, 16, 24 and 32-bit input data widths</li>
<li>Simultaneous beamforming up to 16 directions</li>
<li>Built-in 512-point FFT</li>
</ul></li>
</ul>
<p>The SOC has a lot of other features (including the typical I/O interfaces, power management, etc.).  Details can be found in the <a href="https://s3.cn-north-1.amazonaws.com.cn/dl.kendryte.com/documents/kendryte_datasheet_20181011163248_en.pdf" target="_blank">datasheet</a></p>
<h1 id="hello-sipeed">Hello Sipeed!</h1>
<p>Right now I’m primarily interested in programming the CPU, so the rest of this post will be focused on getting set-up to run code on the RISC-V processor.  I’ll leave diving-in to the AI features of the chip for a future post.</p>
<p>Out-of-the box the Maix BiT is setup to run <a href="https://en.wikipedia.org/wiki/MicroPython" target="_blank">Micropython</a>. This makes getting started easy (especially if you’re already a Python programmer!) but I have to be honest, I was a little disappointed that I wasn’t going to be writing something RISC-V specific.  I guess that’s a good thing if the goal is to make it easy to adopt the RISC-V open architecture, but it kind of makes finally getting my hands on RISC-V hardware kind of anti-climatic.</p>
<p>This is my first Micropython device but my understanding is that developing for Micropython is pretty much the same all most hardware:</p>
<ol>
<li>Get a USB-C cable</li>
<li>Connect the board via USB to a computer</li>
<li>Identify the serial port: <code>ls /dev/tty*</code></li>
<li>Open the serial port with <code>screen</code>: <code>sudo screen /dev/ttyUSB0 115200</code></li>
<li>Press <code>Enter</code> for MicroPython prompt (REPL)</li>
</ol>
<p><img alt="" src="/smb_board_power.jpg"/></p>
<p>Now you’re speaking to (Micro)Python!  Typing <code>help()</code> gives you some basic information about what’s available:</p>
<pre><code>Welcome to MicroPython on the Sipeed Maix One!

For generic online docs please visit http://maixpy.sipeed.com/

Official website : www.sipeed.com

Current installed module:
os modules:Built-in system operation module and file operation method
machine module:Built in some machine related modules
socket modules:Network operation method
app modules   :Provide some applications

Control commands:
  CTRL-A        -- on a blank line, enter raw REPL mode
  CTRL-B        -- on a blank line, enter normal REPL mode
  CTRL-C        -- interrupt a running program
  CTRL-D        -- on a blank line, do a soft reset of the board
  CTRL-E        -- on a blank line, enter paste mode

For further help on a specific object, type help(obj)
For a list of available modules, type help('modules')
</code></pre>
<p>Use <code>Ctrl+a</code> then <code>k</code> and then <code>y</code> to exit <code>screen</code>.</p>
<h2 id="update-the-firmware">Update the firmware</h2>
<p>This is important.  I tried skipping this step because I wasn’t sure which firmware image to use, but the stock firmware was very different from what the documentation describes and I wasn’t even able to blink an LED without updating the firmware first.  The good news is that it’s fairly simple:</p>
<ol>
<li>Download the firmware image (I used  <a href="https://github.com/sipeed/MaixPy/releases/tag/v0.1.1" target="_blank">v0.1.1 beta</a>)</li>
<li>Install the <code>kflash.py</code> script: <code>git clone https://github.com/sipeed/kflash.py.git</code></li>
<li>Change directories to the <code>kflash.py</code> repository: <code>cd kflash.py</code></li>
<li>Flash the firmware: <code>sudo python3 kflash.py -p /dev/ttyUSB0 -b 2000000 -B dan ~/Desktop/maix/maixpy_v0.1.1_beta.bin</code></li>
</ol>
<p>You should see something like this:</p>
<pre><code>[INFO] COM Port Selected Manually:  /dev/ttyUSB0 
[INFO] Default baudrate is 115200 , later it may be changed to the value you set. 
[INFO] Trying to Enter the ISP Mode... 
.
[INFO] Greeting Message Detected, Start Downloading ISP 
[WARN] Use built-in ISP_PROG2, If you download firmware to flash  failed, please use -i1
Downloading ISP: |██████████████████████████████████████████████████| 100.0% 
[INFO] Booting From 0x80000000 
[INFO] Wait For 0.3 second for ISP to Boot 
[INFO] Boot to Flashmode Successfully 
[INFO] Selected Baudrate:  2000000 
[INFO] Selected Flash:  On-Board 
Downloading: |██████████████████████████████████████████████████| 100.0% 
[INFO] Rebooting... 

</code></pre>
<p>I’m not sure what that <code>[WARN]</code> means exactly, but it didn’t seem to cause any problems so far…</p>
<h2 id="write-some-python">Write some Python</h2>
<p>Blinking an LED is the <a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program" target="_blank">Hello World!</a> of microcontrollers, so we start there.</p>
<p>Re-attach to MicroPython: <code>sudo screen /dev/ttyUSB0 115200</code></p>
<p>The code below is entered line-by-line into the the serial terminal we attached above (just like the BASIC days):</p>
<pre><code>&gt;&gt;&gt; from Maix import GPIO
&gt;&gt;&gt; fm.register(board_info.LED_R, fm.fpioa.GPIO0)
1
&gt;&gt;&gt; led_r=GPIO(GPIO.GPIO0,GPIO.OUT)
&gt;&gt;&gt; led_r.value(0)
</code></pre>
<p>…and of course it’s not “Hello World!’ without some blinking…</p>
<pre><code>&gt;&gt;&gt; import time
&gt;&gt;&gt; for i in range(10):
...     led_r.value(not led_r.value())
...     time.sleep(1)

</code></pre>
<p>If everything went as planned, you should see the larger LED blink 10 times!</p>
<p><img alt="" src="/smb_blink.jpg"/></p>
<p>Writing anything complex this way would get old fast.  Fortunately there’s a couple different ways to make it easier.  There is a built-in editor called <a href="https://github.com/robert-hh/Micropython-Editor" target="_blank">pye</a> that runs directly on the board itself.  Using pye, you can load, edit, save and run programs using nothing other than the Sipeed MAix BiT and a serial terminal.</p>
<p>If you prefer to use your own editor, there is a command-line tool called <a href="https://github.com/pycampers/ampy" target="_blank">ampy</a> you can use to transfer files back-and-forth between your computer and the board.  ampy can transfer Python code you write on your computer over to the board to be run.  It can also transfer other files back-and-forth, useful if your programs need images or other media files.</p>
<p>There’s lots of other ways to “integrate” your favorite development tools with the MAix BiT that I haven’t had a chance to check out yet.  Theoretically any tool that works with Micropython should be compatible, but some experimenation may be necissary.</p>
<h1 id="what-s-next">What’s Next?</h1>
<p>In this post I’ve only scratched the surface of what this device is capable of.  I was most excited about the fact that I was able to get my hands on real RISC-V hardware for about $12.  I expected there to be a steep learning curve putting that open CPU to work, but as it turns out the learning curve is almost non-existant.  Since I can put the CPU to work without much effort, I’m planning to immediately begin diving-in to see what the AI features can do.  It’s not clear to me at the moment how useful these features are outside of their prescribed applications, namely “smart” video and audio processing, but from what I’ve read of the documentation it should be possible to use the off-the-shelf features to analyze media from sources other than attached cameras and microphones.  It might even be possible to add custom “models” to the device to perform completely differernt AI/machine learning workloads.</p>
<p>I’ve bought a lot of odd development boards in the past and many of them end up in the parts bin after some initial experimenation. Based on my experience so far with the Sipeed MAix BiT, I don’t think this board will be gathering dust in the drawer anytime soon.</p>
<h1 id="references">References</h1>
<ul>
<li><a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-p-2872.html" target="_blank">https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-p-2872.html</a></li>
<li><a href="https://maixpy.sipeed.com/en/" target="_blank">https://maixpy.sipeed.com/en/</a></li>
<li><a href="https://github.com/sipeed/kflash.py" target="_blank">https://github.com/sipeed/kflash.py</a></li>
<li><a href="https://github.com/shaoziyang/micropython_benchmarks/blob/master/README.md" target="_blank">https://github.com/shaoziyang/micropython_benchmarks/blob/master/README.md</a></li>
</ul>
</div>
