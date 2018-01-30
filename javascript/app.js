
var app = angular.module("main", []);

var mainController = function($scope){
    $scope.message = "dhelloooo";
    $scope.searchitem = "test";
};

app.controller("mainController", mainController);