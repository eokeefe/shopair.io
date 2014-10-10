
// var impID = "OB6hn8AxCar-"; // Prototype
var impID = "iMwKmYoPiOjm"; // Board 1

// Data request
function compPull () {
	HTTP.get("https://agent.electricimp.com/" + impID, function (err, res) {
		if (err) console.log(err);
		else Archive.insert(res);
	});
};

Settings.find().observeChanges({
	changed: function (id, user) {
		HTTP.post("https://agent.electricimp.com/" + impID, {data: user},
			function (err, res) {
				if (err) console.log(err);
				else console.log(res);
			});
	}
});

// intervals
Meteor.setInterval(compPull, 10000);
