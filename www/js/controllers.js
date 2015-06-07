angular.module('starter.controllers', [])

.controller('NutriCtrl', function($scope) {
  $scope.cameraCapture = function() {
    navigator.camera.getPicture(function(result) {
        alert(result);
      }, function(err) {
        alert(err);
      }, { 
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
      });
  };
});

