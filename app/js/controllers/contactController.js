d4.controller('contactController', ['$scope', '$routeParams', '$firebaseObject', 'fbURL', 'firebaseFactory', 'redirectFactory', function ($scope, $routeParams, $firebaseObject, fbURL, firebaseFactory, redirectFactory) {
	var id = $routeParams.id;
	$scope.title = 'Контакт';
	if (id==='new') {
		$scope.contactFunc = function(contact) {
			firebaseFactory.addContact(contact).then(redirectFactory.redirectPath('/'));
		}
	} else {
		$scope.contact = firebaseFactory.contact(id);
		$scope.contactFunc = function(contact) {
			firebaseFactory.editContact(contact).then(redirectFactory.redirectPath('/'));
		}
	}
	$scope.contactDel = function(id) {
		firebaseFactory.deleteContact(id).then(redirectFactory.redirectPath('/'));
	}
}]);