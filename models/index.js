var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip_planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console.log('mongodb connection error')));

var Place, Hotel, ThingToDo, Restaurant;

var Schema = mongoose.Schema;

var placeSchema = new Schema({
	address: { type: String },
	city: { type: String },
	state: { type: String },
	phone: { type: String },
	location: { type: [Number] }
});

var hotelSchema = new Schema({
	name: { type: String },
	place: { type: String },
	num_stars: { type: Number, min: 1, max: 5},
	amenitites: { type: String }
});

var thingSchema = new Schema ({
	name: { type: String },
	place: { type: String },
	age_range: { type: String }
});

var restaurantSchema = new Schema({
	name: { type: String },
	place: { type: String },
	cuisine: { type: String },
	price: { type: Number, min: 1, max: 5}
});

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingToDo = mongoose.model('ThingToDo', thingSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Place: Place, Hotel: Hotel, ThingToDo: ThingToDo, Restaurant: Restaurant }