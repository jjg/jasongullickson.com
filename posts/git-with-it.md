---
title: 'Git with it'
date: '2021-05-26T19:49:55'
author: mr
draft: false
tags:
  - preposterous
---
I've been reading [ The Git Book ](https://git-scm.com/book) (among other
things) while once again planning my move away from Github and I've come to
realize that the way I've been looking at this is all wrong.

  

The way that I've been looking at setting-up my own source control systems
inherits from the model pushed by services like Github, Gitlab, etc., but it's
not how Git was designed. The idea of a central repository that is shared by a
number of contributors is [ one pattern that Git supports, ](https://git-
scm.com/book/en/v2/Distributed-Git-Distributed-Workflows) and it's a
comfortable pattern for programmers (like myself) who come from centralized
version control systems, but Git can do so much more.

  

There's a lot of talk about how being a distributed version control system is
what makes Git better than what came before, but I don't know many people who
actually use Git this way. In fact most popular wisdom for using git (" [
gitflows ](https://www.atlassian.com/git/tutorials/comparing-
workflows/gitflow-workflow) ") advocate usage patterns which are in step with
the centralized way of working. The only thing that seems to remain of Gits
distributed nature on these services is the idea of "forking", touted as what
made Github unique, is in reality just one of the prescribed ways of using
Gits decentralized nature.

  

So I'm going to throw-out all of my designs for self-hosted source control
architecture in favor of embracing a pattern straight out of the book. I'm
going to treat my own workstation as a first-class node in a distributed
version control system and work local-first. When a project reaches a level of
maturity that warrants sharing, I'll add whoever I'm collaborating with as a
remote and we'll collaborate the way Git intended. When a

project is ready to share with the public, I'll add a public repository server
as another remote.

  

This means that a lot of the kinds of projects I've created in public
repositories in the past will likely never leave my laptop. That's OK. Part of
what's been intimidating about bringing all this back under my own control has
been the [ sheer number of public repositories
](https://github.com/jjg?tab=repositories) I have to manage. If I was only
sharing repositories which contained work that was needed by others, or that
was involved in collaboration I would have far fewer repositories to worry
about keeping up-to-date.

  

By treating each workstation with the significance of a server, the system
becomes distributed organically.

