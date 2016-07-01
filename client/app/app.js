'use strict';

angular.module('testApp1App', ['testApp1App.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
