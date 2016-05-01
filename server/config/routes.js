var questions = require("./../controllers/questions.js");

module.exports = function(app){
	app.get("/questions", function(req, res){
		console.log(req.body);
		questions.index(req, res);
	});
}