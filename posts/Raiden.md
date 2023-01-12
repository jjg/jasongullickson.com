---
title: "Raiden"
date: "2017-08-08"
---

<div class="content">
<h1 id="raiden">Raiden</h1>
<p><em>Experimental Linux Supercomputer</em> In the past I’ve built a number of Linux-based cluster supercomputers primarily for my own edification and entertainment. I’ve been able to apply some of what I’ve learned from this to my professional work, but I’ve yet to have a job that demands a large, general-purpose supercomputer. However, in the last five years or so there have been a number of applications which benefit from high-performance computing architectures, and there has also been a resurgence in interest of classical HPC applications as well. This is exciting for me because it creates an opportunity to apply more of my supercomputing experience to my professional work. That possibility, along with a few secondary stimulus gave me the motivation to build another cluster and brush-up on my HPC skills. I also happen to have some idle hardware laying around that I can put to use in a project like this. Once I started learning about the state-of-the-art in high-performance Linux clusters I came up with another motivation for building this system. During a conversation about building a similar system out of Raspberry Pi’s, I was asked if there were any practical applications for such a computer beyond education. My immediate answer was “probably not”, since there are inherent limitations in the Raspberry Pi architecture (notably the speed of the network interface) that would prevent it from challenging systems made from more formidable components. Furthermore, the number of nodes required to build a supercomputer capable of doing the kind of work considered “practical” would be a lot larger than most people in the Raspberry Pi audience would be willing to construct. But then I thought about it some more and realized that I really don’t know how the performance of a four-core ARM chip like that in the Raspberry Pi 3 compares to something typically used to build a large cluster such as the Xeon-based servers I’m using for Raiden. So aside from gaining knowledge and experience in building &amp; operating a supercomputer, I’m going to use this project to do some direct comparisons between traditional server-based clusters and less-expensive, lower-power-consumption SBC-based designs. The methodology for these comparisons will be somewhat informal but I think the findings will be useful in determining how to design a lower-cost, lower power consumption supercomputer architecture. This new architecture could be explored and scaled-up to potentially achieve the performance necessary to take-on practical workloads. I believe that the availability of a supercomputer like this will become valuable as the number of high-performance computing applications increase. As the demand for these applications grow, the performance limits of cloud-based clusters will become more apparent and the need for dedicated supercomputer hardware will increase. By developing an architecture which reduces both purchase and operating cost (as well as reducing harm to privacy and the environment), the results of this experimental system may be in a unique position to serve this ever-increasing audience.</p>
</div>