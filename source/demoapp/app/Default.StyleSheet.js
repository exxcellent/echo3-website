var COLORS = {
	TEAL_DARK: "#008299",
	TEAL_LIGHT: "#00A0B1",
	
	WHITE: "#ffffff",
};

MetroApp.StyleSheet = new Echo.StyleSheet({
	"Default": {
		"RadioButton": {
			foreground: COLORS.WHITE,
		},
		"CheckBox": {
			foreground: COLORS.WHITE,
		},
		"Extras.TabPane": {
			activeBorder: "1px solid #666666",
			tabActiveBackground: "#2C3E50",
			tabActiveForeground: "#ffffff",
			foreground: "#ffffff",
			insets: 2,
			tabActiveBorder: "1px solid #666666",
			tabActiveHeightIncrease: 0,
			tabAlignment: "top",
			tabCloseIconTextMargin: 5,
			tabContentInsets: 0,
			tabIconTextMargin: 5,
			tabInactiveBorder: "none",
			tabInactiveForeground: "#2e8bcc",
			tabRolloverBackground: "#34495E",
			tabRolloverEnabled: true,
			tabInset: 10,
			tabInsets: "1px 8px",
			tabPosition: Extras.TabPane.TAB_POSITION_TOP,
			tabSpacing: 0,
			font: {
				size: "14pt"
			},
		},
		"WindowPane": {
			border: "1px solid #cccccc",
			titleBackground: "#008299",
			font: {
				size: "20px",
				bold: true,
			}
		}
	},
	"WindowPane.teal": {
		"WindowPane": {
			border: "1px solid #cccccc",
			titleBackground: COLORS.TEAL_DARK,
			titleForeground: COLORS.WHITE,
			font: {
				size: "20px",
				bold: true,
			}
		}
	},
    "Button.teal": {
        "AbstractButton": {
            height: "80px",
            width: "150px",
            alignment: "center",
            textAlignment: "center",
            foreground: COLORS.WHITE,
            background: COLORS.TEAL_DARK,
            pressedBackground: COLORS.TEAL_LIGHT,
            rolloverBackground: COLORS.TEAL_LIGHT,
            pressedEnabled: true,
            rolloverEnabled: true,
            font: {
                size: "14pt"
            }
        },
    },
    "Button.green": {
        "AbstractButton": {
            height: "80px",
            width: "150px",
            alignment: "center",
            textAlignment: "center",
            foreground: "#ffffff",
            background: "#008A00",
            pressedBackground: "#00A600",
            rolloverBackground: "#00A600",
            pressedEnabled: true,
            rolloverEnabled: true,
            disabledForeground: "#93bed5",
            font: {
                size: "14pt"
            }
        },
    },
    "Button.purple": {
        "AbstractButton": {
            height: "80px",
            width: "150px",
            alignment: "center",
            textAlignment: "center",
            foreground: "#ffffff",
            background: "#8C0095",
            pressedBackground: "#A700AE",
            rolloverBackground: "#A700AE",
            pressedEnabled: true,
            rolloverEnabled: true,
            disabledForeground: "#93bed5",
            font: {
                size: "14pt"
            }
        },
    },
    "Button.red": {
        "AbstractButton": {
            height: "80px",
            width: "150px",
            alignment: "center",
            textAlignment: "center",
            foreground: "#ffffff",
            background: "#AC193D",
            pressedBackground: "#BF1E4B",
            rolloverBackground: "#BF1E4B",
            pressedEnabled: true,
            rolloverEnabled: true,
            disabledForeground: "#93bed5",
            font: {
                size: "14pt"
            }
        },
    },
    "Button.orange": {
        "AbstractButton": {
            height: "80px",
            width: "150px",
            alignment: "center",
            textAlignment: "center",
            foreground: "#ffffff",
            background: "#D24726",
            pressedBackground: "#DC572E",
            rolloverBackground: "#DC572E",
            pressedEnabled: true,
            rolloverEnabled: true,
            disabledForeground: "#93bed5",
            font: {
                size: "14pt"
            }
        },
    },
    "Button.save": {
        "AbstractButton": {
            height: "40px",
            width: "100px",
            alignment: "center",
            textAlignment: "center",
            foreground: "#ffffff",
            background: "#2e7bcc",
            pressedBackground: "#2e63cc",
            rolloverBackground: "#2e63cc",
            pressedEnabled: true,
            rolloverEnabled: true,
            disabledForeground: "#93bed5",
            font: {
                size: "14pt"
            }
        },
    },
    "Button.cancel": {
        "AbstractButton": {
            height: "40px",
            width: "100px",
            alignment: "center",
            textAlignment: "center",
            foreground: "#333333",
            background: "#eeeeee",
            pressedBackground: "#eeeeee",
            rolloverBackground: "#eeeeee",
            pressedEnabled: true,
            rolloverEnabled: true,
            disabledForeground: "#93bed5",
            font: {
                size: "14pt"
            }
        },
    },
});
