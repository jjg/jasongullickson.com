---
title: "Human-readable blog names"
date: "2013-12-25"
---

<div class="content">
<p>For those of you who find names like “098dbd12ffcc1e87bf166d68e02cb51e” hard
to remember, we’ve added a little feature that will give your blog a slightly
easier to memorize name.  These names cannot be changed (if you’d like a
technical explanation as to why, read on below), but at some point in the
future we’ll offer personalized blog URL’s via support for custom domains.</p>
<p>In the meantime, every Preposterous blog gets an awesome machine-generated
human-readable name, enjoy!</p>
<p>The reason this name can’t be changed is that it is actually derived from the
email address  associated with the blog (don’t worry, it can’t be reverse-
engineered in any practical sense).</p>
<p>As you know, Preposterous blogs are tied to the email address that you use to
submit posts.  Since displaying your email address to the world is not the
nicest thing to do, we generate a <a href="http://en.wikipedia.org/wiki/Cryptographic_hash_function" target="_blank"> hash
</a> of your email
address and use that as the publicly-visible address for your blog.  This
works great, but these hashes are hardly memorable, so we use <a href="https://github.com/zacharyvoase/humanhash" target="_blank"> another
algorithm </a> that takes the hash for
input and generates (more) human-readable names.</p>
<p>Since these names are ultimately derived from your email address, they can’t
be altered “at will”, and the only practical way to change them is to change
the email address used for the blog.  As mentioned above, down the road we
plan to offer a “custom domain” option that will let users point their own
domain name at a Preposterous blog which will bypass these generated names
altogether.</p>
</div>
