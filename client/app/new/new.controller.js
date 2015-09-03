'use strict';

angular.module('minterestApp')
  .controller('NewCtrl', function ($scope, $http, Auth, $location) {
    $scope.mint = { username: Auth.getCurrentUser() };

    $scope.submitMint = function() {
        $http.post('/api/mints', $scope.mint, function(err) {
            if(err) {
                console.log("Error: " + err);
            } else {
                $scope.mint = {};
                $location.path('/');
            }
        });
    }
  });
