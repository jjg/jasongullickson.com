---
title: "Pipeline"
date: "1990-01-01"
---

<div class="content">
<p><strong>TL;DR</strong></p>
<p>Pipeline tells you exactly and only what you need to do next.</p>
<p><strong>Background</strong></p>
<p>I’ve been working on systems to keep track of what I’m doing and what I’ve
done since the time it was important to others that I do anything (before that
I just blundered around doing whatever came to mind).  Over the years I’ve
developed a number of manual, automatic, physical and electronic systems, each
one a refinement of the previous.  During this time I’ve learned a lot of
about what works and what doesn’t (at least for me) and based on my experience
working with other people and systems, I think that I’m not alone in this
quest for such a system.</p>
<p>The latest incarnation of this is something I call “Pipeline”, and it’s
currently in the design phase.  Simply put, at any given time Pipeline
presents you with the thing you need to work on next, allowing you to focus on
only two things at a time:</p>
<ol>
<li><p>What you are doing now</p></li>
<li><p>What you are doing next</p></li>
</ol>
<p>There’s two specific advantages to this myopic approach.  The first is that
there is zero ambiguity about what to do at any given time; as soon as you
finish what you’re doing, you consult Pipeline and it tells you exactly what
to do next.</p>
<p>The second is that there is almost no cognitive overhead associated with
thinking about anything other than the task at hand.  Worst-case you’re
distracted by thinking about the next task (if this becomes a problem Pipeline
could even hide that task until you’ve committed completion of the current
one, nut my experience leads me to exposing the next task whenever the system
is consulted).  What this prevents is meta-thought about the prioritization of
all tasks, and a form of premature optimization that can be crippling (and is
rarely beneficial).</p>
<p><strong>Where do tasks come from?</strong></p>
<p>The “next” task is drawn from a (if you’re like me, bottomless) pool of tasks
that are populated ad-hoc by you or anyone else you trust.  Pipeline’s job is
to handle prioritizing these tasks based on any source of information it can
draw from.  I’m not ready to go into detail about this part yet, but suffice
to say it’s intentionally simple, and leans heavily on a negative feedback
loop, like all good cybernetic systems.</p>
<p><strong>What if I can’t do the next task?</strong></p>
<p>Sometimes Pipeline will pick a task you can’t (or don’t want to) do right now.
In those cases you simply “decline” the task, and it’s returned to the pool.
Declines are recorded, along with any information about the context of the
decline that are available and this negative feedback is used to influence the
prioritization of all tasks.  Pipeline doesn’t allow of infinite
procrastination though, and at some point you’ll be forced to accept a task or
it will just keep coming back*.</p>
<p>Status</p>
<p>As mentioned earlier, Pipeline is the latest incarnation of a system I’ve been
developing and building for decades, and will continue to evolve over time.  I
do have an implementation in mind for this specific iteration of the idea, but
not a specific implementation timeline.  That said, if you’re interested in
helping out <a href="http://twitter.com/jasonatmurfie" target="_blank"> tweet me </a> and we can talk
about some of the implementation-level details I have in mind and maybe write
a little code.</p>
<p>- Jason</p>
</div>
