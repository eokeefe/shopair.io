Package.describe({
	summary: "Toggle Switch"
});

Package.on_use(function (api, where) {
	api.use([
		'jquery',
		'd3',
		'iopctrl',
		'templating'], 'client');

	api.add_files([
		'lib/ToggleSwitch.js',
		'lib/helper.js'], 'client');

	api.export('ToggleSwitch', ['server', 'client']);
});