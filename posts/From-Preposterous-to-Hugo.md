---
title: "From Preposterous to Hugo"
date: "2018-12-27"
---

<div class="content">
<p>Migrating content from <a href="https://gitlab.com/jgullickson/preposter.us" target="_blank">Preposterous</a> to Hugo was easier than I expected.  You might think that since I created Preposterous I’d expect it to be easy, but it’s been years since I looked at the code and since I never intended to make the content exportable, I thought it would be more complicated.</p>
<p>As it turns out I did myself a huge favor and used JSON files to store the content and rendered the HTML client-side when each post was loaded!</p>
<p>I also made things easier by creating a JSON index for each blog, which was good because I didn’t capture things like the post date in the individual post files (duh!).</p>
<p>After poking-around a bit I was able to write a little Python script that did most of the migrating automatically:</p>
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="kn">import</span> <span class="nn">json</span>
<span class="kn">from</span> <span class="nn">bs4</span> <span class="kn">import</span> <span class="n">BeautifulSoup</span>
<span class="kn">import</span> <span class="nn">html2text</span>
<span class="kn">import</span> <span class="nn">codecs</span>

<span class="c1"># open the posts file</span>
<span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="s1">'./input/posts.json'</span><span class="p">)</span> <span class="k">as</span> <span class="n">posts_file</span><span class="p">:</span>
    
    <span class="c1"># convert post index json to python dictionary</span>
    <span class="n">posts_data</span> <span class="o">=</span> <span class="n">json</span><span class="o">.</span><span class="n">load</span><span class="p">(</span><span class="n">posts_file</span><span class="p">)</span>
    
    <span class="c1"># loop through all posts</span>
    <span class="k">for</span> <span class="n">post</span> <span class="ow">in</span> <span class="n">posts_data</span><span class="p">[</span><span class="s1">'posts'</span><span class="p">]:</span>
        <span class="n">selected_post</span> <span class="o">=</span> <span class="n">post</span><span class="p">[</span><span class="s1">'post'</span><span class="p">]</span>
        
        <span class="c1"># DEBUG: limit to one post for image testing</span>
        <span class="c1">#if selected_post['slug'] == 'scaled-image-test':</span>

        <span class="c1"># translate to Hugo metadata</span>
        <span class="c1"># preposterous post properties:</span>
        <span class="c1"># * date</span>
        <span class="c1"># * url</span>
        <span class="c1"># * title</span>
        <span class="c1"># * slug</span>
        <span class="c1"># * author</span>

        <span class="n">output</span> <span class="o">=</span> <span class="s1">'---</span><span class="se">\n</span><span class="s1">'</span>
        <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="s1">'title: '</span> <span class="o">+</span> <span class="n">selected_post</span><span class="p">[</span><span class="s1">'title'</span><span class="p">]</span> <span class="o">+</span> <span class="s1">'</span><span class="se">\n</span><span class="s1">'</span>
        <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="s1">'date: '</span> <span class="o">+</span> <span class="n">selected_post</span><span class="p">[</span><span class="s1">'date'</span><span class="p">]</span> <span class="o">+</span> <span class="s1">'</span><span class="se">\n</span><span class="s1">'</span>
        <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="s1">'author: '</span> <span class="o">+</span> <span class="n">selected_post</span><span class="p">[</span><span class="s1">'author'</span><span class="p">]</span> <span class="o">+</span> <span class="s1">'</span><span class="se">\n</span><span class="s1">'</span>
        <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="s1">'draft: false</span><span class="se">\n</span><span class="s1">'</span>
        <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="s1">'tags:</span><span class="se">\n</span><span class="s1">'</span>
        <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="s1">'  - preposterous</span><span class="se">\n</span><span class="s1">'</span>
        <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="s1">'---</span><span class="se">\n</span><span class="s1">'</span>

        <span class="c1"># load refereneced HTML file</span>
        <span class="n">post_html_filename</span> <span class="o">=</span> <span class="s1">'./input/'</span> <span class="o">+</span> <span class="n">selected_post</span><span class="p">[</span><span class="s1">'url'</span><span class="p">]</span><span class="o">.</span><span class="n">split</span><span class="p">(</span><span class="s1">'/'</span><span class="p">)[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>

        <span class="c1"># parse HTML into python object</span>
        <span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="n">post_html_filename</span><span class="p">)</span> <span class="k">as</span> <span class="n">post_html_data</span><span class="p">:</span>
            <span class="n">post_html</span> <span class="o">=</span> <span class="n">BeautifulSoup</span><span class="p">(</span><span class="n">post_html_data</span><span class="p">,</span><span class="s2">"lxml"</span><span class="p">)</span>

            <span class="c1"># identify and copy images </span>
            <span class="n">image_tags</span> <span class="o">=</span> <span class="n">post_html</span><span class="o">.</span><span class="n">findAll</span><span class="p">(</span><span class="s1">'img'</span><span class="p">)</span>
            <span class="k">for</span> <span class="n">image_tag</span> <span class="ow">in</span> <span class="n">image_tags</span><span class="p">:</span>
                <span class="n">image_tag</span><span class="p">[</span><span class="s1">'src'</span><span class="p">]</span> <span class="o">=</span> <span class="s1">'/preposterous/'</span> <span class="o">+</span> <span class="n">image_tag</span><span class="p">[</span><span class="s1">'src'</span><span class="p">]</span>

            <span class="c1"># TODO: handle other assets (video, audio, etc.)</span>

            <span class="c1"># reformat as markdown</span>
            <span class="n">html</span> <span class="o">=</span> <span class="n">post_html</span><span class="o">.</span><span class="n">find</span><span class="p">(</span><span class="s1">'div'</span><span class="p">,</span> <span class="n">class_</span><span class="o">=</span><span class="s1">'content'</span><span class="p">)</span><span class="o">.</span><span class="n">prettify</span><span class="p">()</span>
            <span class="n">markdown</span> <span class="o">=</span> <span class="n">html2text</span><span class="o">.</span><span class="n">html2text</span><span class="p">(</span><span class="n">html</span><span class="p">)</span>

            <span class="n">output</span> <span class="o">=</span> <span class="n">output</span> <span class="o">+</span> <span class="n">markdown</span>

            <span class="k">print</span><span class="p">(</span><span class="s1">'---output-----------------------------------------'</span><span class="p">)</span>
            <span class="k">print</span><span class="p">(</span><span class="n">output</span><span class="p">)</span>
            <span class="k">print</span><span class="p">(</span><span class="s1">'--------------------------------------------------'</span><span class="p">)</span>

            <span class="c1"># write the result to a properly-named file</span>
            <span class="nb">file</span> <span class="o">=</span> <span class="n">codecs</span><span class="o">.</span><span class="nb">open</span><span class="p">(</span><span class="s1">'./output/'</span> <span class="o">+</span> <span class="n">selected_post</span><span class="p">[</span><span class="s1">'slug'</span><span class="p">]</span> <span class="o">+</span> <span class="s1">'.md'</span><span class="p">,</span> <span class="s1">'w'</span><span class="p">,</span> <span class="n">encoding</span><span class="o">=</span><span class="s1">'utf8'</span><span class="p">)</span>
            <span class="nb">file</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="n">output</span><span class="p">)</span>
            <span class="nb">file</span><span class="o">.</span><span class="n">close</span><span class="p">()</span></code></pre></div>
<p>There were a few posts whose titles didn’t format properly, but with a little manual massaging I was able to get Hugo to accept all of the content the script generated.  One problem I haven’t solved is that the date on some posts are mis-interpretted by Hugo as year <code>0001</code>.  I’m not sure why this is, and I’d like to fix it, but after looking at the output for an hour I gave up.  Maybe fresh eyes in the future will figure it out?</p>
</div>
