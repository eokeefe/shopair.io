UI.registerHelper('toggleSwitch', function (id, opt) {
	IO = d3.select('.container').append("g")
			.attr("class", "switch")
			.attr("id", id)
			.call(
				ToggleSwitch
					.radius(isNaN(opt.hash.r) ? undefined : opt.hash.r)
					.build);

	if (!isNaN(opt.hash.x) || !isNaN(opt.hash.y)) {
		var x = opt.hash.x == undefined ? 0 : opt.hash.x;
		var y = opt.hash.y == undefined ? 0 : opt.hash.y;

		IO.attr("transform", "translate(" + x + "," + y + ")");
	}
	if (!isNaN(opt.hash.fade)) {
		IO.attr("opacity", 0)
			.transition()
				.duration(opt.hash.fade)
				.delay(opt.hash.delay == undefined ? 0 : opt.hash.delay)
				.attr("opacity", 1);
	}
});