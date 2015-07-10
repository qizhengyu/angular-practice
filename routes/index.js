var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
// var bibleObj = require('./path/api/bible1.json');
var bibleModel = mongoose.model('bible', {
											'version': String,
											'bookName': String,
				    					  	'book': String,
				    					  	'chapter': String,
				    					  	'verse' : String,
				    					  	'verseContent': String});

// var ObjectID = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Duduxiong' });
});


router.get('/restaurants', function(req, res, next) {
	// mongoose.model('restaurants', {name: String});
	mongoose.model('restaurants').find(function(err, restaurants){
	  res.send(restaurants);
	}).limit(20);
});

router.post('/home', function(req, res, next) {
	// var Bible = mongoose.model('bible_nasb', {name: String});
	// var bibleObj = require('/api/bible1.json');

	console.log('bibleObj', bibleObj);
	var bibleObj = {};
	fs.readFile('./api/bible1.json', function (err, data) {
	  if (err) throw err;
	  bibleObj = JSON.parse(data);
	  // bibleObj = data;

				var books = bibleObj.version;
				var versionRef = bibleObj.version_ref;
				var results = [];
				for(var bookId in books){
				    if(books.hasOwnProperty(bookId)){
				    	var bookName = books[bookId].book_name;
				    	var bookNum = books[bookId].book_nr;
				    	var book = books[bookId].book;

				    	for(var chapterId in book){
				    		if(book.hasOwnProperty(chapterId)){
				    			var chapter = book[chapterId].chapter;

				    			for(var verseId in chapter){
				    				if(chapter.hasOwnProperty(verseId)){
										results.push({
											'version': versionRef,
											'bookName': bookName,
				    					  	'book': bookNum,
				    					  	'chapter': chapterId,
				    					  	'verse' : verseId,
				    					  	'verseContent': chapter[verseId].verse})
				    				}
				    			}
				    			
				    		}
				    	}
				        
				    }
				}
		bibleModel.collection.drop();
		while(results.length > 0){
			bibleModel.collection.insert(results.splice(0,1000), function(err, docs){
			if(err){
				console.log('something is wrong, cannot insert', err);
			} else{
				console.log('Inserted! : ', docs.length);
			}
		});
		}
		

	  // results.forEach(function(result){
	  // 		// var bibleModel = new BibleModel(result);
	  // 		BibleModel
	  // 		bibleModel.save(function(error, data){
	  // 			if(error){
	  // 				console.log('error saving');
	  // 			}else{
	  // 				console.log('hey ! saved !');
	  // 			}
	  // 		});
	  // });

	  res.send(results);
	});
});
	

module.exports = router;
