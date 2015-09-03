'use strict';

angular.module('minterestApp')
  .controller('MainCtrl', ['$scope', '$http', 'socket', 'auth', function ($scope, $http, socket, Auth) {
    $scope.mints = [];

    $http.get('/api/mints').success(function(mints) {
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
