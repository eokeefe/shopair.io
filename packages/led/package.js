Package.describe({
	summary: "LED"
});

Package.on_use(function (api, where) {
	api.use([
		'jquery',
		'd3',
		'iopctrl',
		'templating'], 'client');

	api.add_files([
		'lib/LED.js',
		'lib/helper.js'], 'client');

	api.export('LED');
});