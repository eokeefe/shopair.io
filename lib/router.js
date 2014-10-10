
Router.map(function () {
	this.route('layout', {
		path: '/'
	});
});

// Helper Tag
UI.registerHelper("Air", function () {
	return Air.findOne();
});
