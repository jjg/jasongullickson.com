---
title: 'NextBook isnt simply trading one cloud for another'
date: '2019-10-14T09:00:00'
author: mr
draft: false
tags:
  - preposterous
---
I talk about [ NextBook ](https://codeberg.org/jjg/nextbook) as having all the
good things about Chromebooks without Google, but isn't that just trading one
untrustworthy cloud company for another?

The NextBook uses [ Nextcloud ](https://nextcloud.com/) in place of Google.
Unlike Google's services, Nextcloud is [ open-source
](https://github.com/nextcloud/nextcloud.com/blob/master/LICENSE) , so you can
run it on your own servers, giving you complete control over your data. This
is the default explanation as to why open-source software is more privacy-
conscious than closed or proprietary software. But it glosses-over some
important details, and in this case it's the fact that procuring, configuring
and maintaining a complex piece of server software limits accessibility to
these protections. This is doubly true for a device like the NextBook, whose
audience is, almost by definition, people who want to spend less time
configuring and maintaining computers.

So how to reconcile this conflict? I've thought about this a lot as part of
this project and I've come up with a solution that I think meets the need and
at the same time provides a way to make the project financially sustainable.

NextBook users will be given three options when setting-up or signing-on to a
new NextBook:

  1. Use the project's Nextcloud instance 
  2. Automatically deploy a new private Nextcloud instance 
  3. Use an existing Nextcloud instance 

The first option is the easiest and as such will be the default. As part of
the project, a Nextcloud instance will be maintained for NextBook users
providing a basic level of service for free, and the ability to purchase
additional service (more storage space, etc.) for a fee. This makes it easy to
get started with NextBook quickly without any commitment and still provides
significantly more privacy than a Chromebook.

For more privacy-conscious users the second option makes it as easy as
possible to use a Nextcloud instance that the user has complete control over.
To do this we automate the process of provisioning a server, installing the
software and configuring automatic maintenance. The user can choose from a
number of hosting companies and plans that have been tested to work with the
automatic deployment process, and the project will work with these companies
to offer financial support to the project in return for these new customers.
While the first option will initially be more popular, I think, over time,
that this second option may become more common, especially for groups of users
who collect naturally and have an existing trust relationship (not unlike how
the cost of [ federated social network
](https://en.wikipedia.org/wiki/Mastodon_\(software\)) instances are shared by
trusted, like-minded individuals).

The third option simply allows the user to select and log-on to an existing
Nextcloud server of their choice. For existing Nextcloud users this make using
a NextBook seamless and avoids the need for creating an additional account.
Since some NextBook features are exposed through additional Nextcloud apps
that are installed by default when selecting the first two options, we'll need
to provide a convenient way for existing Nextcloud users to install these
applications when they log-on to an existing account using a NextBook for the
first time. This option could also be used by new users attaching to Nextcloud
instances provisioned by users who select option number two.

While the third option provides no "path to sustainability", the first two do.
Given the target audience for the NextBook, I believe that the first two
options will be more popular, and while free accounts on the project-provided
instance will likely be the most common, a combination of reoccurring revenue
from users purchasing additional capacity along with referral or other revenue
from hosting partnerships could be cultivated to provide project-sustaining
income. Of course it goes without saying that these financial aspects need to
be carried-out in a way that is compatible with the privacy-focused nature of
the project, so there may be details to sort-out to make these viable, if
suitable at all.

In addition to providing users with these options there will be a need to make
migration from one choice to the other painless, and provide a user interface
to these options that is easy for users with no familiarity with hosting, etc.
to make a choice they are comfortable with.

There is also a forth option that I'm not sure about at this point:
provisioning a _local_ Nextcloud instance. The use-case for this option is to
provide an off-grid option, so that a NextBook could be used with no Internet
connection, and no data shared outside of the NextBook itself. I'm not certain
that this is something that would be of use to users who would find the
NextBook attractive, and I haven't thought it through enough to know for sure
if it could even work correctly. That said, I'll be keeping this mode in mind
during the development process to avoid making it impossible, and even if it's
not presented as a default/automatic option, it's something I might provide
some support for if only for developers, etc.

  

\- Jason

