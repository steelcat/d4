var d4 = angular.module('d4', ['ngRoute', 'firebase']);

d4.value({
	'fbURL': 'https://loftdz4.firebaseio.com/'
});

d4.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/contacts.html',
			controller: 'contactsController'
		})
		.when('/contact/:index', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		})
		.otherwise({ redirectTo: '/' });
}]);