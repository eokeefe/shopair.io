Package.describe({
	summary: "Graphical User Interface container"
});

Package.on_use(function (api, where) {
	api.use([
		'jquery',
		'd3',
		'compressor-project'], 'client');

	api.add_files('lib/GUI.js', 'client');
});