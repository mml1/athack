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
    $scope.se = (($scope.risks.se/50)*100).toString();
    $scope.da = (($scope.risks.da/52)*100).toString();
    // $scope.se = "50";
    console.log($scope.se, "stringed se");
    console.log($scope.risks);
})


});