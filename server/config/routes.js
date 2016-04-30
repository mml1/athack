var factors = require("./../controllers/factors.js");

module.exports = function(app){
	app.get("/REPLACE", function(req, res){
		factors.index(req, res);
	});
}