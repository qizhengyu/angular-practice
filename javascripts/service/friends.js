angular
.module('app')
.factory('Friends', function(){
	return {
		get: function(){
			return [
				{"name": "Grazia", "age": 20, "isSpecial": true},
				{"name": "Tom", "age": 25, "isSpecial": false}
			]
		}
	}
});