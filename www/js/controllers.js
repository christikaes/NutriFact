angular.module('starter.controllers', [])

.controller('NutriCtrl', function($scope) {
  $scope.cameraCapture = function() {
    navigator.camera.getPicture(function(result) {
        $scope.imageUri = result;
        alert(result);
      }, function(err) {
        alert(err);
      }, { 
        destinationType: Camera.DestinationType.FILE_URI
      });
  };
});

