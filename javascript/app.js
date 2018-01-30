
var app = angular.module("main", []);

var mainController = function($scope){
    $scope.message = "dhelloooo";
};

app.controller("mainController", mainController);