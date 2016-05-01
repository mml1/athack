var athAppModule = angular.module("athApp", ["ngRoute"]);
athAppModule.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when("/question", {
		templateUrl:"../static/partials/question.html"
	})
	.when("/resources", {
		templateUrl:"../static/partials/resources.html"
	})
	.when("/question", {
		templateUrl:"../static/partials/question.html"
	})
	.when("/results",{
		templateUrl:"../static/partials/results.html"
	})
	.otherwise({
		templateUrl: "../static/partials/home.html"
	})		
});