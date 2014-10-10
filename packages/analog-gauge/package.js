Package.describe({
	summary: "Analog Gauge"
});

Package.on_use(function (api, where) {
	api.use([
		'jquery',
		'd3',
		'iopctrl',
		'templating'], 'client');

	api.add_files([
		'lib/AnalogGauge.js',
		'lib/helper.js'], 'client');

	api.export('AnalogGauge');
});