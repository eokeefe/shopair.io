Package.describe({
	summary: "Simple user interface controls"
});

Package.on_use(function (api, where) {
	api.use([
		'jquery',
		'd3'], 'client');

	api.add_files('lib/iopctrl.js', 'client');

	api.export('iopctrl');
});