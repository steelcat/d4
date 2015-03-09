d4.factory('redirectFactory', ['$location', function ($location) {
	var rf = {};
	rf.redirectPath = function(url){
		return $location.path(url);
	};
	return rf;
}]);