athAppModule.controller("questionsController", function($scope, $location, $routeParams, questionFactory){
	$scope.category = $routeParams.category;
	// console.log($scope.category);
	$scope.questionArray;
	$scope.currentQuestion;
	$scope.domesticAbuseScore;
	$scope.sexualExploitation;	
	// var last_ind;

	$scope.startSurvey = function(category) {
		$location.path("/question").search({category: category});

	}
	questionFactory.getQuestions({category: $scope.category}, function(questionArray) {
			$scope.questionArray = questionArray;
			var test_shuffle = shuffle($scope.questionArray);
			// last_ind = $scope.questionArray.length - 1;
			setCurrent();
	});

	function setCurrent(){
		if ($scope.questionArray.length !==0) {
			$scope.currentQuestion = $scope.questionArray[$scope.questionArray.length - 1];
			// console.log($scope.currentQuestion)
			$scope.questionArray.pop();
			
		}else{
			questionFactory.toRescource($scope.sexualExploitation,$scope.domesticAbuseScore);
			$location.path('rescource');
		};
		// console.log("questionA", $scope.questionArray);
	}
	$scope.next= function(num, keyword){
		// console.log(keyword, "in next", $scope.currentQuestion)
		setCurrent();
		if (keyword ==='b') {
			$scope.domesticAbuseScore +=num;
			$scope.sexualExploitation +=num;
		}else if(keyword =='s'){
			$scope.sexualExploitation +=num;
		}else if(keyword =='d'){
			$scope.domesticAbuseScore +=num;
		};
	}




	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

});