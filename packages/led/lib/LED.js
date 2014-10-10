LED = function () {
	var LED = {version: "0.0.1"};

	LED.build = function (g) {
		var _id = g.attr("id");

		if (!_height) _height = 10;
		if (!_width) _width = 20;

		led = iopctrl.led()
				.width(_width)
				.height(_height)
				.color("red");

		g.call(led)

		g.append("text")
			.attr("transform", "translate(" + (_width/2) + "," + (_height/2) + ")")
			.attr("text-anchor", "middle")
			.attr("alignment-baseline", "middle")
			.text(_title);

		led.on(false)

		LED[_id] = led;
	}
	LED.title = function (str) {
		if (!arguments.length) return _title;
		_title = str;
		return LED;
	}
	LED.width = function(x) {
		if (!arguments.length) return _width;
		_width = x;
		return LED;
	}
	LED.height = function(x) {
		if (!arguments.length) return _height;
		_height = x;
		return LED;
	}

	return LED;
}();