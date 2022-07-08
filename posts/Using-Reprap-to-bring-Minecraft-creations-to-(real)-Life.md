---
title: "Using Reprap to bring Minecraft creations to (real) Life"
date: "2013-03-10"
---

<div class="content">
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.09.11-AM.png" target="_blank"> <img alt="Daisy1" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03
/Screen-Shot-2013-03-09-at-9.09.11-AM-150x150.png"/> <img alt="Daisy
Printout1" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_20130309_131632_303-150x150.jpg"/>
</a></p>
<p><a href="http://minecraft.net" target="_blank"> Minecraft </a> is a great game, but it’s also an amazing
teaching tool as well.  This post describes step-by-step how to take your
Minecraft creations and turn them into real-world physical objects.</p>
<p><strong>Why Minecraft?</strong></p>
<p>There’s a lot of ways to create models that can be printed on a 3d printer
ranging from <a href="http://usa.autodesk.com" target="_blank"> expensive, high-end professional tools
</a> to <a href="https://tinkercad.com" target="_blank"> free, web-based systems designed for beginners
</a> but few of these tools offer much terms of support
for collaboration.  When they do, the traditional “windows and desktop” user
interface (while appropriate for one person working on one document at a time)
is far from an ideal experience for realtime collaboration, and their
2-dimensional interface is not necessarily well-suited for working with
3-dimensional objects.</p>
<p>Minecraft on the other hand provides a “virtual Legos” interface for
constructing 3-dimensional objects that is immediately familiar to most kids
(and adults as well).  This, coupled with a naturally-collaborative
environment (the multiplayer game) makes building things together as natural
as doing it in real life, with an incredibly low learning curve.</p>
<p><strong>Step 1: Create something awesome</strong></p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.09.11-AM.png" target="_blank"> <img alt="Daisy: She's a big dog" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/Screen-Shot-2013-03-09-at-9.09.11-AM-300x190.png"/>
</a> Daisy: She’s a big dog</p>
<p>This is Daisy, a multi-story monument designed by my daughter Liberty to
commemorate the loss of one of her Minecraft pets (when I say loss it’s
unclear if the dog has passed or we simply can’t find it).  The range of
things that can be created in Minecraft is extreme, but I’ll leave it to <a href="http://www.minecraftforum.net/topic/1046616
-what-to-build-the-list/" target="_blank">
other, more skilled Mincrafters </a> to explain that process.</p>
<p><strong>Step 2: Mark it</strong></p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.16.12-AM.png" target="_blank"> <img alt="Stack Diamond, Gold, Iron to mark the area to export \(buried here so we
get some ground in the model\)" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/Screen-Shot-2013-03-09-at-9.16.12-AM-300x190.png"/>
</a> Stack Diamond, Gold, Iron to mark the area
to export (buried here so we get some ground in the model)</p>
<p>Once you’ve created your masterpiece you have to mark what portion of the
Minecraft world you want to print (lest you print the entire world, which
would take awhile).  This is done in-game, buy placing a special series of
blocks at the corners of the area you want to print.  Start by placing a stack
of blocks in this order: diamond, gold, iron at one corner of the area you
want to print, at the lowest point you want printed (the diamond block will
mark this point).</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.18.33-AM.png" target="_blank"> <img alt="Marker Tower" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/Screen-Shot-2013-03-09-at-9.18.33-AM-150x150.png"/>
</a> <a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.18.57-AM.png" target="_blank"> <img alt="Screen Shot 2013-03-09 at 9.18.57
AM" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.18.57-AM-150x150.png"/>
</a></p>
<p>Next place another stack like this kitty-corner to the first, creating a
rectangle around the object you want to print.  The base of this stack (the
diamond block) needs to be elevated above the highest point you want to print
(remember we’re marking a 3d space) so it may be necessary to construct a
tower to place this marker on.</p>
<p><strong>Step 3: Export</strong></p>
<p>Now that we’ve marked what we want to export from the Minecraft world, we need
something to do the exporting.  I use a <a href="http://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"> Python
</a> script called
<a href="https://github.com/codys/minecraft.print" target="_blank"> minecraft.print() </a> to accomplish
this.  This script searches the entire world for the two markers placed in
step 2 above.  Once it finds them, it takes all the blocks in-between them and
exports them as an STL file, which is a format commonly used for 3d printing.</p>
<p>If you’re not familiar with Github and Python you might need some help getting
this to run.  I have created a separate page describing how to do this in
detail if you need a hand with this step.</p>
<p>Once you have the script setup you can pause Minecraft and run the script.
You’ll need to specify the name of the world you created your model in (just
the name as its displayed when you start the game, the script will find the
actual files).  You may need to put the name in quotes if it has spaces, etc.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.20.46-AM.png" target="_blank"> <img alt="minecraft.print\(\) running in the OSX
console" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03
/Screen-Shot-2013-03-09-at-9.20.46-AM-300x220.png"/>
</a> minecraft.print() running in the OSX
console</p>
<p>If the script is sucessfull at finding your model you’ll see this message,
then it will begin creating the STL file that you’ll use in the next step.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.20.55-AM.png" target="_blank"> <img alt="Markers found! If something is wrong \(no markers, too many markers\)
you'll see an error here" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/Screen-Shot-2013-03-09-at-9.20.55-AM-300x220.png"/>
</a> Markers found! If something is wrong (no
markers, too many markers) you’ll see an error here</p>
<p>Now if you look at the contents of this directory you’ll see a file with the
name you supplied and an extension of .stl; in our case this file is named
daisy1.stl</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.21.01-AM.png" target="_blank"> <img alt="minecraft.print\(\) output" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/Screen-Shot-2013-03-09-at-9.21.01-AM-300x220.png"/>
</a></p>
<p><strong>Step 4: Verification (make sure you got what you want)</strong></p>
<p>Now that we have an STL file let’s make sure we got what we expected.  For
this step you’ll need a way to view the STL file; on OSX I use <a href="http://www.pleasantsoftware.com/developer/pleasant3d/index.shtml" target="_blank"> Pleasant 3D
</a> for this
purpose.  There are many other programs you can use for this, but I’ll leave <a href="http://www.google.com/#hl=en&amp;sugexp=les%3B&amp;gs_rn=5&amp;gs_ri
=psy-ab&amp;qe=c3RsIHZp&amp;qesig=TY5JMjLImA8fcbb-
57sUEg&amp;pkc=AFgZ2tn4c_hH9uQWgQGNiPvqw0vx8kaZWpDcNaqvA0bAPdbLN4IMEZ6VfBUAh2qTy3sNTK3Hsnusx2j0QqGk7hnGJDwkCdxPug&amp;cp=6&amp;gs_id=z&amp;xhr=t&amp;q=stl+viewer&amp;es_nrs=true&amp;pf=p&amp;safe=off&amp;sclient
=psy-
ab&amp;oq=stl+vi&amp;gs_l=&amp;pbx=1&amp;bav=on.2,or.r_cp.r_qf.&amp;bvm=bv.43287494,d.aWM&amp;fp=2309a8fc28997e73&amp;biw=1152&amp;bih=960" target="_blank">
Google to help you </a>
with that process.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.23.40-AM.png" target="_blank"> <img alt="Note the missing blocks in the base, this isn't what I want so time to try
again!" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03
/Screen-Shot-2013-03-09-at-9.23.40-AM-300x258.png"/>
</a> Note the missing blocks in the base, this
isn’t what I want so time to try again!</p>
<p>Once you have a way to view the file, take a look at what you have and make
sure that it’s what you’re expecting.  In our case there are some gaps at the
base that were captured because our first marking stack was too low, so we
moved that stack and re-exported the model.  You may find that corners are
getting cut, or perhaps the top of your model is missing (or maybe some
unexpected animal has wandered into the scene), etc. so this is a good step to
make sure you’re only taking what you want into the next step.</p>
<p><strong>Step 5: Slice</strong></p>
<p><em>If you’ve used a 3d printer before the next two steps will seem familiar.  If
you plan to have someone else print your model you can skip these steps but I
include them for completeness and for readers who don’t have experience with
3d printing but want to know more.</em></p>
<p>Once you know you’ve got what you want in an STL file the next step to
printing it is called “Slicing”, where a slicer program is used to turn the
STL file into code (specifically, Gcode) that the printer can understand.
There are a lot of options at this step, and there are several pieces of
software avaliable to slice your model but the key thing to be aware of
regardless of what software you use is the scale of the model.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.32.14-AM.png" target="_blank"> <img alt="I prefer Slic3r, but use what you like
best" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.32.14-AM-300x200.png"/>
</a> I prefer Slic3r, but use what you like best</p>
<p>The STL file that comes out of Minecraft is probably going to be very small,
much smaller than the build capacity of even the smallest printers
(100x100x100mm).  When you open the STL in your slicing software you’ll notice
this.</p>
<p>You can print the model this small if your printer is up to the task, but I
recommend increasing the size at least 200%, and in our case we went up to
400% and achieved good results.  At 400%, the smallest surface you can create
in Minecraft (a single block) is still big enough for the printer to print
safely and sturdy enough to stand on its own and hold weight.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03/Screen-
Shot-2013-03-09-at-9.32.51-AM.png" target="_blank"> <img alt="400% seems about right, but
experiment" src="http://www.gullicksonlaboratories.com/wp-content/uploads/2013/03
/Screen-Shot-2013-03-09-at-9.32.51-AM-300x141.png"/>
</a> 400% seems about right, but experiment</p>
<p>Once the model is scaled adequitly export the gcode and you’re ready to print!</p>
<p><strong>Step 6: Printing</strong></p>
<p>This step (like slicing) will vary greatly depending on your printer and the
software you use to operate it.  Lately I’ve been favoring a piece of software
called <a href="https://github.com/foosel/OctoPrint" target="_blank"> Octoprint </a> , which makes this
process very simple and also makes it easy to monitor the job (and record it
as you’ll see shortly).</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_0029.png" target="_blank"> <img alt="Monitoring the print job using
Octoprint" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_0029-300x225.png"/>
</a> Monitoring the print job using Octoprint</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_0035.jpg" target="_blank"> <img alt="Four legs, good start so far!" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_0035-300x224.jpg"/>
</a> Four legs, good start so far!</p>
<p>Regardless of your software, this step consists of preparing the printer,
uploading the Gcode file created in the previous step and starting the print
job.  Depending on the size and complexity of the model and the speed of your
printer, the printing step can take from 15 minutes to several hours.  In the
case of our example it took about 1.5 hours to complete the print job, but
this video makes it look much faster:</p>
<p><a href="http://www.youtube.com/watch?v=HbNt9hUaqv4" target="_blank">http://www.youtube.com/watch?v=HbNt9hUaqv4</a></p>
<p><strong>Step 7: Clean-up</strong></p>
<p>After carefully removing the print from the printer you may need to clean up
around the edges.  As those of you familiar with 3d printing may have noticed
early on, there are elements to this example model that are particularilly
challenging to extrusion-type printers.  I expected more problems due to this
but in the end the model turned out better than expected.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_20130309_131414_797.jpg" target="_blank"> <img alt="clean-up 1" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_20130309_131414_797-300x225.jpg"/>
</a></p>
<p>It’s possible to try to take the printers limitations into consideration while
designing the model, and there are “validation” tools that will examine the
STL file and try to identify parts of the model that will be hard to print,
but my opinion in this case is that trial-and-error is a valid way of
discovering these limitations.  In an educational environment, lessons learned
this way tend to stick with the learner longer, and require less repetition
that trying to ingrain this knowledge before or without experience.
Additionally, trying to keep all these rules in mind tends to squelch the
creative process, and often times the greatest creations come out of bypassing
rules or accidentially creating something new when the results are not what
was expected.</p>
<p><a href="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_20130309_131639_971.jpg" target="_blank"> <img alt="clean-up 2" src="http://www.gullicksonlaboratories.com/wp-
content/uploads/2013/03/IMG_20130309_131639_971-300x225.jpg"/>
</a> The final output, before
clean-up</p>
<p>This is one of the greatest strengths of software development, and with the
advent of inexpensive 3d printing it can now be used for the creation of
physical objects as well; the capability to rapidly “iterate” over a design
from that initial creative spark through realization, testing, refinement and
then re-engineering until a desired (or greater) outcome is observed.</p>
<p>What’s Next?</p>
<p>This is neat and all, but I really want to make it possible to do the entire
process from inside of the game.  I need to work on my Minecraft hacking
skills first, but the goal is to allow a player to create an object, mark it
and the press a button inside the game to kick-off a completely automated
export-slice-print process.</p>
<p>I’ll keep you updated :)</p>
</div>
