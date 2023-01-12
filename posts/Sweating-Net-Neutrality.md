---
title: "Sweating Net Neutrality"
date: "2017-07-12"
---

<div class="content">
<h1 id="sweating-net-neutrality">Sweating Net Neutrality</h1>
<p>Just to be clear, <strong>I support net neutrality</strong>. I think it’s essential to the function of the Internet, and I think anything else is contrary to the design of the network. That said, I think our time would be better spent engineering a solution to the problem that net neutrality aims to solve, which itself is rooted in the fact that most individuals rely on private ISP’s to access the Internet. I could launch into a history lesson about why this is the case, and why it’s contrary to how the Internet was designed to work but the fact of the matter is that we’re currently stuck with this until we come up with something better that we can implement without the help of the government or existing telecommunications companies who have nothing to gain by solving this problem. Off the top of my head I see three paths forward:</p>
<h2 id="bring-back-peering">Bring back peering</h2>
<p>Before the days of the <a href="https://en.wikipedia.org/wiki/Internet_service_provider" target="_blank">ISP</a>, if you wanted to access the Internet you would enter a <a href="https://en.wikipedia.org/wiki/Peering" target="_blank">peering agreement</a>. In simplest terms, this meant that you would attach your network to the Internet with the agreement to allow network traffic from the Internet to flow across your network free of charge. In return you could access the other networks attached to the Internet free of charge. This is all the Internet is: <em>a network of networks where data can travel freely</em>, and what makes it <em>better than anything else which came before it</em>. Peering requires physical access to an existing Internet-connected network, which can be inconvenient and expensive. This is why ISPs emerged in the first place. ISP’s would peer with the Internet, and in turn would sell dial-up access to their network to individuals. At the time (the late 1980’s) this was a matter of practicality; the only pervasive network which reached every residence was the telephone network, but things have changed since then. One solution to the net neutrality problem is simply to allow individual networks to peer with the Internet and eliminate ISPs*. We have several network technologies available to us now that could make this possible, so the barrier is more an administrative one than a technical one at this point. I don’t know the current state of peering, or what is involved, but I believe this to be the best and most durable solution to the problem.</p>
<h2 id="subvert-your-isp">Subvert your ISP</h2>
<p>If we’re stuck with private corporate ISP’s then the only option is to subvert their ability to alter our traffic. The first technology that comes to mind that is capable of this is the Virtual Private Network or <a href="https://en.wikipedia.org/wiki/Virtual_private_network" target="_blank">VPN</a>. VPN’s are commonly used to send traffic across the Internet in encrypted form to enable secure, private connections between networks over a public network. They are also used by many consumers as a way to make their traffic appear to be coming from somewhere other than the physical point of origin (useful for getting around country-based restrictions on video services, for example). It’s much harder (I’m not going to say impossible) for an ISP to inspect and modify your network traffic if it’s running over a VPN that originates inside your home network. If you think of a VPN like a tunnel, the entrance of the tunnel could be your router, and the exit somewhere out on the public Internet, out of the reach of your ISP. If you ISP wants to prioritize your traffic, all they see is the outside of the tunnel and they can’t do much about what’s inside**. This effectively renders the ISP’s attempts to subvert net neutrality impotent. There are downsides to the VPN approach. First it’s wasteful because it consumes more bandwidth than direct connections and it uses more energy to encrypt/decrypt network traffic. It also requires that you have systems in place on your network to provide the VPN connection, and another system somewhere on the public Internet to act as the other end of the tunnel. There is also a speed penalty due to delays of encrypting/decrypting traffic which can increase the latency (or “lag”) you feel when accessing websites, playing games, using video chat, etc.</p>
<h2 id="build-a-new-internet">Build a new Internet</h2>
<p>This might be the strongest solution of all, but it’s also the most complex. In some ways it’s simple, building a network like the Internet is well-covered territory. On the other hand the physical infrastructure is expensive, and without the ability to leverage things like “<a href="https://en.wikipedia.org/wiki/Eminent_domain" target="_blank">eminent domain</a>”, it’s likely you’d have to resort to wireless technologies. I think that it would be possible to construct a global network using only wireless links so long as the applications running on the network are designed properly. The only thing holding back these type of applications are legal constraints mostly related to copyright and intellectual property. If these could be set aside, a network with the level of functionality we currently enjoy from the Internet could be constructed with far less expense, utilizing far less power and other natural resources and with far greater levels of reliability. Here again we are not limited by technology or the laws of nature, just the made-up boundaries we’ve setup for ourselves.</p>
<h2 id="what-now">What now?</h2>
<p>I’ve deliberately oversimplified the above because at the moment I’m not sure what is the best route forward. I think the VPN approach is the most realistic in the short-term, but it’s not without problems and the implementations I’ve seen are not something that is accessible to everyone. That said there may be a manifestation that could be made user-friendly, which could serve as a stop-gap until of of the more robust, effective and permanent solutions can be implemented. What’s clear is that relying on the government or corporations to solve this problem is pointless, and if we want to continue to enjoy the current and potential value of a free and open Internet, we need to take matters into our own hands.</p>
<hr/>
<p>*I believe that in the long run, this will be the result if ISP’s get their way and net neutrality is eliminated. I’d consider this a solution, but it will mean an extended period of degradation (a decade or more) which means a lot of harm to a lot of people. **Of course, the ISP could just constrict all traffic that looks like a VPN tunnel, but there are ways to avoid that as well.</p>
</div>