d4.factory('firebaseFactory', ['fbURL','$firebaseArray', function (fbURL,$firebaseArray) {
	var fb = {},
		ref = new Firebase(fbURL),
		sync = $firebaseArray(ref);
	fb.contacts = function() {
		var url = fbURL+'contacts',
			ref = new Firebase(url),
			sync = $firebaseArray(ref);
			return sync;
	};
	fb.contact = function(index) {
		var url = fbURL+'contacts/'+index,
			ref = new Firebase(url),
			sync = $firebaseArray(ref);
			console.log(sync);
		return sync;
	};
	return fb;
}]);