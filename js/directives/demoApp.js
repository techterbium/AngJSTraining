var mod = angular.module("demoApp", []);

mod.controller("DemoController", ['$scope', function ($scope) {
    $scope.message = "Hello Message";
}]);
