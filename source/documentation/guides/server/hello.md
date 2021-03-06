---
title: Hello World
---

To kick off our introduction to server-side Echo3 development, we'll start with the simplest of applications: "Hello, World!".

To create a web application with Echo, you will create two Java classes: an `ApplicationInstance` and a `WebContainerServlet`.
The `ApplicationInstance` will represent the state of a single user-instance of the application.
The `WebContainerServlet` is a Servlet-derivative that will process HTTP connections from web clients
and instantiate new `ApplicationInstance`s for new users.

### The ApplicationInstance

**Purpose**: An `ApplicationInstance` represents the state of the user interface of a single user.
Every user who visits an Echo application will have his/her own unique instance.
Echo will store the `ApplicationInstance` in the servlet container's user session, so the instance
will be available until the user exits the application or the session times out due to inactivity.

**Implementation**: `ApplicationInstance` is an abstract class, requiring a single method to be defined by
the developer: `init()`.  The `init()` method is invoked to initialize the state of the user interface for a new user.
It must return an Echo `Window` object representing the state of the initial window of an application.
An application's implementation of the `init()` method should create a new `Window` and configure it
for a new user by assembling a hierarchy of Echo components within it.  The following code example shows
an `ApplicationInstance` implementation for a simple "Hello, world!" application:

```java
public class HelloWorldApp extends ApplicationInstance {
	public Window init() {
		Window window = new Window();

		ContentPane contentPane = new ContentPane();
		window.setContent(contentPane);

		Label label = new Label("Hello, world!");
		contentPane.add(label);

		return window;
	}
}
```

**Properties**: Because an `ApplicationInstance` represents a single user of an application, it is
safe to add properties to this class in your implementation with the expectation that the properties
will be unique on a per-user basis.  For example, if an application required authentication, it might
be practical to store the login name of the user in a property of the `ApplicationInstance` object.

### The WebContainerServlet

The `WebContainerServlet` class is an Echo-specific derivative of the Java Servlet Specification's `HttpServlet` class.
The `WebContainerServlet` is responsible for processing all requests from the client-side Echo engine,
including rendering the initial HTML page, handling XML synchronization services, and sending graphic images
to the client.   All such client interaction work is done behind the scenes.  As an application developer,
your only required interaction with the `WebContainerServlet` class is to create a derivative implementation that
returns new `ApplicationInstance`s.  The following example shows a `WebContainerServlet` that returns new
`ApplicationInstance`s of the previous "Hello, world!" application:

```java
public class HelloWorldServlet extends WebContainerServlet {
	public ApplicationInstance newApplicationInstance() {
		return new HelloWorldApp();
	}
}
```

