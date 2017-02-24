angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
  // console.log("Location controlled")
  $scope.travelInfo = mainSrv.travelInfo
})
