'use strict';

/**
 * @ngdoc function
 * @name contactsListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsListApp
 */
angular.module('contactsListApp')
//contacts list
  .controller('MainCtrl', function ($scope,$rootScope,ContactService){
  $rootScope.contacts = ContactService.getContacts();
  $scope.notifyUser = $rootScope.notifyUser;
})

//view contacts
.controller('viewContactCtrl', function ($scope,$rootScope,$routeParams,ContactService){
  var index = $routeParams.index;
  $scope.selectedContact = $scope.contacts[index];
  
  $scope.deleteContact = function (contact) {
	var index = $rootScope.contacts.indexOf(contact);
    $rootScope.contacts.splice(index, 1);
    $rootScope.notifyUser = 'Contact deleted successfully.';
  };
  
})

//add contacts
.controller('addContactCtrl', function ($scope,$rootScope,$location) {
  $scope.path = $location.path();
  $scope.addContact = function () {
	var newContact = $scope.selectedContact;
    newContact.index = $rootScope.contacts.length;
	$rootScope.contacts.push(newContact);
  };
})

//edit contact
.controller('editContactCtrl', function ($scope, $rootScope, $routeParams){
  $scope.index = $routeParams.index;
  $scope.selectedContact = $rootScope.contacts[$scope.index];
})

// services
.service('ContactService', [function () {
  var service = {};

  service.getContacts = function () {
    return contactList;
  }

  // contact list JSON object
  var contactList = [
  {
    "index": 0,
    "firstName": "Tamera",
    "lastName": " Clemons",
    "company": "NAXDIS",
    "email": "tameraclemons@naxdis.com",
    "phone": "+1 (907) 514-3873"
  },
  {
    "index": 1,
    "firstName": "Flynn",
    "lastName": " Bell",
    "company": "ZENCO",
    "email": "flynnbell@zenco.com",
    "phone": "+1 (873) 525-2610",
	"image":"https://unsplash.it/40/40/?random"
  },
  {
    "index": 2,
    "firstName": "Langley",
    "lastName": " Keith",
    "company": "SNORUS",
    "email": "langleykeith@snorus.com",
    "phone": "+1 (956) 426-3532",
	"image":"https://unsplash.it/40/40/?random"
  },
  {
    "index": 3,
    "firstName": "Roman",
    "lastName": " Beasley",
    "company": "HANDSHAKE",
    "email": "romanbeasley@handshake.com",
    "phone": "+1 (877) 421-3505",
	"image":"https://unsplash.it/40/40/?random"
  },
  {
    "index": 4,
    "firstName": "Munoz",
    "lastName": " Smith",
    "company": "EVEREST",
    "email": "munozsmith@everest.com",
    "phone": "+1 (845) 540-2412",
	"image":"https://unsplash.it/40/40/?random"
  }
]
  
  return service;
}]);

