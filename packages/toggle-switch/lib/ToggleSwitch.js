ToggleSwitch = function () {
	var ToggleSwitch = {version: "0.0.1"};

	ToggleSwitch.build = function (g, r) {
		var _id = g.attr("id");

		sw = iopctrl.arcslider()
				.indicator(switchIndicator)
				.ease("cubic-in");

		if (_radius != undefined) sw.radius(_radius);

		sw.axis().orient("out")
				.tickSize(10)
				.scale(d3.scale.ordinal()
					.domain(['on', 'off'])
					.range([0, Math.PI/2]));

		/*------- For test only -----------*/
		sw.onValueChanged(function(v) {
			if (v === "on") Settings.update(Session.get("user"), {$set: {"power": true}});
			if (v === "off") Settings.update(Session.get("user"), {$set: {"power": false}});
		})
		/*------- For test only -----------*/

		g.call(sw)

		ToggleSwitch[_id] = sw;
	}
	ToggleSwitch.radius = function(x) {
		if (!arguments.length) return _radius;
		_radius = x;
		return ToggleSwitch;
	};

	return ToggleSwitch;
}();

function switchIndicator (g, r) {
	var rx = 0.15*r, ry = -0.75*r, l = 0.5*r;

	g.append("path").attr("class", "switch")
		.attr("d", "m-"+rx+",0 a"+rx+","+rx+" 0 0,0 "+(2*rx)+",0 a"+rx+","+ry+" 0 0,0 -"+(2*rx)+",0");
	g.append("path").attr("class", "point").attr("d", "M0,-"+l+"  L 0 "+(ry+10)+"");
};