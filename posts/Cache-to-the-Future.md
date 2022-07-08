---
title: "Cache to the Future"
date: "2012-12-31"
---

<div class="content">
<p><strong>Proposal:</strong> Use macroscopic branch prediction to cache data before it’s ever
requested.</p>
<p><a href="http://en.wikipedia.org/wiki/Pipelined_CPU" target="_blank"> Pipelined microprocessor architectures
</a> use a technique called “ <a href="http://en.wikipedia.org/wiki/Branch_prediction" target="_blank">
Branch Prediction </a> “ to keep
their pipelines full of instructions; without this it would be necessary to
load the instructions from memory one at a time, rendering the pipeline mostly
useless.</p>
<p><a href="http://en.wikipedia.org/wiki/Instruction_pipeline#Illustrated_example" target="_blank">
<img alt="" src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pipeline,_4_stage.svg
/375px-Pipeline,_4_stage.svg.png"/>
</a>
Generic 4-stage pipeline</p>
<p>A pipeline is something like a cache, in that it improves performance by
storing instructions in fast, on-chip memory instead of having to load them
one-at-a-time from slower system memory. This works fine when the processor is
executing instructions one after another, but when a branch is encountered (a
piece of code that can go one of two ways, like an “if” statement in a
programming language) the only way to keep filling the pipeline is to predict
which way the branch will go and pre-load the instructions predicted to be
selected.</p>
<p><a href="http://en.wikipedia.org/wiki/Branch_prediction#Saturating_counter" target="_blank"> <img alt="" src="http://upload.wikimedia.org/wikipedia/commons/c/c8
/Branch_prediction_2bit_saturating_counter-dia.svg"/>
</a> 2-bit
saturating counter</p>
<p>When the prediction is correct, it means the next instruction executes from
the pipeline at the highest possible speed.  When it is incorrect, the next
instruction is loaded from slow system memory, but this is no worse than what
would have been if no prediction were made at all.</p>
<p>So it’s clear that at least trying to predict the outcome of a branch is
worthwhile, but what does this have to do with caching, since caches contain
data that has already been loaded?</p>
<p>What I’m proposing is to apply the model and logic of branch prediction
techniques to higher levels of programming, and to use these techniques to
select the outcome of user decisions <em>before the user selects them</em> for the
purpose of loading data into a cache, resulting in increased response time the
first time the data is requested.  I’m hoping to carry out some experiments to
determine the value of this technique in the next few weeks, I’ll update this
post when I have some results to report.</p>
</div>
