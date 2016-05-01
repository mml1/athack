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
	factory.toRescource = function(seNum, daNum){
		risk['se'] = seNum;
		risk['da'] = daNum;

	};
	
	factory.getRisks = function(cb){
		cb(risk);
	}
	return factory;
});