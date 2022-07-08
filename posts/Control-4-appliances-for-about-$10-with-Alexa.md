---
title: "Control 4 appliances for about $10 with Alexa"
date: "2017-06-12"
---

<div class="content">
<h1 id="control-4-appliances-for-about-10-with-alexa">Control 4 appliances for about $10 with Alexa</h1>
<p>A while back I wrote about controlling an LED via Alexa by using an ESP8266 to emulate a switch that Alexa natively supports. This is interesting as a proof-of-concept, but not terribly useful. In this post I’ll be applying the same concept to the <a href="http://astore.amazon.com/jjg00-20/detail/B01FVJ8XSU" target="_blank">LinkNode R4</a> board which combines an ESP8266 with four relays capable of switching up to 10 amps at 125 volts AC.</p>
<h2 id="why-buy-i-thought-this-was-diy">Why buy? I thought this was DIY!</h2>
<p>When I  originally started this post, the plan was to continue on from controlling an LED to adding a relay to the circuit and demonstrate controlling a more practical load (a lamp, fan, etc.), but while digging up links for the article, I stumbled-upon the LinkNode board. This board combines the ESP8266 with four relays and all necessary support circuitry into a neat, compact board which sells for less than $10 on Amazon. Based on component cost alone, I couldn’t beat this price doing it myself. Also, there’s something attractive about reducing my exposure to “mains current”, especially in something I plan to use outside of the lab. Thus, I thought it was worthwhile to order one of these boards, see what it is like to work with and share my findings. Don’t worry, since the LinkNode is based on the ESP8266 it has all the same open-source goodness of the <a href="http://jjg.2soc.net/2017/02/21/open-source-home-automation-with-alexa/" target="_blank">previous project</a>.</p>
<h2 id="hardware">Hardware</h2>
<p>The LinkNode board contains almost everything you need to start turning things on-and-off using Alexa hardware-wise (other than a power supply). However, what I have in mind requires a little bit more, including:</p>
<ul>
<li>A way to get AC power in</li>
<li>4 ways to get AC power out (one for each relay)</li>
<li>A safe, reasonably attractive (or concealable) enclosure</li>
<li>A 5vdc power supply
Of these the power supply is the most frustrating part because I want to avoid using an external “wall wart”-style adapter. I’ll already have AC power inside the case, so it would be cleaner to include the DC power supply inside and have only one “power in” connection outside the enclosure. On the other hand, including the power supply inside the case means the case has to be larger. Exactly how much larger is the question, because the power supply designs I’m familiar with are somewhat old-fashioned and involve large-ish transformers, lossy voltage regulators, etc. (perhaps this is a good opportunity for me to learn about contemporary power supply design). <em>Note: I had originally planned to include the enclosure and DC power supply design in this post, but since that is taking more time than expected. I’m going to leave that for a future article; for now let’s move on to making the board do something.</em></li>
</ul>
<h2 id="prepare-for-programming">Prepare for Programming</h2>
<p>To program the LinkNode board you’ll need some sort of TTL to serial adapter. For this project I used a simple and cheap USB-to-TTL cable like <a href="http://astore.amazon.com/jjg00-20/detail/B00QT7LQ88" target="_blank">this one</a>. USB to TTL serial adapter pinout: Line sequence defined:Red +5V, Black GND, Green TXD, White RXD To connect this USB adapter to the LinkNode:</p>
<p>USB TTY LinkNode</p>
<p>Black
G (ground)</p>
<p>White
TX</p>
<p>Green
RX
Set the board to “program via UART” mode: <img alt="linknodejumper" src="/wp/2017/03/linknodejumper.png"/></p>
<h2 id="software">Software</h2>
<p>From the Tools menu of the Arduino IDE, select the following settings:</p>
<ul>
<li>Board: <code>Generic ESP8266 Module</code></li>
<li><p>Flash Mode: <code>QIO</code>
Paste the code below into the editor:</p>
<p>#include
#include
#include “fauxmoESP.h”</p>
<p>#define SWITCH_1        14   // top-left
#define SWITCH_2        12   // top-right
#define SWITCH_3        13   // bottom-left
#define SWITCH_4        16   // bottom-right</p>
<p>#define SERIAL_BAUDRATE 115200</p>
<p>// Wifi credentials REMOVE BEFORE COMMITTING TO GITHUB!!!
#define WIFI_SSID “change”
#define WIFI_PASS “me”</p>
<p>fauxmoESP fauxmo;</p>
<p>// —————————————————————————–
// Wifi
// —————————————————————————–</p>
<p>void wifiSetup() {</p>
<pre><code>// Set WIFI module to STA mode
WiFi.mode(WIFI_STA);

// Connect
Serial.printf("[WIFI] Connecting to %s ", WIFI_SSID);
WiFi.begin(WIFI_SSID, WIFI_PASS);

// Wait
while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(100);
}
Serial.println();

