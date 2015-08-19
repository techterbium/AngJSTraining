angular.module("testApp", [])
        .controller("testCtrl", function ($scope) {
    $scope.counter = 0;
    $scope.incrementCounter = function () {
      $scope.counter++;
    };
});
