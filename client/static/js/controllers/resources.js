athAppModule.controller("ResourcesController", function($scope, questionFactory, $routeParams, $location){
$scope.banana = "AWESOME";
/*injected JS code*/
// 	(function() {
//   var leaseMeter, meterBar, meterBarWidth, meterValue, progressNumber;

//   /*Get value of value attribute*/
//   var valueGetter = function() {
//     leaseMeter = document.getElementsByClassName('leaseMeter');
//     for (var i = 0; i < leaseMeter.length; i++) {
//       meterValue = leaseMeter[i].getAttribute('value');
//       return meterValue;
//     }
//   }

//   /*Convert value of value attribute to percentage*/
//   var getPercent = function() {
//     meterBarWidth = parseInt(valueGetter()) * 0.10;
//     meterBarWidth.toString;
//     meterBarWidth = meterBarWidth + "%";
//     return meterBarWidth;
//   }

//   /*Apply percentage to width of .meterBar*/
//   var adjustWidth = function() {
//     meterBar = document.getElementsByClassName('meterBar');
//     for (var i = 0; i < meterBar.length; i++) {
//       meterBar[i].style['width'] = getPercent();
//     }
//   }

//   /*Update value indicator*/
//   var indicUpdate = function() {
//     progressNumber = document.getElementsByClassName('progressNumber');
//     for (var i = 0; i < progressNumber.length; i++) {
//       progressNumber[i].innerHTML = valueGetter();
//     }
//   }

//   adjustWidth();
//   indicUpdate();
// })();

  questionFactory.getRisks(function(data){
    $scope.risks = data;
    $scope.se = Math.ceil(($scope.risks.se/50)*100).toString();
    $scope.da = Math.ceil(($scope.risks.da/52)*100).toString();
  
    // $scope.se = "50";
    console.log($scope.se, "stringed se");
    console.log($scope.risks);
    if ($scope.se >= 70) {
    	$scope.se_risk_level = "high";
    	$scope.se_next_step = "contacting emergency services. There is a high probability that the youth is already being exploited."
    }
    else if ($scope.se <= 69 && $scope.se >= 25) {
    	$scope.se_risk_level = "moderate";
    	$scope.se_next_step = "calling someone who can help.  While the youth may not be in immediate danger, the warning signs are sufficient to warrant intervention."
    }
    else if ($scope.se <= 24) {
    	$scope.se_risk_level = "mild";
    	$scope.se_next_step = "talking to the school principal, or someone else who can assisy in monitoring the situation. Even if the risk level is mild now, things can escalate quickly. Stay involved.  Intervention is most effective when problems are caught early."
    }
    if ($scope.da >= 70) {
    	$scope.da_risk_level = "high";
    	$scope.da_next_step = "contacting emergency services. There is a high probability that the youth is already being abused."
    }
    else if ($scope.da <= 69 && $scope.da >= 25) {
    	$scope.da_risk_level = "moderate";
    	$scope.da_next_step = "calling someone who can help.  While the youth may not be in immediate danger, the warning signs are sufficient to warrant intervention."
    }
    else if ($scope.da <= 24) {
    	$scope.da_risk_level = "mild";
    	$scope.da_next_step = "talking to the school principal, or someone else who can assisy in monitoring the situation. Even if the risk level is mild now, things can escalate quickly. Stay involved.  Intervention is most effective when problems are caught early."
    }
})


});