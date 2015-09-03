'use strict';

angular.module('minterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wall/:username', {
        templateUrl: 'app/wall/wall.html',
        controller: 'WallCtrl'
      });
  });
