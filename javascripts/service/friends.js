angular
.module('app')
.factory('Friends', function(){
	return {
		get: function(){
			[
				{"name": "Grazia", "age": 20, "isSpecial": true},
				{"name": "Tom", "age": 25, "isSpecial": false}
			]
		}
	}
})