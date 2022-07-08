---
title: "An Identity Co-op"
date: "2018-01-23"
---

<div class="content">
<h1 id="an-identity-co-op">An Identity Co-op</h1>
<p>A <a href="https://en.wikipedia.org/wiki/Cooperative" target="_blank">co-op</a> that operates an <a href="https://en.wikipedia.org/wiki/Identity_provider" target="_blank">identity provider</a> and advocates for the use of this provider by the services used by the co-op’s members.</p>
<h2 id="consumer-perspective">Consumer Perspective</h2>
<ul>
<li>One way to <a href="https://en.wikipedia.org/wiki/Login" target="_blank">sign-on</a> to all the sites you use (sometimes referred to as <a href="https://en.wikipedia.org/wiki/Single_sign-on" target="_blank">single sign-on</a>)</li>
<li>Member control over what personal information is collected by the co-op and what is shared with other services</li>
<li>The co-op works collectively with services used by it’s members to lobby for and support adoption of co-op sign-on</li>
<li>Members pay a membership fee which is used to cover operational and marketing costs (software development, hosting, training and promotion of the service to others)</li>
</ul>
<h2 id="technical-perspective">Technical Perspective</h2>
<ul>
<li>The co-op is an <a href="https://en.wikipedia.org/wiki/OpenID_Connect" target="_blank">OpenID Connect</a> Identity Provider (<a href="https://en.wikipedia.org/wiki/Identity_provider" target="_blank">IdP</a>) (potentially supporting other protocols as well)</li>
<li>All software is <a href="https://en.wikipedia.org/wiki/Open-source_model" target="_blank">open-source</a></li>
<li>Given the value of compromising the service, <a href="https://en.wikipedia.org/wiki/Multi-factor_authentication" target="_blank">multi-factor authentication</a> is required (other advanced authentication mechanisms will be considered)</li>
<li>Regular <a href="https://en.wikipedia.org/wiki/Penetration_test" target="_blank">penetration testing</a> is performed by a third-party</li>
</ul>
<h2 id="why-do-this">Why do this?</h2>
<p>There are a number of good reasons to consolidate identity, but first let’s define how we’re using the word identity in this article:</p>
<ul>
<li>A name or handle you can be referred to with</li>
<li>A set of credentials that you can provide to prove you are this identity
Potentially, there are additional things about you which could be valuable to associate with an identity:</li>
<li>A visual representation of yourself</li>
<li>Your reputation</li>
<li>Links to other resources</li>
<li><p>etc.
There are numerous existing systems which provide some of the features described above. There are also existing standards for interfacing between these identity providers and external systems. However, in almost all cases existing identity providers do so as a <em>secondary</em> service. This creates a number of problems:</p></li>
<li><p>If a user discards the primary service, their identity is discarded as well</p></li>
<li><p>Additional service features create additional security vulnerabilities</p></li>
<li><p>Identity is <em>derived</em> from the primary service and may include information that is irrelevant/unnecessary for external systems (in extreme cases this may constitute a security or privacy violation)</p></li>
<li><p>These services typically provide identity authentication as means of <a href="https://en.wikipedia.org/wiki/Vendor_lock-in" target="_blank">lock-in</a> to <em>reduce</em> user freedom, not to enhance it</p></li>
<li><p>These services typically do not actively advocate for adoption of their identity service by external or third-party systems</p></li>
<li><p>In many cases these services are proprietary, closed-source and often privately-owned, limiting the ability for their security and scalabilty to be thoroughly assessed and in most cases eliminating any control the user has over how their personal information is used
In contrast to this, the Identity Co-op provides a single service: identity authentication. As such all efforts are focused on providing the highest-quality identity authentication service possible. Control over the system is held by members of the Co-Op. All operational details are available to members and all source code is published openly. The information the co-op will collect from its members is decided by the members themselves and this information is used exclusively to provide value as an identity service. Additionally, this information is only shared with external systems and third-party organizations when necessary to authenticate an identity. As a co-op exists to serve it’s members and their community, the Identity Co-op not only provides the software and infrastructure to authenticate the identities of its members, but it also must advocate for the adoption of this service by the systems its members use. Additionally, co-ops have a responsibility to help other co-ops. The Identity Co-op is no different and will help create additional identity co-ops serving other communities. In this way the service can be distributed in the form of separate co-ops serving members with different needs while sharing knowledge, experience and tools. The utility of this identity may go beyond the applications discussed, but no assumptions are being made that this is the case nor is it necessary for the Identity co-op to be valuable.</p></li>
</ul>
<h2 id="references">References</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenAthens" target="_blank">https://en.wikipedia.org/wiki/OpenAthens</a></li>
<li><a href="https://oauth.net/articles/authentication/" target="_blank">https://oauth.net/articles/authentication/</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenID_Connect" target="_blank">https://en.wikipedia.org/wiki/OpenID_Connect</a></li>
<li><a href="https://coreos.com/blog/announcing-dex.html" target="_blank">https://coreos.com/blog/announcing-dex.html</a></li>
<li><a href="http://wiki.openid.net/w/page/12995226/Run%20your%20own%20identity%20server" target="_blank">http://wiki.openid.net/w/page/12995226/Run%20your%20own%20identity%20server</a></li>
<li><a href="https://tools.ietf.org/html/rfc6749#section-4.1" target="_blank">https://tools.ietf.org/html/rfc6749#section-4.1</a></li>
<li><a href="http://openid.net/connect/faq/" target="_blank">http://openid.net/connect/faq/</a></li>
</ul>
</div>
