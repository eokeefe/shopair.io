Package.describe({
	summary: "CompressorProject Common Package"
})

Package.on_use(function(api, where) {
	api.add_files('lib/namespacing.js', ['client', 'server']);
	api.add_files('lib/generalFCN.js', ['client', 'server']);
	api.add_files('lib/clientFCN.js', 'client');
	api.add_files('lib/serverFCN.js', 'server');

	api.export("getSize");
	api.export("responsiveSVG");

	api.export("GUI");
})