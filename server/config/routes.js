var factors = require("./../controllers/questions.js");

module.exports = function(app){
	app.get("/REPLACE", function(req, res){
		factors.index(req, res);
	});
}