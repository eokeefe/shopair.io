PushButton = function () {
	var PushButton = {version: "0.0.1"};

	PushButton.build = function (g) {
		var _id = g.attr("id");

		button = iopctrl.LedButton()
				.width(150)
				.height(25)
				.color("red");

		g.call(button)

		g.append("text")
			.attr("transform", "translate(75, 12.5)")
			.attr("text-anchor", "middle")
			.attr("alignment-baseline", "middle")
			.text(_title)
			.on("click", function() { button.on() ? button.on(false) : button.on(true) });

		PushButton[_id] = button;
	}
	PushButton.title = function (str) {
		if (!arguments.length) return _title;
		_title = str;
		return PushButton;
	}

	return PushButton;
}();