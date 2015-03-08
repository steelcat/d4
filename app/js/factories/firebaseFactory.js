d4.factory('firebaseFactory', ['fbURL', '$firebaseObject', '$firebaseArray', function (fbURL,$firebaseObject,$firebaseArray) {
	var fb = {},
		ref = new Firebase(fbURL),
		sync = $firebaseArray(ref);
	fb.contacts = function() {
		var url = fbURL+'contacts',
			ref = new Firebase(url),
			sync = $firebaseArray(ref);
			console.log(sync);
			return sync;
	};
	fb.contact = function(index) {
		var url = fbURL+'contacts/'+index,
			ref = new Firebase(url),
			sync = $firebaseObject(ref);
			console.log(sync);
		return sync;
	};
	fb.addContact = function(arr){
		return sync.$add(arr);
	}
	return fb;
}]);