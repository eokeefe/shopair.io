
Settings = new Mongo.Collection("settings");
Archive = new Mongo.Collection("archive");

if (Meteor.isClient && Settings.find().count() === 0 ) {
	var returnID = Settings.insert({
		power: false,
		solenoid: false,
		impID: "OB6hn8AxCar-",
		Pressure: [150, 150]
	});

	Session.set("user", {"_id": returnID});
};
