athAppModule.controller("ResourcesController", function($scope, questionFactory, $routeParams, $location){
  questionFactory.getRisks(function(data){
    $scope.risks = data;
    console.log($scope.risks);
  })


});