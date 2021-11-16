---
title: 'The 100 Year Computer'
date: '2021-05-01T10:40:21'
author: mr
draft: false
tags:
  - preposterous
---
This morning I’m designing a computer that could run for (at least) a century.
One of the first steps is to study existing long-lived machines.

  

So far the computer with the longest uptime I can find is aboard [ Voyager 2
](https://en.m.wikipedia.org/wiki/Voyager_2) . Launched in 1977 and operating
continuously to this day, it’s 44 years of uptime is the longest I’ve found so
far.

  

![](/assets/126-image0.jpeg)  

  

_I’m still on the hunt for something longer, and I imagine there is a
mainframe somewhere that’s been grinding-away since before 1977; if you know
of an example please share!_

  

There’s a lot to learn about longevity from spacecraft computer design as well
as surviving hostile environments on meager resources. But these computers are
also fairly specialized in the applications they are capable of and a computer
that runs for 100 years is probably going to need to be capable of adapting to
new workloads over time.

  

[ Mainframes ](https://en.m.wikipedia.org/wiki/Mainframe_computer) have
longevity in both application and availability and this is no accident. While
we hear a lot about the redundancy and availability of the vast farms of
servers that make up “The Cloud”, these pale in comparison to the ability of a
mainframe to maintain throughout through any imaginable fault (hardware,
software, environmental catastrophe, etc.). There is a lot to learn about
building a 100 year computer from mainframe architecture (much of which hasn’t
changed substantially for 50 years itself). Most people consider mainframes to
be obsolete, but in reality they run many of the worlds most important
workloads and their use is actually increasing.

  

![](/assets/126-image1.jpeg)  

  

Another lesson to take from the mainframe for the 100 year computer is
selecting long-lived applications. Some of the applications these machines do
(payroll, credit card transactions, record keeping, etc.) have been around for
centuries before the digital computer itself and are likely to be needed 100
years from now. So maybe a computer designed for these tasks today wouldn’t
have to change much to be useful in 100 years?

  

On the other hand, flexibility might allow such a machine to remain
interesting and relevant for a century.

  

It’s hard to predict what sort of applications for computers the future may
hold, so how do you select a software environment for such a machine? What
operating system, what programming languages, etc. will still be useful in 100
years?

  

Here again we can take a page from the history of the mainframe. While
virtualization has become commonplace on pc-based servers over the last
decade, the ability to create isolated runtime environments for applications
has been available on mainframes since the 1970’s. This is in fact one of the
ways mainframes maintain relevance today, by hosting thousands of virtual
machines that can run whatever software happens to be most useful today.

  

So why not just use a mainframe for 100 years?

  

The way that mainframes do all this comes at a cost; they are large,
expensive, complex machines that require specialized skills and operators.
This rules out their use in most small-to-medium sized organizations and makes
them completely impractical for personal use. While anyone can lease a part of
one of these machines and avoid much of the cost, there are inherent risks in
depending on “other people’s computers” which reduce the ability to work this
way for a century (I know of no such “timesharing” entity that I would be on
existing 100 years from now).

  

So what I have in mind is to borrow ideas from these examples but implement
them using simpler, less exotic and more granular components which can be
combined as needed for particular applications. While computers can be the
most complex machines we’ve created as a species, the underlying principals
are almost identical between machines and are incredibly simple.

  

My thought is to push complexity down in the foundational layers, creating the
most elemental unit of logic that can be dynamically allocated to meet the
needs of the application and pushing anything application-specific into the
software realm. I’m combining these ideas with what I’ve learned from my
experiments with [ subleq ](https://en.m.wikipedia.org/wiki/One-
instruction_set_computer#Subtract_and_branch_if_less_than_or_equal_to_zero)
processor designs, [ parametric personal computers
](https://jasongullickson.com/parametric-personal-computers.html) , [
computational independence ](https://jasongullickson.com/computational-
independence.html) , etc.

  

So far this is mostly a thought experiment, but as I learn more about what has
been done and apply that to the design, if something begins to take shape I
may try to realize some of these ideas either in simulation or perhaps in
hardware as well.

