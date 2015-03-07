d4.controller('contactController', ['$scope', '$routeParams', '$firebaseObject', 'fbURL', 'firebaseFactory', function ($scope, $routeParams, $firebaseObject, fbURL, firebaseFactory) {
	var index = $routeParams.index;
	$scope.contact = firebaseFactory.contact(index);
	console.log($scope.contact);
}]);