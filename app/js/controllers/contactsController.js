d4.controller('contactsController', ['$scope', '$rootScope', '$firebaseObject', '$location', 'fbURL', 'firebaseFactory', 'redirectFactory', function ($scope, $rootScope, $firebaseObject, $location, fbURL, firebaseFactory, redirectFactory) {
	$scope.contacts = firebaseFactory.contacts();
	$scope.go = function(path) {
		return redirectFactory.redirectPath(path);
	}
}]);