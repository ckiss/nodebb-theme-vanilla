(function(module) {
	"use strict";

	var Theme = {};

	Theme.defineWidgetAreas = function(widgets, callback) {
		widgets.push({
			'name': 'MOTD',
			'template': 'home.tpl',
			'location': 'motd',
			'maxWidgets': 1
		});

		callback(null, widgets);
	};

	module.exports = Theme;

}(module));