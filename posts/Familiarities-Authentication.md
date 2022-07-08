---
title: "Familiarities Authentication"
date: "2012-05-23"
---

<div class="content">
<p>This document describes a replacement for passwords which uses knowledge of a
container’s contents to authenticate an agent’s requests.</p>
<p>Before we begin, a few terms:</p>
<p>A “container” is something which contains information. This information can
take the form of simple files, multimedia or more complex constructs (a
database, discussion forum, social network, etc.). The container itself is of
no particular value.</p>
<p>An “agent” is anything that can utilize what is inside of a container. This
could be a human user, an automated agent, an application accessing an API,
etc.</p>
<p>An Example:<br/>
An agent attempts to access a resource within the container. The container
first attempts to establish “familiarity” with the agent. Any properties of
the agent can be considered and compared to the containers previous
interaction logs to establish familiarity with the agent. The number of
property matches required to establish familiarity are determined by the level
of security requested by the contents of the container.</p>
<p>If familiarity fails to secure access, a conversation begins between the
container and the agent to establish the agent’s familiarity with the contents
of the container. Steps are taken to avoid disclosing sensitive contents, and
here again the number of “correct” answers required to authenticate is
determined by the level of security requested by the containers contents.</p>
<p>This discourse is truly conversational and perhaps uses something akin to a
clever Eliza engine to engage in a “natural language” conversation with the
agent to establish sufficient knowledge of content to verify authenticity.
Depending on the nature of the contents, other conversations may be possible
(perhaps recognition of a single still image of video, or knowledge of the
primary color of a photograph).</p>
<p>If authentication is successful, all available properties of the agent are
recorded in the container’s logs to be used later to establish familiarity and
avoid unnecessary authentication conversations.</p>
<p>The essential element to this approach is that the contents themselves define
the key, and therefore there is an automatic, natural relationship between the
key and the contents. This can be seen as similar to password systems which
require the establishment of “verification questions” for the purpose of
password retrieval, however the questions (and their answers) are tightly (and
automatically) bound to the contents of the container, not an abstract series
of generic questions and answers established by the original user of the
system.</p>
</div>
