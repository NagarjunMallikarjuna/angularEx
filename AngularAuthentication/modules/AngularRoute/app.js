var myApp = angular.module('myApp', [ 'ngRoute' ]);

myApp.config([ '$routeProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/home', {
		templateUrl : 'Home.html',
		controller : 'mainController'
	}).when('/about', {
		templateUrl : 'About.html',
		controller : 'aboutController'
	}).when('/contact', {
		templateUrl : 'Contact.html',
		controller : 'contactController'
	});
	$locationProvider.html5Mode(true);
} ]);

myApp.controller('mainController', function($scope) {
	$scope.message = "Home controller called..!!";
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'About controller called...!!';
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'contact controller called ..!!';
});