// Connected!
Serial.printf("[WIFI] STATION Mode, SSID: %s, IP address: %s\n", WiFi.SSID().c_str(), WiFi.localIP().toString().c_str());
</code></pre>
<p>}</p>
<p>void setup() {</p>
<pre><code>// Init serial port and clean garbage
Serial.begin(SERIAL_BAUDRATE);
Serial.println();
Serial.println();

// Wifi
wifiSetup();

// Relays
pinMode(SWITCH_1, OUTPUT);
pinMode(SWITCH_2, OUTPUT);
pinMode(SWITCH_3, OUTPUT);
pinMode(SWITCH_4, OUTPUT);

// Fauxmo
fauxmo.addDevice("master bedroom lights");
fauxmo.addDevice("master bedroom fan");
fauxmo.addDevice("master bedroom humidifier");
fauxmo.addDevice("master bedroom other");

// fauxmoESP 2.0.0 has changed the callback signature to add the device_id, this WARRANTY
// it's easier to match devices to action without having to compare strings.
fauxmo.onMessage([](unsigned char device_id, const char * device_name, bool state) {
    Serial.printf("[MAIN] Device #%d (%s) state: %s\n", device_id, device_name, state ? "ON" : "OFF");

    switch(device_id){
      case 0: 
        digitalWrite(SWITCH_1, state);
        break;
      case 1:
        digitalWrite(SWITCH_2, state);
        break;
      case 2:
        digitalWrite(SWITCH_3, state);
        break;
      case 3:
        digitalWrite(SWITCH_4, state);
        break;
      default:
        Serial.printf("Unhandled device #%d\n", device_id);
        break;
    }
});
</code></pre>
<p>}</p>
<p>void loop() {</p>
<pre><code>fauxmo.handle();

static unsigned long last = millis();
if (millis() - last &gt; 5000) {
    last = millis();
    Serial.printf("[MAIN] Free heap: %d bytes\n", ESP.getFreeHeap());
}
</code></pre>
<p>}</p></li>
</ul>
<p>Now customize the code to your liking:</p>
<ul>
<li>Replace <code>change</code> and <code>me</code> with the SSID and password for your WiFi network</li>
<li>Replace “master bedroom lights”, “master bedroom fan”, etc. with the name you will use when speaking to Alexa. i.e., if you want to say “Alexa, turn on bedroom lights” replace “switch one” with “bedroom lights”.
Save the file and click the “Compile” button. If the code compiles without errors, click “Upload” to install the firmware on the LinkNode board. If you get errors when you compile the code, double-check the changes you made above and make sure you’ve installed the prerequisites.</li>
</ul>
<h2 id="testing">Testing</h2>
<p>Once the firmware is uploaded, unplug the power cable from the board and move the jumper to the “boot from flash” position as shown in the image above. In the Arduino IDE, select Tools -&gt; Serial Monitor and make sure the baud rate (the drop-down lower left-hand corner of the monitor window) is set to <code>115200 baud</code>. Finally, plug the power cable back into the LinkNode board. You should see some strange characters and then a message that says <code>Connecting to yourssid......</code> (Where “yourssid” is the SSID of your Wifi network) After a few seconds the board should connect and display: <code>[WIFI] STATION Mode, SSID: yourssid, IP address: 111.111.111.111</code> (Where “111.111.111.111” is a valid IP address for your network) If the board doesn’t connect to your WiFi network, make sure it is in range (it has a small antenna) and double-check the SSID and password you set in the code above.</p>
<h2 id="comments">Comments</h2>
<p><strong><a href="#57" title="2017-09-04 11:11:21">Alan (@Alan_667)</a>:</strong> Awesome…</p>
</div>
