---
title: "Go print yourself with 3dna"
date: "2013-07-15"
---

<div class="content">
<p><a href="https://github.com/jjg/3dna" target="_blank"> 3dna </a> is a <a href="http://www.python.org" target="_blank"> Python </a>
script which derives a 3d model suitable for printing from raw genome data
avaliable from services such as <a href="http://refer.23andme.com/a/clk/NPdh3" target="_blank"> 23andme
</a> .</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/07/jjg.jpg" target="_blank"> <img alt="First attempt to print the output from
3dna." src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/jjg-
300x224.jpg"/> </a> First attempt at printing the output from
3dna.</p>
<p>The physical output allows you interact with the data in a way that engages
the senses more directly that traditional visual-only on-screen methods.</p>
<p>The idea (and name) for 3dna came from Jamie and her interest in genetics.
This led us to try <a href="http://refer.23andme.com/a/clk/NPdh3" target="_blank"> 23andme’s genetic analysis service
</a> , and when I found out that I could
download the raw genome data I knew I had to do something cool with it.
Applying 3d printing to the data seemed like a obvious choice.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/Screen-
Shot-2013-07-14-at-2.47.59-PM.png" target="_blank"> <img alt="Raw genome data used as input for
3dna" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/Screen-
Shot-2013-07-14-at-2.47.59-PM-300x220.png"/>
</a> Raw genome data used as input for 3dna</p>
<p>It took some noodling to decide just how to translate the genome data into a
3d model (the options seemed infinite).  The method selected for 3dna came to
me while printing several different <a href="http://www.thingiverse.com/thing:31722" target="_blank"> vase or cup designs
</a> that were created by extruding
2-dimensional shapes and altering them in various dimensions along the Z axis.
After struggling with the geometry (I am notoriously bad at basic math) I came
up with an algorithm for converting the chromosome pair data into points and
mapped these in space along a Z axis that coincides with each chromosome.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/Screen-
Shot-2013-07-14-at-10.39.19-AM.png" target="_blank"> <img alt="OpenSCAD is used to preview the output before converting it to
STL" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/07/Screen-
Shot-2013-07-14-at-10.39.19-AM-300x211.png"/>
</a> OpenSCAD is used to preview the output
before converting it to STL in preparation for printing</p>
<p>The results are varied and interesting.  If printed as-is they are solid
(closed-top), but if printed hollow could produce cup of vase-like structures
(I’m considering baking this into the program in a future version).  Of
particular interest to me was to print the genome of myself, my wife Jamie and
our daughter Liberty and examine how the models are similar, how they are
different and how they might fit together.</p>
<p><a href="https://github.com/jjg/3dna" target="_blank"> 3dna </a> is <a href="https://en.wikipedia.org/wiki/Open_source" target="_blank"> Open-Source
</a> and the code is available on <a href="https://github.com/jjg/3dna" target="_blank">
Github </a> .  I have a few improvements in mind but
feel free to add your own to the <a href="https://github.com/jjg/3dna/issues" target="_blank"> Issue tracker
</a> , or if you have questions (or would
just like to try it out but don’t know where to start) leave a comment and
I’ll try to help you out.</p>
</div>
