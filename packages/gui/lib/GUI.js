window.onresize = responsiveSVG;

Meteor.startup(function () {
	// Declare main objects in svg
	var svg_brand, svg_logo, svg_slogan;

	// Prepare SVG
	GUI.container =
		d3.select("body")
			.append("svg")
			.attr("width", GUI.width-10)
			.attr("height", GUI.height-5);

	var svg = 
		GUI.container
			.append("g")
				.attr("class", "GUI")
				.attr("transform", "translate(0,0)");

	// Add g for branding
	svg_brand = 
		svg.append("g")
			.attr("transform", "translate(0,0)")
			.attr("class", "svg-brand");

	// Static Text Logo
	svg_logo = 
		svg_brand.append("text")
			.attr("class", "svg-title")
			.attr("x", -275)
			.attr("y", 35)
			.text("Air Control")
		.transition()
			.duration(1000)
			.attr("x", 20);

	svg_slogan = 
		svg_brand.append("text")
			.attr("class", "svg-slogan")
			.attr("x", 45)
			.attr("y", 55)
			.attr("opacity", "0")
			.text("Online Air-Compressor")
		.transition()
			.duration(500)
			.delay(750) 
			.attr("opacity", "1");

	GUI.footer = 
		svg_brand.append("text")
			.attr("class", "svg-footer")
			.attr("y", GUI.height-10)
			.attr("x", GUI.width-300)
			.text("© 2014. All Rights Reserved.")

	//Add g for Page Contents
	GUI.page = 
		svg.append("g")
			.attr("transform", "translate(0,0)")
			.attr("class", "container");

	//Adding sattic page contets
	GUI.page.append("rect")
			.attr("ry", "6")
			.attr("rx", "6")
			.attr("y", "65")
			.attr("x", GUI.width/2)
			.attr("height", GUI.height - 95)
			.attr("width", "1")
			.attr("fill", "rgba(255,255,255,0)")
			.attr("stroke", "rgba(99,99,99,0)")
			.attr("stroke-width", "2")
			.attr("class", "svg-menu-item")
		.transition()
			.delay(500)
			.duration(500)
			.attr("fill", "rgba(255,255,255,1)")
			.attr("stroke", "rgba(99,99,99,1)")
			.attr("width", GUI.width - 40)
			.attr("x", "20");
});