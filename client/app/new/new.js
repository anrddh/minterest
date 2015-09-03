'use strict';

angular.module('minterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'app/new/new.html',
        controller: 'NewCtrl',
        authenticate: true
      });
  });
