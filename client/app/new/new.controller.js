'use strict';

angular.module('minterestApp')
  .controller('NewCtrl', function ($scope, $http, Auth, $location) {
    $scope.mint = { username: Auth.getCurrentUser().name };

    $scope.submitMint = function() {
        $http.post('/api/mints', $scope.mint).
        then(function(response) {
            console.log(response);
        });
    }
  });
