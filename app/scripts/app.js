'use strict';

/**
 * @ngdoc overview
 * @name contactsListApp
 * @description
 * # contactsListApp
 *
 * Main module of the application.
 */
angular.module('contactsListApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/viewcontacts/:index', {
        templateUrl: 'views/viewcontacts.html',
        controller: 'viewContactCtrl',
        controllerAs: 'viewContact'
      })
	  .when('/add', {
		templateUrl: 'views/addContacts.html',
		controller: 'addContactCtrl'
      })
	  .when('/edit/:index', {
		templateUrl: 'views/addContacts.html',
		controller: 'editContactCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });
