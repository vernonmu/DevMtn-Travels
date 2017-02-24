angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, $state, mainSrv) {
// console.log("Booked controlled")
// console.log($state.params, mainSrv.travelInfo)

var markedBook = function() {
  for (var i = 0; i < mainSrv.travelInfo.length; i++) {
    // console.log($state.params.id, mainSrv.travelInfo[i].id)
    if ($state.params.id == mainSrv.travelInfo[i].id) {
      $scope.place = mainSrv.travelInfo[i]
    }
  }
};

markedBook();

$scope.myObj = {
  "background": "url("+$scope.place.image+")",
  "background-size": "cover",
  "background-repeat": "no-repeat",
  "background-position": "center center"
}


})
