athAppModule.factory("questionFactory", function($http){
	var factory = {};
	var questions = [];
	var risk = {};
	factory.getQuestions = function(data, callback){
		// console.log("in factory", data);
		$http.get("/questions", data).success(function(dbinfo){
			callback(dbinfo);
		});
	};
	factory.toResource= function(seNum, daNum){
		risk['se'] = seNum;
		risk['da'] = daNum;
		// console.log(risk);
	};
	
	factory.getRisks = function(cb){
		cb(risk);
	}
	return factory;
});