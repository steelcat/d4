d4.factory('firebaseFactory', ['fbURL', '$firebaseObject', '$firebaseArray', function (fbURL,$firebaseObject,$firebaseArray) {
	var fb = {},
		ref = new Firebase(fbURL),
		sync = $firebaseArray(ref);
	fb.contacts = function() {
		var url = fbURL,
			ref = new Firebase(url),
			sync = $firebaseArray(ref);
		return sync;
	};
	fb.contact = function(id) {
		var url = fbURL+id,
			ref = new Firebase(url),
			sync = $firebaseObject(ref);
		return sync;
	};
	fb.addContact = function(contact){
		return sync.$add(contact);
	};
	fb.editContact = function(contact){
		console.log(contact);
		return contact.$save();
	};
	fb.deleteContact = function(contact){
		return sync.$remove(contact);
	};
	return fb;
}]);