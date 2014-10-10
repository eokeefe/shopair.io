UI.registerHelper('analogGauge', function (id, opt) {
	var g = d3.select(".container").append("g")
			.attr("class", "gauge")
			.attr("id", id)
			.call(
				AnalogGauge.title(opt.hash.title)
					.radius(opt.hash.r)
					.build);

	if (!isNaN(opt.hash.x) || !isNaN(opt.hash.y)) {
		var x = opt.hash.x == undefined ? 0 : opt.hash.x;
		var y = opt.hash.y == undefined ? 0 : opt.hash.y;

		g.attr("transform", "translate(" + x + "," + y + ")");
	}
	if (!isNaN(opt.hash.fade)) {
		g.attr("opacity", 0)
			.transition()
				.duration(opt.hash.fade)
				.delay(opt.hash.delay == undefined ? 0 : opt.hash.delay)
				.attr("opacity", 1);
	}
});