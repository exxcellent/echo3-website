---
title: Browser Support
---

### Echo 3.1+

Echo 3.1+ targets modern, more standard-compliant browsers such as WebKit-based browsers (Google Chrome, Safari,
Opera 15+), Internet Explorer 8+, Firefox and recent Opera versions.

Beginning with Echo **3.1**, support for older browsers, especially Internet Explorer 7 and below is of low
priority and will eventually be dropped. This is done in order to speed up development since modern browsers 
usually require fewer individual workarounds for all kinds of rendering issues and have support for modern
HTML5 and CSS3 features such as WebSockets.

It is highly recommended to turn on IE-edge mode, i.e. force IE to use the latest rendering engine available.
This can be done by enabling `ServerConfiguration.IE_EDGE_MODE` for Java-based applications or by including the
HTML meta tag `<meta http-equiv="X-UA-Compatible" content="IE=edge" />` for JavaScript-based applications.
  
### Echo Stable 3.0.x
  
Echo 3.0.x aims to provide full support for all standards-compliant browsers
that support DOM2, CSS2.1, and JavaScript 1.5 / ECMAScript-262 v3 in addition to the Microsoft Internet
Explorer family of browsers for Windows, version 6 and higher.

**Supported browsers include Firefox, Internet Explorer (6 and higher), Safari, and Chrome.**

#### Gecko Browsers: Firefox, Mozilla, and Derivatives

Gecko-based browsers, including Firefox and Mozilla, are fully supported.  Versions 1.5, 2, 3, and 3.5 are
specifically targeted for compatibility. The 3.x versions of this browser have received some of the most
extensive testing.  Echo applications should run on all platforms supported by this browser, including but not
limited to Linux, Mac OS X, and Windows.

#### Microsoft Browsers

Microsoft has several browser platforms which are quite distinct from each other in terms of capability and
standards compliance.  Echo aims to support Internet Explorer 6, 7, 8, and all future versions of the Microsoft
browser platform.

The MSIE platform, even as of version 8, does not comply with many of the most fundamental DOM standards,
e.g., DOM events and text ranges.  As such, the Echo platform provides APIs to handle these tasks which will work
in both standards-based browsers and Internet Explorer.  These APIs favor use of DOM standards when possible,
reverting to the use of MSIE-specific API calls only when absolutely necessary.

#### Internet Explorer 6

Introduced in 2001, MSIE6 is the oldest browser supported by the Echo framework.  Though an incredible amount
of time and design work has been spent supporting this browser, we strongly recommend against its use.  That said,
many organizations require IE6 due to extensive investment in web applications which are incapable of running on
any other platform.  As such, Echo provides full support for this browser.

Special care should be taken to test applications with IE6 if you intend to deploy in this environment.
This is especially important if you are developing custom HTML/CSS rendering components.  Such components
should be thoroughly tested for compatibility, and an emphasis should be placed on testing for memory leaks
in this browser (as is done with the Echo platform itself).

Some aesthetic capabilities of Echo3 are not rendered by the IE6 browser.  For example, semi-transparent
PNG window title bars are not supported.

#### Internet Explorer 7

Internet Explorer 7 is fully supported.  

#### Internet Explorer 8

Internet Explorer 8 is fully supported.  Echo forces the use of IE8's most stringent "standards compliance" mode.
Note that this mode is still far from standards compliant.

When writing client-side JavaScript Echo applications that target IE8, you should add the following code to the
`HEAD` element of the containing HTML page to ensure IE8 operates in standards compliance mode:

<pre class="code">&lt;meta content="IE=8" http-equiv="X-UA-Compatible"/&gt;
</pre>

This tag is added automatically for server-side Java applications.

#### WebKit and KHTML Browsers: Apple Safari, Google Chrome, Konqueror, and Others

WebKit-based browsers are fully supported by Echo, including Apple Safari and Google Chrome.  Safari 3, and 4 are
officially supported, in addition to Chrome 1, 2, and 3 (alpha/beta).  Other WebKit based browsers (e.g., Midori) should
work fine as well.  KHTML-based browsers (e.g. Konqueror) are also supported.

#### Safari for iPhone

Echo applications work on Safari for the iPhone.  This platform is of course fundamentally limited in its capabilities,
so not all of Echo's capabilities can be supported (e.g., the concept of a "mouse rollover" is not implemented in iPhone Safari).

#### Opera Browser

Echo attempts to support the Opera browser, but unfortunately this browser contains a critical flaw in its rendering engine
which makes rendering Echo applications somewhat quirky.  This issue is fundamental to CSS rendering, and has been reported
numerous times to the Opera development team.  Opera versions 9.27 and prior are not affected by the issue.  Opera 9.5, 9.6,
and 10.0 suffer the issue. Later Opera version seem to work fine.

The Opera bug can be replicated with the following extremely simple CSS page: 

[http://echo.nextapp.com/content/test/operacss/](http://echo.nextapp.com/content/test/operacss/ "http://echo.nextapp.com/content/test/operacss/")  

In the above test, two absolutely positioned DIVs are displayed on the screen, one inside another, each with its
top/left/right/bottom coordinates set to 20px.  The green (outer) DIV should thus be 20px from the page edge. 
The red (inner) DIV, contained within the green DIV, should be 20px inset from the edge of the green DIV on all sides.  

Simply click the link and resize the browser vertically (but NOT horizontally).   Note that in Opera, the positioning
does not behave as specified.  In 9.5, the RED div may actually leave the bounds of the green DIV.  In later versions,
the behavior is improved, but the DIVs will not necessarily occupy the entirety of the screen as specified.

This flaw is present in versions of Opera which pass the ACID3 test with a 100/100 score.

The following Opera forum post contains more information on this bug:
[http://my.opera.com/community/forums/topic.dml?id=250572](http://my.opera.com/community/forums/topic.dml?id=250572 "http://my.opera.com/community/forums/topic.dml?id=250572")
A bug report has been filed in the Opera tracker as well.

Opera is still used for testing the Echo platform, in the hope that this bug will soon be fixed. 