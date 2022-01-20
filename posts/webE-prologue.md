---
title: 'WebE - Prologue'
date: '2022-01-20T17:00:00'
---

Earlier in December I foreshadowed this post with a cryptic message (as is tradition): 

>There is a movement afoot to bake "crypto" tech into the web in a fundamental way and I think this is a grave mistake.  They are calling this [Web3](https://en.wikipedia.org/wiki/Web3), so I will be calling my alternative **WebE**.

[WebE](https://github.com/jjg/WebE) is Web3 from an alternate universe.  A universe where the web is designed to empower everyone to share and consume creativity and a platform on which to develop new applications to empower both, regardless of means.  It is not a means of [concentrating economic power](https://www.bloomberg.com/news/articles/2021-12-10/web3-is-crypto-s-attempt-to-reinvent-the-internet-here-s-what-you-should-know), or one that favors people with access to the most computing resources.  It is engineered to be resilient against hierarchy and other power and control structures, as well as to reduce the impact of computing machinery on life on this planet.

While I'm tempted to dive into the technical details, I believe that a story may be a better way to communicate what is most important about WebE.

## Origin Story

In 2012 I started working on an idea to combine the power of web applications with the accessibility of the 8-bit personal computers I grew up with.  While these computers varied (sometimes radically) in their hardware, almost all of them came from the factory with a [BASIC](https://en.wikipedia.org/wiki/BASIC) interpreter.  Programs written in BASIC on an [Apple computer](https://en.wikipedia.org/wiki/Apple_II) could be run on a [Commodore](https://en.wikipedia.org/wiki/Commodore_64), [Atari](https://en.wikipedia.org/wiki/Atari_8-bit_family) or [homebrew Z80 machine](https://rc2014.co.uk/) with few changes (often with none at all).  As a result, most people who had one of these computers learned BASIC, wrote the programs they needed and shared them with others.

The web browser and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) provide a similar environment for software development, but by 2010 building applications for the web was complex and required a diverse set of specialized skills to develop the "front-end" (written in HTML, CSS and JavaScript) and the back-end (written in various other programming languages) as well as the various server software necessary to host such an application.

With the introduction of [Node.js](https://en.wikipedia.org/wiki/Node.js) in 2009 this changed, and it was now possible to use the same programming language (JavaScript) to write the code for both the front and back-end of a web application.  It took a few years before Node.js achieved mainstream adoption, but it has since grown to become the dominant programming environment for web applications (on both ends of the application as well).

While this reduced the language complexity footprint, it did little to simplify writing programs for the web, and in some ways it's made it more complex.  It is far and away more complicated than typing a program into an editor and running it.

As Node.js improved the back-end, browsers advanced as well and new features allowed the browser to integrate with more of the feature of the host operating system.  Over time, the browser learned to access cameras, GPS, etc. and it became possible to write more and more sophisticated software that ran completely within the browser.  What was missing was a way to persist data in these applications, and an easy, universal way to share them with others.

It was around this time that I started working on a way to bridge this gap, which I referred to as JS/OS.  JS/OS would be a set of Node.js services that would provide the missing pieces needed to write and distribute browser-based applications which could be authored within the browser itself, requiring only knowledge of HTML and JavaScript.  

> It's important to note that even at this early time (2013) the intended architecture for JS/OS was to run the Node.js server, that is the REST filesystem interface, etc. locally.  This allows JS/OS to provide applications with access to all of the computer's resources, in the spirit of the original personal computers.  The importance of this decision will become clear later.

As file I/O was the biggest barrier to writing and distributing these applications at the time, I began the project by writing JSFS: an HTTP interface to the local filesystem.  The first commit was made to Github on September 16, 2013 and the first working build was operational by [June 2014](https://github.com/jjg/jsfs/tree/2a4fb647a1f58d18a0d63e3a9515dbd10b8e4bb0).  While only the most rudimentary functionality was implemented (`POST`, `GET`), it was enough to start building experimental applications.  This led to the creation of [jedi](https://github.com/jjg/jedi), a self-hosted editor running on top of JSFS, capable of writing and executing new software from inside the browser (even capable of editing itself).

As I continued to experiment with building more sophisticated software on top of JSFS, it became apparent that other features of JS/OS would be needed to build more fully-featured applications.  The first of these was the ability to execute code outside of the browser environment (traditionally "server-side code" in other environments), but was sidetracked by focus on filesystem development.

## A Customer

Up until this point JS/OS was a personal project that I worked on in my spare time while working full-time for a music locker/marketplace called [Murfie](https://en.wikipedia.org/wiki/Murfie).  At Murfie we stored terabytes of audio data for customers in on-prem storage systems, but when we added a streaming playback option, we needed a way to move this data somewhere clients could reach it from the Internet.  Initially we did this by uploading compressed versions to AWS, but as we added higher-quality streaming the cost of storage grew.  We also needed the flexibility of moving the data between cloud providers without disruption.  This seemed like a natural fit for JSFS, because it could provide a standard interface across multiple clouds, and its stateless, block-based storage could easily be moved from place-to-place without interrupting existing connections.  I had also recently implemented block-level deduplication, which would also reduce the amount of raw data we needed to store regardless of the cloud provider.

Implementing JSFS in production at Murfie turned the focus of my JS/OS work almost entirely toward making JSFS better, and in particular better for storing and transferring large pools of media data.  The result was radical improvements in the speed, availability and stability of JSFS, but at the same time this meant a complete halt of work on the other aspects of JS/OS.  As JSFS matured, it became capable of managing hundreds of terabytes of data and serving thousands of lossless audio streams using a handful of modest servers.  Additionally, this application led to experimenting with ways to leverage block deduplication to improve the effective performance of transferring data between JSFS nodes (JSFS Federation), node-to-node streaming experiments and some specialized server-side execution (primarily transcoding and compression).

Additional companies adopted JSFS at this stage, and it continues to be used, but when I left Murfie I stopped actively developing JSFS.  I was very proud of the work, but I wasn't excited about taking it any further as simply a filesystem and I couldn't see a way forward to support my work on it as part of a complete application environment like JS/OS.


## 2015 - 2020

In the years between then and now, I spent most of my time away from the web.  I resumed work I had previously started at the extreme ends of computing. On one end, [high-performance computing](https://en.wikipedia.org/wiki/Supercomputer) (HPC) and at the other, [embedded](https://en.wikipedia.org/wiki/Embedded_system).  Via both personal projects and professional work I learned a lot about making things fast at both the physical and conceptual levels.  Working with things like [MPI](https://en.wikipedia.org/wiki/Message_Passing_Interface), [Spark](https://en.wikipedia.org/wiki/Apache_Spark), [FPGA](https://en.wikipedia.org/wiki/Field-programmable_gate_array), [Kubernetes](https://en.wikipedia.org/wiki/Kubernetes), etc. I learned the advantages and disadvantages to these technologies in both terms of writing and running software.  I spent (and still do spend) a lot of time experimenting with building clusters and writing software that takes advantage of the ubiquitous parallel processing hardware available now, as well as the rise of purpose-built silicon like GPUs that can be used to augment CPU-bound applications (if you are able to make use of them).

In all of these endeavors I would see how what I had envisioned for JS/OS could leverage the advantages and mask the disadvantages of these technologies and architectures.  

Another thing that came to light at this time are the risks of centralizing computing, especially in the form of an (ever shrinking) pool of cloud computing providers.  Central to JS/OS's philosophy was portability, and as the number of attacks and outages on centralized computing resources increase, the ability to transparently move applications between providers (or to eliminate the need for such providers completely) becomes apparent.  This is something I anticipated but could not prove when I began working on JS/OS, but since then it has made itself more and more clear.

One of the most vulnerable components of these centralized systems is name resolution (the ability to translate a human-readable name of a website into the address used to access it), specifically the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) (DNS).  One of the early decisions I made in designing JS/OS was to treat storage as a global namespace, removing the need for name resolution.  This was later augmented by [contributions from Preston](https://github.com/jjg/jsfs/commit/472b590ec2eda91ca28a40246b7e86ae52a32ee6) to allow JSFS to transparently translate between JSFS namespaces and the DNS names you are familiar with (like [jasongullickson.com](https://jasongullickson.com)).  By removing this dependency on DNS, JS/OS eliminates one of the primary attack vectors used to interfere with websites.

Still, during this time I wasn't able to spark enough interest in the ideas behind JS/OS, and I had become sufficiently decoupled from web development that it looked completely alien to me.  My idea of someone opening a browser, pointing it to the URL of their editor and typing-in a web application seemed like it was maybe to quaint, too simple to be relevant anymore.

Over the years I had several encouraging conversations with people who seemed to "get it", and they are some of the smartest people I know, but none of us could figure out how to support the work, so for the most part it lied dormant.


## 2021 and the Existential Threat of Web3

Several things happened to me in 2021 that made me revisit this work:

* The groundswell of interest in a decentralized web
* I started working for a company who is interested in making the web better
* I learned what defined `Web3`


### Rise (return?) of decentralization

I've spent most of my "online socializing" time the last few years in the [fediverse](https://en.wikipedia.org/wiki/Fediverse) and as you can imagine decentralization is a common topic around those parts.  This most commonly takes the form of "federated" services and applications which operate as stand-alone services which interact via standardized protocols.  

> A familiar example is Internet email; you can run any mail client and server you like, and as long as it's compliant with the standard protocols, you can send and receive email from anyone else compliant with the same protocols.

In addition there is an interest in these communities about reducing the resource consumption of the web, and of Internet applications in general (I guess computing itself to some degree).  The impact in terms of ecological impact, personal impact and often just prudent engineering drives people in these circles to build and experiment with distributed, decentralized, low-power systems which provide the same utility as their centralized, power-hungry (and usually closed and proprietary) counterparts.

Often when exploring these systems I find myself thinking how JS/OS could have solved similar problems, and perhaps with less complexity, had I found a way to pursue it.


### Working for someone who cares about the Web

As I said earlier I had mostly "checked-out" of contemporary web development, but when I was asked if I might be interested in a position at a web-focused company, I decided I should take the product for a spin.  Needless to say I was surprisingly delighted, and I've since taken a position at this company and even ported this blog over to their (our?) technology stack.  While I'm not planning to go out and dive head-first into the contemporary world of web app development, the approach we've taken has at its heart some of the same ambitions that I had for JS/OS, and the fact that a company with these goals has become not just financially viable but quite successful is not lost on me.

Beyond just this, as I learned more about the founder of the company it became clear that there is significant overlap in our personal interests and hopes for the future of the web, and that while the implementation of these goals may be different, there is a distinct spiritual overlap between what we want for the web.

As I began to wade back into the web pool however I was asked what I thought about "Web3".  Being completely ignorant about what Web3 was, and very familiar with what [Web 2.0](https://en.wikipedia.org/wiki/Web_2.0) was, I didn't have a specific opinion but figured it would be something that was going to be defined more by what it wasn't.  

I was mistaken.


### CryptNO

I've always been into decentralization (or at least since I knew what it meant).  I've preferred peer-to-peer architectures, the way the Internet originally worked and in general building capacity out of autonomous units of power.  Both my knowledge and personal experience back-up the position that the most robust systems are composed of functionally independent entities working in a cooperative manner without hierarchy or centralized control.

This philosophy is why I was originally excited about [Cryptocurrency](https://en.wikipedia.org/wiki/Cryptocurrency) and invested a few years experimenting with cryptographic [blockchain](https://en.wikipedia.org/wiki/Blockchain) applications.  I mined (and lost) and mined (and sold) [Bitcoins](https://en.wikipedia.org/wiki/Bitcoin) as early as 2010 and experimented with blockchain-based contracts in real-life systems around 2015.  

> This is all to say that I'm not afraid of "crypto" because I am ignorant, or due to lack of experience.  My aversion comes from direct experience with both the technical and ethical limitations to building systems on top of cryptographic blockchains.

As I opened the [Wikipedia page](https://en.wikipedia.org/wiki/Web3) for Web3 I was disturbed to find that not only is "crypto" a component of Web3, it's essentially the foundation.  The ambitions of those who are pushing Web3 is to essentially turn the entire contents of the web into artificial scarcity, arguing that this is the cost of receiving the benefits of decentralization.

As you can imagine, I disagree.

Not only do I object to this based on my experience in building and managing such systems, I know for a fact that it is unnecessary.  I reject the assertion that the only way to have the freedom provided by a decentralized web is to turn the entire thing into a pyramid scheme, and I believe that if this effort succeeds, it will undermine all of the potential good to humanity the web has to offer.  

> Yes, this is the part of the post where I start to sound like a crazy person, but stick with me, I've been right about things that sounded crazy before...

I completely understand why people accept this proposition.  I was once fascinated by the potential of crypto tech, and had this come along when I was still ignorant to its true cost, I might have even participated in bringing it to life.  But fortunately my work trends about ten years ahead of the curve and I've had the advantage of seeing the problems with crypto before it's too late to do something about it (hopefully).

So I propose WebE as an alternative path, one that leads to the benefits of a decentralized web, one that can be programmed by anyone with a modest computer and a web browser.  One that relies on neither tech-giant privacy-consuming cloud providers nor [crypto-traders](https://en.wikipedia.org/wiki/Ponzi_scheme).  A web that brings the "person" back to the democratizing power of personal computers.

The beauty of the Internet is that WebE doesn't have to "beat" Web3, the two can co-exist and you can use either without having to choose sides.  As such you'll see nothing in WebE's design that intends to undermine or "disrupt" Web3.

> Other than perhaps making it look obsolete.

From a technical perspective WebE is a direct descendant from my work on JS/OS.  Everything I've learned from building JSFS will be part of WebE, as will everything I've learned and done in the intervening years.  

Over the course of 2022 I will be sharing more detailed information about WebE's architecture, including API specifications, drafts of protocol specifications and example implementations.  As the name change might suggest, there will be nothing Javascript-specific in WebE's implementation (beyond the fact that at this point browsers only execute Javascript code) and any language, operating system, etc. which can implement the protocol(s) can participate in the architecture.

> I'm very excited to share more with you about WebE, but I want to get the fundamentals right so I don't spoil the fun of anyone ambitious enough to jump in early.  In the meantime know that the initial API will have a lot in common with [JSFS](https://github.com/jjg/jsfs#api), so if you want to get a jump on writing WebE programs time spent studying that will not be wasted.
