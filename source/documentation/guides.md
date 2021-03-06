---
title: Developer's Guide
---

The Echo Developer's Guide is intended to provide a complete tutorial of the Echo framework.
This guide covers writing applications on the server-side (in Java) and on the client-side
(in JavaScript). It discusses the architecture of the framework, and demonstrates how it may
be extended by writing your own components.

### Client-Side vs. Server-Side Applications

There are two types of web applications which may be developed with Echo3: applications whose
code is executed on the client, and applications whose code is executed on the server.

**Client-side Echo applications** are written in JavaScript, which is executed directly by the
client browser. Such applications will use XML, JSON, or some other protocol over HTTP to communicate
back to the server. Because all user-interface related code is executed only on the client,
the applications will only be delayed by the server when they need to query a server-side data
store (database, web services, etc).

**Server-side Echo applications** are written in Java (other languages may be supported in the future).
A server-side Echo application communicates with a special "thin client" Echo application that is
provided by the framework itself. This thin client application synchronizes its component state to
that of the server-side application, and sends any user-generated events back to the server.
A server-side Echo application may communicate more directly with its datastore, calling into a
Java middle tier directly and/or using such protocols as JDBC, RMI, LDAP, or XML-over-HTTP to
remote servers (rather than only to the host server).

This documentation is initially divided into two sections, one for server-side Java and the other
for client-side JavaScript.  We recommend reading both, but feel free to read them in whichever order you prefer.

#### Available guides

* [Server-Side Java Applications](server/)
* [Client-Side Java Applications](client/)
