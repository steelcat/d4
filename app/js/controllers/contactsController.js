d4.controller('contactsController', ['$scope', '$rootScope', '$firebaseObject', 'fbURL', 'firebaseFactory', '$location', function ($scope, $rootScope, $firebaseObject, fbURL, firebaseFactory, $location) {
	$scope.contacts = firebaseFactory.contacts();
	$scope.go = function (path) {
		$location.path(path);
	};
}]);