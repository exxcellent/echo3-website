---
title: Hello World
---

Just as was done with the server-side application development tutorial, we'll kick off the client-side tutorial with the simplest of applications: "Hello, world!".

### The Application

The first step toward creating a stand-alone client-side application is to create an `Echo.Application`-derived class, which will represent the state of a single instance of the application.   This class has a property called `rootComponent` which represents the region in which the application is rendered.  Whatever content is added to that component will appear on screen.  The `rootComponent` is limited to one child, so it typically makes sense to add some type of "container" component to it that can handle multiple children. For the trivial case of our "Hello, World!" application though, we'll just add a label that says "Hello, world!" within it:

```javascript
HelloWorldApp = Core.extend(Echo.Application, {

	$construct: function() {
		Echo.Application.call(this);
		var label = new Echo.Label({
			text: "Hello, world!"
		});
		this.rootComponent.add(label);
	}
});
```

### The Client

The `Echo.Application` simply represents the state of an application, e.g., it's hierarchy of Echo components.  It does not have any knowledge of how these components should be rendered to the browser's DOM.  To make this thing actually show up on the user's screen, we'll need to install it within an Echo **Client**.   In this case of creating a freestanding client-side application, we'll use a type of client called `Echo.FreeClient`.

To create the client and start this application running within the browser, we'll declare a global function called "init()" that will be executed when the containing page is loaded.  Inside the init() method, we'll create  a new instance of `HelloWorldApp`, install it within a client, and then invoke `init()` on the client to start it.

```javascript
init = function() {
    var app = new HelloWorldApp();
    var client = new Echo.FreeClient(app, document.getElementById("rootArea"));
    client.init();
};
```

### The HTML Page

There are several requirements which are placed on the containing HTML page to make this work:

*   The page must have all the necessary Echo libraries loaded.  The following base libraries must always be loaded, and in this order:

    *   `Core.js`
    *   `Core.Web.js`
    *   `Application.js`
    *   `Render.js`
    *   `Sync.js`
    *   `Client.js`
    *   `Serial.js`
    *   `FreeClient.js`

Additionally, your application will require rendering libraries for any components it uses.  In the case of our simple HelloWorld application, this only means `Render.Label.js` will be required.  These libraries may be combined into a single JavaScript file if desired.  **NOTE:** later versions of Echo3 will include a combined version of these libraries for pure client-side development.

*   The page must be rendered in "strict mode" (rather than "quirks mode").  If the browser is using "quirks mode", some Echo components that precisely size themselves will not render correctly.  Enabling strict mode is accomplished with "DOCTYPE switching".  If you are unfamiliar with this concept, check out: [http://www.quirksmode.org/css/quirksmode.html](http://www.quirksmode.org/css/quirksmode.html "http://www.quirksmode.org/css/quirksmode.html")
*   The page must have a element with the appropriate id specified in the `Echo.FreeClient` constructor.  In the above example, we retrieve an element having an `id` of "rootArea".  Obviously this needs to exist for it to work.

*   The page must invoke `init()` at some point to start the application.  This can be placed in the `onload` attribute of the `element`, e.g.: `<body onload="init();">`.
