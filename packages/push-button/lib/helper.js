UI.registerHelper('pushButton', function (id, opt) {
	pb = d3.select('.container').append("g")
			.attr("class", "PushButton")
			.attr("id", id)
			.call(PushButton.title(opt.hash.title).build);

	if (!isNaN(opt.hash.x) || !isNaN(opt.hash.y)) {
		var x = opt.hash.x == undefined ? 0 : opt.hash.x;
		var y = opt.hash.y == undefined ? 0 : opt.hash.y;

		pb.attr("transform", "translate(" + x + "," + y + ")");
	}
	if (!isNaN(opt.hash.fade)) {
		pb.attr("opacity", 0)
			.transition()
				.duration(opt.hash.fade)
				.delay(opt.hash.delay == undefined ? 0 : opt.hash.delay)
				.attr("opacity", 1);
	}
});