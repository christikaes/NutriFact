angular.module('starter.controllers', [])

.controller('NutriCtrl', function($scope, $http) {
  $scope.cameraCapture = function() {
    navigator.camera.getPicture(function(result) {
        // file uri
        $scope.$apply(function() {
          $scope.imageUri = result;
        });

        var uploadUrl = "https://api.idolondemand.com/1/api/sync/ocrdocument/v1";

        var fd = new FormData();
        fd.append("apikey", "dd5e679c-3e9b-4ee6-ab4c-9db34501fb66");
        fd.append("mode", "document_scan");
        fd.append("file", result);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': "multipart/form-data"}
        })
        .success(function(result){
          alert("success " + JSON.stringify(result));
        })
        .error(function(err){
          alert("error " + JSON.stringify(err));
        });

      }, function(err) {
        alert("camera error " + err);
      }, { 
        destinationType: Camera.DestinationType.FILE_URI
      });
  };
});

