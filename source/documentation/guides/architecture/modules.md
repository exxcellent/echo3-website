---
title: Modules
---

### The Server-Side

The server-side Java implementation of Echo is divided into two distinct modules:
the **Application Framework** and the **Web Container**.

*   The **Application Framework** module is housed in the `nextapp.echo.app` package root.
	These objects are the `Component`s and properties that represent the state of an application, 
	and the events and listeners that are used to bring about changes to that state.
	
	An end-developer who is writing an Echo-based application will do nearly all of his or her work
	with the APIs provided by the Application Framework.

    The Application Framework provides no means of _rendering_ the application in any usable
    form, e.g., to a web browser.  It only represents the application's state.  In fact, there 
    is absolutely no web-related code of any kind in this module.   Instead, the module provides 
    the ability for a renderer to receive notifications (using events) as to when portions of a
    user interface have been updated.

*   The **Web Container** module is tasked with rendering the state of an application represented
	in the Application Framework to a web browser.  This module is contained within the `nextapp.echo.webcontainer`
	package hierarchy.

	The Web Container can render the entire state of the server-side application to the web browser,
	or send down fractional updates when only a portion of the user interface has been updated on the
	server.  When user input is received by the web browser, the Web Container will translate it into
	property updates and events fired to the Application Framework.

    Developers who are writing custom components that will render their own HTML/JavaScript code
    will interact with the Web Container API.  All developers will interact with it in a fairly
    trivial fashion, i.e., when creating a `WebContainerServlet` implementation to host an application.

**Module Inter-dependencies**: The Application Framework module has **no dependencies** on the
Web Container module.  This is possible because all communication from the Application Framework to the
Web Container is performed with events.  This design is enforced at build time, where the Application
Framework is compiled first, and then the Web Container is compiled separately afterward. 
The Web Container does directly depend on the Application Framework.

### The Client-Side

The client-side of Echo has an identical separation between **Application Framework** and **Web Container**.
In the client-side case, the Application Framework is contained entirely in the `Application.js` and `Serial.js`
modules.  The rest of the Echo JavaScript modules are for the Web Container, i.e.: `Sync.js`, `Arc.js`, `Client.js`,
`FreeClient.js`, `RemoteClient.js`, and the various `Sync.???.js` modules that render individual components.