---
title: "Unhosted Twitter built on RemoteStorage"
date: "2015-08-06"
---

<div class="content">
<p>These are some notes on a Twitter-like microblogging service built on top of <a href="https://remotestorage.io/" target="_blank">
RemoteStorage </a> .  Besides duplicating Twitter
functionality on a distributed platform, this also allows the control and
ownership of content that RemoteStorage applications provide.</p>
<p>The first time someone uses it, the app (a simple HTML page + Javascript)
creates a directory under  /public  that stores status updates (  There may
even be an existing Category that is appropriate)  perhaps under
/public/status  .  Additionally, there is another, private, object stored that
holds a list of people you follow.</p>
<p>After initial setup the app polls all the  /public/status  directories of all
the people in the “following” list (perhaps within a certain timeframe) and
merges them into a timeline for display purposes.</p>
<p>Mentions could work just like Twitter by mentioning the full RS (webfinger?)
name of someone (ie jjg@5apps.com).</p>
<p>Discovery of other users is a bit trickier (following requires knowledge of
other users public address).  This may not necessarily be an issue though
since intrinsic discovery mechanisms (especially the semi-forced kind) are one
of the downsides of Twitter as far as I’m concerned.</p>
<p>--</p>
<p>// jjg</p>
<p><a href="http://jjg.preposter.us/" target="_blank"> Preposter.us </a> | <a href="https://github.com/jjg" target="_blank"> Github
</a> | <a href="https://twitter.com/jasonbot2000" target="_blank"> Twitter </a> | <a href="https://ello.co/jasonbot" target="_blank">
Ello </a> | <a href="https://plus.google.com/u/0/+JasonGullickson/posts" target="_blank"> Google+
</a> | <a href="https://www.facebook.com/jasonjgullickson" target="_blank"> Facebook
</a></p>
</div>
