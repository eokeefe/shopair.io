Meteor.startup(getSize = function () {
	if (typeof window.innerWidth != 'undefined'){
		GUI.width = window.innerWidth,
		GUI.height = window.innerHeight
	} else if (typeof document.documentElement != 'undefined'
	&& typeof document.documentElement.clientWidth !=
	'undefined' && document.documentElement.clientWidth != 0) {
		GUI.width = document.documentElement.clientWidth,
		GUI.height = document.documentElement.clientHeight
	} else {
		GUI.width = document.getElementsByTagName('body')[0].clientWidth,
		GUI.height = document.getElementsByTagName('body')[0].clientHeight
	}
});

responsiveSVG = function () {
	getSize();

	// Adjust SVG container
	GUI.container
		.attr("width", GUI.width-10)
		.attr("height", GUI.height-5);

	GUI.footer
		.attr("y", GUI.height-10)
		.attr("x", GUI.width-300);
	
	GUI.page.select("rect")
		.transition()
			.attr("width", GUI.width - 40)
			.attr("height", GUI.height - 95);
};