module.exports = function(app, io){
	
	app.get('/', function(req, res){
	var hotels, things;
		Hotel.find().exec(function(err, hotels){
			hotels = hotels;
			ThingToDo.find().exec(function(err, things){
				things = things;
				Restaurant.find().exec(function(err, restaurants){
					res.render('index', { hotels: hotels, things: things, restaurants: restaurants });
				});
			});
		});
	});

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	});

	// handle any errors
	app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    console.log({error: err});
	    res.render('error', { errors: err });
	});
}