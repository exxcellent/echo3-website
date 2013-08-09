MetroApp = Core.extend(Echo.Application, {
    $construct: function() {
        Echo.Application.call(this);
        
        // Build layout
        var contentPane = new Echo.ContentPane({
            background: "#2C3E50",
            children: [
                new Echo.SplitPane({
                    children: [
                        new Echo.SplitPane({
                            orientation: Echo.SplitPane.ORIENTATION_VERTICAL_TOP_BOTTOM,
                            children: [
                                new Echo.Grid({
						            insets: "5px",
						            children: [
							            new Echo.Button({text: "button", styleName: "Button.red"}),
							            new Echo.Button({text: "button", styleName: "Button.teal"}),
							            new Echo.Button({text: "button", styleName: "Button.green"}),
							            new Echo.Button({text: "button", styleName: "Button.orange"}),
							            new Echo.Button({text: "button", styleName: "Button.purple"}),
							            new Echo.Button({text: "button", styleName: "Button.red"}),
						            ]
						        }),
                                new Echo.ContentPane({
									insets: "30px",
                                    children: [
										new Echo.Column({
											children: [
												new Echo.RadioButton({group: 0, styleName: "Default", text: "choice"}),
												new Echo.RadioButton({group: 0, styleName: "Default", text: "choice"}),
												new Echo.RadioButton({group: 0, styleName: "Default", text: "choice"}),
											]
										})
										
									]
                                }),
                            ]
                        }),
                        new Echo.SplitPane({
                            orientation: 4,
                            children: [
                                new Echo.Grid({
                                insets: "5px",
                                children: [
                                    new Echo.TextField({text: "text field", }),
                                    new Echo.PasswordField({}),
                                    new Echo.CheckBox({styleName: "Default", text: "check"}),
                                    new Echo.SelectField({items: ["item", "item", "item", "item"]}),
                                    new Echo.TextArea({}),
                                    new Echo.Label({foreground: "#fff", text: "label", font: {size: "14pt"}}),
                                    new Echo.Button({styleName: "Button.save", text: "save"}),
                                    new Echo.Button({styleName: "Button.cancel", text: "cancel"}),
                                ]
                                }),
                                new Extras.TabPane({
									styleName: "Default",
                                    children: [
                                        new Echo.ContentPane({layoutData: {title: "inbox"},
                                            children: [
                                                new Echo.WindowPane({
													styleName: "WindowPane.teal",
													width: "500px",
													height: "300px",
													movable: false,
													positionX: 20,
													positionY: 20,
													closable: false,
													title: "window title",
                                                })
                                            ]
                                        }),
                                        new Echo.ContentPane({layoutData: {title: "spam"}})
                                    ]
                                }),
                            ]
                        }),

                    ]
                })
            ]
        });
        this.rootComponent.add(contentPane);
    }
});

init = function() {
    var app = new MetroApp();
    var client = new Echo.FreeClient(app, document.getElementById("rootArea"));
    app.setStyleSheet(MetroApp.StyleSheet);
    client.init();

};
