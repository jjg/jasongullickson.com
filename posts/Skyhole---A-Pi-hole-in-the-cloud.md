---
title: "Skyhole - A Pi-hole in the cloud"
date: "2019-02-21"
---

<div class="content">
<p>I used to run a great piece of software called <a href="https://pi-hole.net/" target="_blank">Pi-hole</a> at home on a <a href="https://www.raspberrypi.org" target="_blank">Raspberry Pi</a>, but the hardware wasn’t really up to the task, and since it provides an essential service (DNS), I took it down until I could throw better hardware at it.</p>
<p>I never got around to that, but a couple weeks ago I was messing-around with a public DNS server and wondered if I could do the same kind of DNS-based ad blocking using DNS alone?</p>
<p>Turns out I’m not the only person who thought of this, and in fact there’s already something called <a href="https://github.com/glenpp/py-hole" target="_blank">PyHole</a> to automate the process.</p>
<p>The PyHole documentation (and <a href="https://www.pitt-pladdy.com/blog/_20170407-105402_0100_DNS_Firewall_blackhole_malicious_like_Pi-hole_with_bind9/" target="_blank">linked post</a>) do a good job of explaining the setup, so I won’t cover the same territory here, but I’ve included a references section below with links to other pages I used in the process.</p>
<p>If you’re interested in giving it a try, <a href="/about">get in touch</a> and I’ll share the server IP addresses with you.</p>
<h2 id="references">References</h2>
<ul>
<li><a href="https://github.com/glenpp/py-hole" target="_blank">https://github.com/glenpp/py-hole</a></li>
<li><a href="https://www.pitt-pladdy.com/blog/_20170407-105402_0100_DNS_Firewall_blackhole_malicious_like_Pi-hole_with_bind9/" target="_blank">DNS Firewall (blackhole malicious, like Pi-hole) with bind9</a></li>
<li><a href="http://www.zytrax.com/books/dns/ch9/rpz.html" target="_blank">HOWTO - Configure a DNS firewall with RPZ</a></li>
<li><a href="https://wiki.debian.org/Bind9" target="_blank">Bind9 - Debian Wiki</a></li>
<li><a href="https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-caching-or-forwarding-dns-server-on-ubuntu-16-04" target="_blank">How To Configure Bind as a Caching or Forwarding DNS Server on Ubuntu 16.04</a></li>
<li><a href="https://www.iana.org/domains/root/servers" target="_blank">IANA – Root Servers</a></li>
<li><a href="https://likegeeks.com/linux-dns-server/#Types-of-DNS-Servers" target="_blank">Install, Configure, and Maintain Linux DNS Server</a></li>
</ul>
</div>
