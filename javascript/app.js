
var app = angular.module("main", []);

var mainController = function($scope){
    $scope.message = "dhelloooo";
    $scope.searchitem = "test";
};

var scrollOnClick = function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var target;
        if (idToScroll) {
          target = $(idToScroll);
        } else {
          target = $($elm);
        }
        $("html, body").animate({scrollTop: $(target).offset().top}, "slow");
      });
    }
  }
}

app.controller("mainController", mainController);

app.directive("scrollOnClick", scrollOnClick);
// $("#scroll-on-click > a").click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, slow);
//     return false;
// });