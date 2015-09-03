'use strict';

angular.module('minterestApp')
  .controller('WallCtrl', ['$scope','$http','$routeParams','Auth','socket',function ($scope, $http, $routeParams, Auth, socket) {
    $scope.mints = [];

    $scope.user = $routeParams.username;

    $http.get('/api/mints/'+$scope.user).success(function(mints) {
      $scope.mints = mints;
      socket.syncUpdates('mint', $scope.mints);
    });

    $scope.mintOwner = function(mint) {
      if(mint.user === Auth.getCurrentUser().name) {
        return true;
      }
      return false;
    };

    $scope.deleteMint = function(mint) {
      $http.delete('/api/mints/' + mint._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('mint');
    });
  }]);
