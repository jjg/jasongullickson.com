---
title: "Preposterous on the Raspberry Pi"
date: "2013-12-19"
---

<div class="content">
<p>Not that it should be a surprise, but <a href="https://github.com/jjg/preposterous" target="_blank"> Preposterous
</a> runs great on the <a href="http://www.raspberrypi.org" target="_blank"> Raspberry Pi
</a> .  Since it doesn’t need a database or web
application server, the memory-constrained environment of the Raspberry Pi
doesn’t hold back Preposterous’s performance at all.</p>
<p>At some scale, the throughput of the USB-based network interface would
probably begin to slow things down, or perhaps the speed at which files on the
SD card can be accessed, but “seat of the pants” performance seems almost on-
par with remote servers (i.e., across a Internet link), even for audio or
video.</p>
<p>If you want to try this yourself, the setup is very straightforward and the
standard Raspian distro includes everything you’ll need to get started using
the steps below:</p>
<p><strong>Create email box to receive posts</strong></p>
<p>This can be a simple free gmail account, or any other service that provides
IMAP access.</p>
<p><strong>Clone the github repo</strong></p>
<p>Issue the command below anywhere you like (probably easiest to do in your home
directory if you don’t have something else in mind):</p>
<p>git clone <a href="https://github.com/jjg/preposterous.git" target="_blank"> https://github.com/jjg/preposterous.git
</a></p>
<p><strong>Create the web root</strong></p>
<p>This is a folder where the blog files will be stored.  If you don’t already
have a webserver installed, this can go anywhere (the easiest place to get
started is to create a directory inside the Preposterous directory you made in
the previous step):</p>
<p>cd preposterous</p>
<p>mkdir blogs</p>
<p><strong>Copy the config</strong></p>
<p>Copy the preposterous.cfg.template file to preposterous.cfg:</p>
<p>cp preposterous.cfg.template preposterous.cfg</p>
<p><strong>Edit the config</strong></p>
<p>Open preposterous.cfg in your favorite editor and fill in the blanks.  Here’s
a brief description of each parameter:</p>
<p><strong>imap_server:</strong> _address of imap server, for gmail it’s<a href="http://imap.gmail.com" target="_blank"> imap.gmail.com
</a> _</p>
<p><strong>smtp_server:</strong> _address of smtp server, for gmail use<a href="http://smtp.gmail.com" target="_blank"> smtp.gmail.com
</a> _</p>
<p><strong>smtp_port:</strong> <em>smtp server port, for gmail use 587</em></p>
<p><strong>email_address:</strong> <em>email address the server will use to receive posts</em></p>
<p><strong>email_password:</strong> <em>password for above email address</em></p>
<p><strong>web_hostname:</strong> <em>name of this device, either a DNS name or IP address</em></p>
<p><strong>web_filesystem_root:</strong> <em>path to where blog files should be stored</em></p>
<p>For example, here’s what the config looks like on my test Pi:</p>
<p>[mailserver]</p>
<p>imap_server: <a href="http://imap.gmail.com" target="_blank"> imap.gmail.com </a></p>
<p>smtp_server: <a href="http://smtp.gmail.com" target="_blank"> smtp.gmail.com </a></p>
<p>smtp_port: 587</p>
<p>email_address: <a href="mailto:preposterous1984@gmail.com" target="_blank"> preposterous1984@gmail.com
</a></p>
<p>email_password: mysupersecretpassword</p>
<p>[webserver]</p>
<p>web_hostname: <a href="http://10.0.1.85:5000" target="_blank"> 10.0.1.85:5000 </a></p>
<p>web_filesystem_root: ./blogs</p>
<p><strong>Initialize the site</strong></p>
<p>Send a test post to the email address you created above and then run the
following command inside the Preposterous directory:</p>
<p>./preposterous.py</p>
<p>After a few minutes you should get back your prompt and you can move on to the
next step.  If you receive any errors, double-check your configuration file,
and if things still don’t work, let us know.  You should also receive an email
back from the server that includes a link to your new blog’s index, and a
second message linking to the post itself.  Of course these links won’t work
until you have a running webserver…</p>
<p><strong>Run the web server</strong></p>
<p>For testing, we can use Python’s built-in web server (and for most things Pi-
related, it’s probably sufficient).  Run the following command inside the “web
root” folder you specified in the config:</p>
<p>python -m SimpleHTTPServer</p>
<p>Now point a browser at the IP address of your Raspberry Pi and include the
port of the SimpleHTTPServer (by default this is port 8000).  The URL should
look something like this:</p>
<p><a href="http://10.0.1.25:8000/" target="_blank"> http://10.0.1.25:8000/ </a></p>
<p>With any luck you’ll be greeted with the Preposterous server index page and a
link to the blog you created by sending that initial email.</p>
<p>To make the server operate in an ongoing fashion, you’ll need to create a cron
task to run <a href="http://preposterous.py/" target="_blank"> preposterous.py </a> on a scheduled basis.
To do this issue the following command:</p>
<p>crontab -e</p>
<p>This will open the crontab file for the current user in the system’s default
editor.  At the bottom of the file, add a line like this to check for new
posts every five minutes:</p>
<p>*/5 * * * * cd /home/jason/preposterous; /usr/bin/python /home/jason/preposterous/preposterous.py</p>
<p><em>Note: be sure to replace “jason” with the name of your home directory (or
replace the entire path if you choose to install Preposterous elsewhere).</em></p>
<p>You’ll probably also want to configure the web server to run all the time (or
select another web server that runs automatically).  To run the built-in
Python server at boot, edit the file /etc/rc.local and add a line like the one
below to the end of the file:</p>
<p>cd /home/jason/preposterous/blogs; /usr/bin/python -m SimpleHTTPServer</p>
<p><em>Note: again, adjust the path accordingly..</em></p>
<p>This should get you up-and-running with your own Preposterous server on your
Raspberry Pi.  Updating to new versions of Preposterous is very easy using the
git pull  command in the preposterous directory.  After pulling a new build,
it may be necessary to “rebuild” the html files generated by Preposterous to
get the latest features.  To do this, first delete the existing files in your
“web root” directory, then run the following command in the Preposterous
directory:</p>
<p>./preposterous.py rebuild</p>
<p>This will regenerate all posts using the contents of the server’s inbox, and
will suppress notification during the rebuild process (otherwise everyone who
posted messages to the server would receive an email for every post they ever
sent).  Once this is complete the server is upgraded!</p>
<p>Have fun with your shiny new Preposterous server and if you do anything cool
(or run into any trouble) let us know by posting an <a href="https://github.com/jjg/preposterous/issues?state=open" target="_blank"> Issue to github
</a> or dropping us a line
on Twitter <a href="https://twitter.com/preposterous_me" target="_blank"> @preposterous_me </a> .</p>
<p>- Jason</p>
</div>
