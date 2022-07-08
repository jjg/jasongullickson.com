---
title: "Software-Only Computer Hardware Company"
date: "2015-10-13"
---

<div class="content">
<p>It sound like a paradox, but I propose a software-only computer hardware
company.</p>
<p>I’ve wanted to start a computer company since I was a child, but it’s become
something of a necessity for me as of late.</p>
<p>As a professional programmer, what I need from a computer turns out to be
something of an “edge case” and as such there’s really no off-the-shelf
computer that’s really made for me.  This is compounded by the fact that I
need a portable computer, which pretty much limits me to laptops, where
options in terms of displays, keyboards, etc. are fewer.  Unfortunately for me
these are the areas that matter the most.</p>
<p>I also want to run Linux.  While there’s a lot of hardware that will run
Linux, there’s not a lot of laptops that have great support for it, and the
ones that do don’t provide the hardware features I want most (the ones that
come close are very expensive).</p>
<p>So I resolved to build my own computer.  This is easier than it sounds, due to
some recent technological advances.</p>
<p>The first is the rise of the single-board computer (SBC).  The most well-known
of these is the Raspberry Pi, a complete general-purpose computer the size of
a deck of cards that costs $35.00 USD and is capable of running a complete
Linux desktop environment.  Today there is an ever-growing number of these SBC
devices with a wide-range of prices, performance and features.</p>
<p>The second is desktop manufacturing and specifically, the 3D printer.  This
significantly reduces the complexity of fabricating custom components
necessary to create the computer’s case as well as other various parts.</p>
<p>The availability of these two technologies makes it much more feasable for me
to produce a custom, personalized laptop computer.  So I set out to design my
ideal system.  The result is a design I call the “OffGRiD”, which has the
following key elements:</p>
<ul>
<li>“Clicky” keyboard with full-size, full-stroke keys</li>
<li>Sunlight-visible screen</li>
<li>Solar recharging</li>
<li>Full Linux support

<br/></li>
</ul>
<p>Once I started designing OffGRiD it occurred to me that if I made the 3D
models parametric (which I always try to do) the printable parts could easily
be adapted to accept alternative components.  This became more important as I
discussed OffGRiD with others who thought it was cool but wanted to tweak the
design to their personal preferences.  Doing this on a case-by-case basis is a
lot of work, so I started thinking about how I could automate the process.</p>
<p>This is when I came up with the idea for a software-based computer hardware
company.</p>
<p>The idea is pretty simple.  A website where you can design a personalized
computer by selecting from a menu of components (SBC’s, displays, keyboards,
etc.).  Once you’ve selected the components you want the site generates custom
printable 3D models for all the printed parts and a bill-of-materials (BOM)
for the components, connectors, fasteners, etc. you’ll need to build the
computer.  These parts and the BOM can be downloaded from the site for free.</p>
<p>However not everyone has access to a 3D printer, and sourcing all these
components can be a lot of work, and this is where the business model lies.
Once the customization process is complete, all or some of the computer’s
parts can be purchased directly via the website.  3D parts are sourced from 3D
printing services (more on this later) and the remaining components are
sourced from partner companies.  A 10% margin is applied to all parts,
although an effort is made to keep parts cost close to their retail price
through discount arrangements made with fulfillment partners.</p>
<p>But what if someone doesn’t want to build (really, assemble) the computer
themselves?  The site doesn’t provide any build-to-order options, however it
does facilitate connecting customers with local resources for help.  In fact,
the site will connect a potential customer with a local maker/hackerspace, or
other organization or individual in their area to help with assembly, print
parts, etc.  This might seem like it could undermine sales, but the primary
objective is happy users, so a few lost parts sales is worth it if it means a
better chance at providing a user with a pleasant experience.</p>
<p>Profits made by the site go back into R&amp;D to produce new 3D models and
continuously add support for new components.  In addition to laptop models
obvious areas of expansion are tablet and desktop designs, but other less
common systems such as “media center” computers and automotive applications
could be added (these being particularly applicable to customized form-
factors, etc.)</p>
<p>In addition to new categories of machines additional user-driven customization
could incorporate user-supplied design files, art, etc. that could be applied
to the printable models to add even more personalization.  If the user
desires, these customizations could be provided as options to other users for
some sort of compensation (perhaps store credit or something more abstract).</p>
<p>In addition to minor customization, all models (as well as operating-system
source code, etc.) are open-source and avaliable on Github.  Ambitious
individuals are invited to fork these repositories and issue pull requests to
improve the existing models or provide support for new components or entirely
new model lines, if desired.</p>
<p>As hinted at in the last paragraph actual software plays a role as well.  A
standard Linux distro will be developed that will be included with each kit,
designed to work with the selcted hardware.  This includes hardware support
for the selected SBC as well as accessories where appropriate (for example, if
a solar panel is included some kind of charge gauge and other operating-level
support is expected).  Since some customizations will be geared toward
hackers, support for things like GPIO and other less common features will be
included in the distributed operating system.  Initial O/S choices are likely
to include an Enlightenment-oriented Linux desktop environment and a Sugar-
based system.  Of course owners can choose to install their own custom
operating systems and software as well.</p>
<p>// jjg</p>
</div>
