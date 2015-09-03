'use strict';

angular.module('minterestApp')
  .controller('NewCtrl',['$scope', '$http', 'Auth', '$location', function ($scope, $http, Auth, $location) {
      $scope.mint = { user: Auth.getCurrentUser().name };

      $scope.submitMint = function() {
          $http.post('/api/mints', $scope.mint).
          then(function() {
              $location.path('/');
          });
      };
}]);