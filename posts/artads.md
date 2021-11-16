---
title: 'ArtAds'
date: '2021-05-31T14:13:11'
author: mr
draft: false
tags:
  - preposterous
---
**Motivation**

The primary objective of this system is to create new ways for artists to make
a living doing more of what they do best (art) and less of everything else.
Mixing business into art has a well established history of ruining the art,
and my goal is to use technology to prevent that.

  

![](/assets/130-image0.jpeg)  

  

The secondary goal is to make the web a more beautiful place, and provide
writers and curators a way to support their work without resorting to
polluting their websites with noxious images and experiences.

  

**Overview**  

Artists list one-of-a-kind, physical pieces of art for sale and upload a high-
quality image for each piece. Website publishers (bloggers, etc.) embed these
images into their sites, posts, etc. instead of regular advertising. Visitors
to each website can click on the images and purchase the piece. A portion of
the purchase goes to the website publisher, a portion goes to ArtAds and the
bulk of the purchase price goes to the artist.

  

Once a piece is purchased, the image is removed from the website and replaced
with another piece.

  

Not only does this remove the need for unpredictable and often ugly, intrusive
advertising from websites, it also provides a convenient way for publishers to
add visually interesting images to their content when relevant images are not
appropriate or available (this was very common in the early days of blogging,
to include photos of dogs, landscapes, etc. to keep a text-heavy post visually
interesting).  

  

![](/assets/130-image1.jpeg)  

  

**Technical Implementation**  

I think the technical implementation can be very simple, at least initially. A
website where artists can sign-up, add pieces (name, price, photo, perhaps
more info), manage inventory (shipping updates, etc.) and provide payment
information (probably processed via Stripe, PayPal, etc.). Another website
(perhaps the same as above, but not if it’s confusing) where publishers can
create an account to generate image tags, download/install plugins for popular
blogging/website platforms and provide payment information for their portion
of a sale.

  

These could be implemented using any common “tech stack” but I think it’s
important that the interfaces are built on top of a standard API (or ideally,
a public protocol) so that the system is easy to adapt and consume for
unanticipated applications.

  

**Notes**

There are of course a million details that could be added or addressed, but I
think it’s important to build something very basic first to take measurements
in the field and see if it works as expected. There’s a number of potential
“knobs to turn” to see what would make the system perform best for all parties
involved (creator, curator, consumer) and I want to avoid jumping to any
conclusions or adding any complexity without first having some empirical data
for guidance.

  

  

