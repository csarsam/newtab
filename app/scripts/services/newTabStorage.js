'use strict';

newtabApp.factory('newTabStorage', function () {
	var STORAGE_ID = 'newtablinks';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (links) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(links));
		}
	};
});