import '@polymer/polymer/polymer-legacy.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Button = window.D2L.PolymerBehaviors.Button || {};

/** @polymerBehavior */
D2L.PolymerBehaviors.Button.Behavior = {
	properties: {

		/**
		 * Whether the button is the primary button.
		 */
		primary: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Standard HTML disabled.
		 */
		disabled: {
			type: Boolean,
			reflectToAttribute: true
		},
		/**
		 * Indicates whether the element, or another grouping element it
		 * controls, is currently expanded or collapsed.
		 */
		ariaExpanded: String,
		/**
		 * Indicates the button opens a menu.
		 */
		ariaHaspopup: String,
		/**
		 * A string to be used as the accessible label, which overrides text content.
		 */
		ariaLabel: String,
		/**
		 * Standard HTML autofocus.
		 */
		autofocus: {
			type: Boolean,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML form.
		 */
		form: {
			type: String,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML formaction.
		 */
		formaction: {
			type: String,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML formenctype.
		 */
		formenctype: {
			type: String,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML formmethod.
		 */
		formmethod: {
			type: String,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML formnovalidate.
		 */
		formnovalidate: {
			type: String,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML formtarget.
		 */
		formtarget: {
			type: String,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML name.
		 */
		name: {
			type: String,
			reflectToAttribute: true
		},
		/**
		 * Standard HTML type.
		 */
		type: {
			type: String,
			reflectToAttribute: true
		}

	},
	ready: function() {
		this.addEventListener('tap', function(e) {
			var button = e.currentTarget;
			if (button && button.disabled) {
				e.stopPropagation();
			}
		}, true);
	}
};
