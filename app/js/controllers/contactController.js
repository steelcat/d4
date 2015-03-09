d4.controller('contactController', ['$scope', '$routeParams', '$firebaseObject', 'fbURL', 'firebaseFactory', function ($scope, $routeParams, $firebaseObject, fbURL, firebaseFactory) {
	var id = $routeParams.id;
	$scope.contact = firebaseFactory.contact(id);
	$scope.editContact = function(contact) {
		firebaseFactory.editContact(contact);
	}
}]);