---
title: Architectural Overview
---

Echo is best defined as a **component-oriented** and **event-driven** framework for building web-based user interfaces.

Echo can be thought of as being **two frameworks in one**: a client-side JavaScript framework and a server-side Java framework.
If desired, developers can choose one of the two frameworks and create applications without ever learning the other.

Both frameworks have roughly the **same end-developer API**.  That is, each has objects which represent the same set of components,
events, and properties with which applications are built.  The APIs differ to cater to the needs of the host language, but
conceptually they are nearly identical.

### Client-Side JavaScript Framework

The client-side JavaScript version of Echo3 can be run all by itself if desired.  It does not depend in any way on a
host server.  A client-side Echo application can be hosted on a server with no dynamic code generation capabilities, or
even on a CD-ROM as a series of HTML and JavaScript files.

All code written in the Echo3's client-side JavaScript framework is run on the remote client browser.  Should code need
to interact with a server, it can do so using HTTP (Ajax) or WebSocket. As with any code that is being executed on a remote client, security
needs to be handled entirely on the server, as the remote client cannot be trusted.

### Server-Side Java Framework

The server-side Java version of Echo3 runs in a Java Servlet Container.  The server-side version's first act upon receiving
a visitor is to send down a "remote display" application built on the **client-side** version of Echo.  This client-side application will enable the server to remotely display the state of an application that is actually running on the server from within the user's web browser.  The server will communicate with this client-side application using XML-over-HTTP, serializing state changes back-and-forth, processing user input and rendering updates.

Server-side Echo3 code is written in Java and is executed on the server.  It is never transmitted to the client -- only the
resulting user interface state is presented to the user.  The application state can thus be trusted.  Server-side Echo
applications can use any means of data access available to a Java Servlet application, e.g., JDBC/SQL, Hibernate, or XML/HTTP.
