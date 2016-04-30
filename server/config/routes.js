var questions = require("./../controllers/questions.js");

module.exports = function(app){
	app.get("/questions", function(req, res){
		questions.index(req, res);
	});
}