athAppModule.factory("questionFactory", function($http){
	var factory = {};
	var questions = [];
	factory.getQuestions = function(data, callback){
		// console.log("in factory", data);
		$http.get("/questions", data).success(function(dbinfo){
			callback(dbinfo);
		});
	};
	return factory;
});