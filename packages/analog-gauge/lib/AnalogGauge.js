AnalogGauge = function () {
	var AnalogGauge = {version: "0.0.1"};

	AnalogGauge.build = function (g) {
		var _id = g.attr("id");

		if (!_radius) _radius = 100;
		var _diameter = 2*_radius;

		gauge = iopctrl.arcslider()
				.radius(_radius)
				.events(false)
				.indicator(indicator);

		gauge.axis().orient("out")
				.ticks(15)
				.tickSubdivide(5)
				.tickSize(10, 6, 10)
				.scale(d3.scale.linear()
					.domain([0, 150])
					.range([-Math.PI, Math.PI/2]));

		display = iopctrl.segdisplay()
				.width(80)
				.digitCount(3);

		g.append("g")
				.attr("class", "segdisplay")
				.attr("transform", "translate(" + (_diameter+30) + ", " + (_radius+60) + ")")
				.call(display);

		g.append("g")
				.attr("class", "gauge")
				.call(gauge);

		if (_title) {
			g.append("text")
					.attr("transform", "translate(" + (_diameter+105) + "," + (_radius+115) + ")")
					.attr("text-anchor", "end")
					.text(_title);
		}

		AnalogGauge[_id] = {"gauge": gauge.value, "display": display.value};
	}
	AnalogGauge.radius = function (x) {
		if (!arguments.length) return _radius;
		_radius = x;
		return AnalogGauge;
	}
	AnalogGauge.title = function (str) {
		if (!arguments.length) return _title;
		_title = str;
		return AnalogGauge;
	}

	return AnalogGauge;
}();

indicator = function(g, r) {
	var tail = 0.2*r, base = -0.7*r, point = -0.98*r;

	g.append("path").attr("class", "base").attr("d", "M0 " + tail + " L 0 " + base + "");
	g.append("path").attr("class", "point").attr("d", "M0 0  L 0 " + point + "");
	g.append("circle").attr("r", 0.03 * r);
};