---
title: Fundamentals
---

### Components

An Echo user interface is built by assembling `Component`s into hierarchies.  A "Component" is any object which extends from the `nextapp.echo.app.Component` class, such as `Column`, `Label`, `Button`, `TextField`, or `WindowPane`.  `Component`s may have multiple child `Component`s, but only one parent `Component`.  Hierarchies are created and manipulated using the `add()` and `remove()` methods of individual `Component`s.  The following code example demonstrates the building of a hierarchy by adding two `Button`s to a `Column`:

```java
Column buttonColumn = new Column();
Button button1 = new Button("First Button");
buttonColumn.add(button1);
Button button2 = new Button("Second Button");
button2.setBackground(Color.GREEN);
buttonColumn.add(button2);
```

**Properties, Styles, and StyleSheets**: A `Component` class will typically have properties that define its appearance and behavior.  As shown in the above example, the second button's background color property has been set to the color green.  In addition to setting properties on individual `Component`s, some `Component` properties may be set using the concepts of `Style`s and `StyleSheet`s, which are discussed in later chapters of the tutorial.

**Children**: Only certain `Component`s, typically those used for layout purposes, can contain other `Component`s.  Examples of such containers include `WindowPane`, `Column`, `Grid`, and `ContentPane`.  Some `Component`s may also specify requirements that they only be added to specific types of parent `Component`s, or that child `Component`s be limited to a specific number and/or specific type.  The API documentation for each `Component` will describe any such issues in detail.

![](/images/echo3/tutorial/component_hierarchy.png)

**Hierarchy Roots**: The root component of an Echo User Interface must be a `Window`.  A `Window` component represents the top-level browser window containing the application.  A `Window` may have only one child component, and that child must be a `ContentPane`.  The `ContentPane` represents the region within the `Window`, to which child components may be added.  A `ContentPane` also generally only allows one child component (there are exceptions to this rule, such as in the case of adding `WindowPane`s to `ContentPane`s, which will be discussed later in this documentation).

#### LayoutData

The "LayoutData" property of a `Component` is used to describe how a `Component` should be rendered by its containing parent `Component`.  For example, in the previous code snippet showing two `Button`s being added to a `Column`, we might use a `LayoutData` to inform the `Column` as to how the `Button`s should be aligned.  By setting the `LayoutData` property appropriately, we could cause the Column to right justify the first button and left justify the second.

Each container `Component` has its own `LayoutData` implementation.  For example, a `Grid` has `GridLayoutData` while a `Column` has `ColumnLayoutData`.  To configure the alignment of `Button`s within a `Column`, we would thus set the `LayoutData` of each `Button` to an appropriately configured `ColumnLayoutData` instance.  For example:

```java
Column buttonColumn = new Column();
Button button1 = new Button("First Button");
ColumnLayoutData button1ColumnLayoutData = new ColumnLayoutData();
button1ColumnLayoutData.setAlignment(new Alignment(Alignment.RIGHT,
		Alignment.DEFAULT));
button1.setLayoutData(button1ColumnLayoutData);
buttonColumn.add(button1);
Button button2 = new Button("Second Button");
button2.setBackground(Color.GREEN);
buttonColumn.add(button2);
```

### Events

`Component`s which capture user input may fire events when input occurs.  In order to notify an application of events, a `Component` will provide methods to register and unregister event listeners that correspond to a specific type of event.  Other types of Echo objects, such as data models, also use this event pattern to indicate when state changes occur.

As an example, `Button` components provide the capability to register `ActionListener`s which will receive `ActionEvent`s when a button click occurs (note that Echo defines its own `ActionListener`/`ActionEvent` objects, rather than using the Java AWT/Swing APIs).

The following code snippet shows a button with a registered `ActionListener`.  The `ActionListener`'s `actionPerformed()` method will be invoked when the user clicks the button.  The provided `ActionEvent` parameter will describe the particulars of the event, such as the source (`Button`) that generated it (in this trivial case we do not use this information).  The event listener in this case defines behavior to change the text of the `Button` in response to the user clicking it.

```java
final Button button = new Button("Please click me.");
button.addActionListener(new ActionListener() {
	public void actionPerformed(ActionEvent e) {
		button.setText("Thanks!");
	}
});
```

**Anonymous inner class listener implementations**: The above code uses an anonymous inner class to provide the event listener implementation.  While many developers may recommend against the use of anonymous inner classes in general, they can be extremely valuable for simple event listener implementations as shown above.

**Event-driven**: At this point it's worth revisiting the notion that Echo is an event-driven framework: the dynamics of an Echo application are defined by registering events that cause specific behaviors to occur in response to user actions.  The entire control flow of an Echo application is defined using events.  While a web developer using a conventional framework might define a hyperlink to navigate the user to a new screen of the user interface, an Echo developer would instead create a `Button` with an `ActionListener` that defined behavior to update the state of the user interface appropriately when it was clicked.
