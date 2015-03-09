d4.factory('firebaseFactory', ['fbURL', '$firebaseObject', '$firebaseArray', function (fbURL,$firebaseObject,$firebaseArray) {
	var fb = {},
		ref = new Firebase(fbURL);

	// Вывод списка контактов
	fb.contacts = function() {
		return $firebaseArray(ref);
	};

	// Вывод конкретного контакта
	fb.contact = function(id) {
		var url = fbURL+id,
			ref = new Firebase(url);
		return $firebaseObject(ref);
	};

	// Добавление контакта
	fb.addContact = function(contact){
		return $firebaseArray(ref).$add(contact);
	};

	// Редактирование контакта
	fb.editContact = function(contact){
		return contact.$save();
	};

	// Удаление контакта
	fb.deleteContact = function(id){
		var url = fbURL+id,
			ref = new Firebase(url);
		return $firebaseObject(ref).$remove();
	};
	return fb;
}]);