var mongoose = require("mongoose");
var Question = mongoose.model("Question");
//immediate function
module.exports = (function(){
	return {
		index: function(req, res){
		Question.where('category ').in(['b',req.body.category]).exec(function(req,questions){
			if (err) {
				console.log('get questions errors',err)
			}else{
				res.json(questions);
			}
		})

		}
		// create: function(req, res){

		// }, 
		// delete: function(req, res){
			
		// }

	}
})();