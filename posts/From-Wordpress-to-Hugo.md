---
title: "From Wordpress to Hugo"
date: "2018-12-27"
---

<div class="content">
<p>I couldn’t find a one-stop tool for migrating my existing WordPress.com blog to Hugo, so here’s what I did instead:</p>
<ul>
<li>Export the posts (XML) and media from WordPress (My Sites -&gt; Gullickson Laboratories -&gt; Settings -&gt; Export -&gt; Export your content/Export media library)</li>
<li>Use <a href="https://github.com/dreikanter/wp2md" target="_blank">wp2md</a> to convert XML to Markdown files</li>
<li>Use <a href="https://linux.die.net/man/1/sed" target="_blank">sed</a> to format metadata, re-work URL’s, etc.</li>
<li>Extract media from <code>.tar</code> archive and copy it into a subdirectory under <code>static</code></li>
</ul>
<p>Here’s the specific comamnds I used to transform the content.  If you use these you’ll need to modify some of the parameters to match your source blog info, destination paths, etc.</p>
<ol>
<li><code>wp2md -ef "%Y-%m-%d %H:%M:%S" -ps gl-{title}.md -d ./md-output/ your.wordpress.export.xml</code> (exports all content to the <code>md-output</code> directory, prepends each file with <code>gl-</code> and uses a date format that Hugo likes)</li>
<li><code>sed -i "1i ---" gl*</code> (marks the opening of the Hugo metadata section)</li>
<li><code>sed -i "13i ---" gl*</code> (marks the closing of the metadata section)</li>
<li><code>sed -i "2i tags:" gl*</code> (adds a tags section)</li>
<li><code>sed -i "3i\  - gullicksonlaboratories" gl*</code> (tags the content)</li>
<li><code>rpl "created:" "date:" gl*</code> (renames the created field to something Hugo understands)</li>
<li><code>rpl "https://jjg2soc.files.wordpress.com/" "/wp/" gl*</code> (updates media URL’s to use local files instead of the originals)</li>
<li><code>cp gl* /path/to/hugo/content/posts</code> (copies all exported content into the Hugo site)</li>
</ol>
<p>This doesn’t fix everything.  The most notable problem is that links to pages within the blog will still point to the original server.  Another issue (at least in my case) is that there is a header with the title of the post inserted into the Markdown (which results in the title being displayed twice on the rendered page).  I think both of these issues can be addressed with a little more tweaking but neither was bad enough to stop me from publishing the site as-is.</p>
<p>One last thing I’ll mention is that the WordPress XML file can contain some things that <code>wp2md</code> considers invalid (they may in fact contain invalid XML).  In my case the command fails and displays the offending line number, and it was just a matter of deleting the bad input from the XML file (mine were all messages related to failed attempts to share the post on Facebook).  Once these are cleaned-out the command should complete sucessfully.</p>
</div>
