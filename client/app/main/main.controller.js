'use strict';

angular.module('minterestApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.mints = [];

    $http.get('/api/mints').success(function(mints) {
      $scope.mints = mints;
      socket.syncUpdates('thing', $scope.mints);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
