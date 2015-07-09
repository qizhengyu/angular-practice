angular.module('app').factory('Bible', ['$http', function($http){
	return {
		// ['$http', function($http){
			// 		return $http.get('/api/friends.json').then(function(response){
			// 			return response.data;
			// 		})
			// 	}]

		// get: function(){
		// 	return $http.get('/restaurants').then(function(response){
		// 		console.log('response.data', response.data);
		// 		return response.data;
		// 	});
		// }		



		get: function(){

			return [
				{"book": "Genesis", "chapter": 1, "phase": 1,
				"content": "In the beginning God created the heavens and the earth."},
				{"book": "Genesis", "chapter": 1, "phase": 2,
				"content": "The earth was formless and void, and darkness was over the surface of the deep, and the Spirit of God was moving over the surface of the waters."},
				{"book": "Genesis", "chapter": 1, "phase": 3,
				"content": "Then God said, \"Let there be light\"; and there was light."},
				{"book": "Genesis", "chapter": 1, "phase": 4,
				"content": "God saw that the light was good; and God separated the light from the darkness."},
				{"book": "Genesis", "chapter": 1, "phase": 5,
				"content": "God called the light day, and the darkness He called night. And there was evening and there was morning, one day."},
				{"book": "Genesis", "chapter": 1, "phase": 6,
				"content": "Then God said, \"Let there be an expanse in the midst of the waters, and let it separate the waters from the waters.\""},
				{"book": "Genesis", "chapter": 1, "phase": 7,
				"content": "God made the expanse, and separated the waters which were below the expanse from the waters which were above the expanse; and it was so."},
				{"book": "Genesis", "chapter": 1, "phase": 8,
				"content": "God called the expanse heaven. And there was evening and there was morning, a second day."},
				{"book": "Genesis", "chapter": 1, "phase": 9,
				"content": "Then God said, \"Let the waters below the heavens be gathered into one place, and let the dry land appear\"; and it was so."},
				{"book": "Genesis", "chapter": 1, "phase": 10,
				"content": "God called the dry land earth, and the gathering of the waters He called seas; and God saw that it was good."}
			]
		}
	}
}]);