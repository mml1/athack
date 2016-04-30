var mongoose = require("mongoose");
var Factor = mongoose.model("Factor");
//immediate function
module.exports = (function(){
	return {
		index: function(req, res){
			Factor.find({}, function(err, factors){
				if(err){
					console.log("db is empty")
				} else {
					res.json(factors);
				}
			});

		}, 
		create: function(req, res){

		}, 
		delete: function(req, res){
			
		}

	}
})();