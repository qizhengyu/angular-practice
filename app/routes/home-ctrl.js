var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
var _ = require('underscore');

var bibleModel = mongoose.model('bible', {
	'version': String,
	'bookName': String,
	'book': String,
	'chapter': String,
	'verse' : String,
	'verseContent': String});

exports.view = function(req, res, next){
	var bookName = req.query.book || 'Genesis';
	var chapter = req.query.chapter || "1";

	var criteria = {
		"bookName": bookName,
		"chapter": chapter
	};

	var bibleObj;
	var bibleCount;
	var promise = bibleModel.find(criteria).exec();
	promise.then(function(bibles){
		bibleObj = bibles;
		return bibleModel.count({'bookName': bookName, 'verse': '1'});
	}).then(function(count){
		bibleCount = count;		
		res.send({
				bible: bibleObj,
				total: count
			});
	});





	// fs.readFile('./api/bible1.json', function (err, data) {
	//   if (err) throw err;
	//   bibleObj = JSON.parse(data);
	  // bibleObj = data;

				// var books = bibleObj.version;
				// var versionRef = bibleObj.version_ref;
				// var results = [];
				// for(var bookId in books){
				//     if(books.hasOwnProperty(bookId)){
				//     	var bookName = books[bookId].book_name;
				//     	var bookNum = books[bookId].book_nr;
				//     	var book = books[bookId].book;

				//     	for(var chapterId in book){
				//     		if(book.hasOwnProperty(chapterId)){
				//     			var chapter = book[chapterId].chapter;

				//     			for(var verseId in chapter){
				//     				if(chapter.hasOwnProperty(verseId)){
				// 						results.push({
				// 							'version': versionRef,
				// 							'bookName': bookName,
				//     					  	'book': bookNum,
				//     					  	'chapter': chapterId,
				//     					  	'verse' : verseId,
				//     					  	'verseContent': chapter[verseId].verse})
				//     				}
				//     			}

				//     		}
				//     	}

				//     }
				// }
		// bibleModel.collection.drop();
		// while(results.length > 0){
		// 	bibleModel.collection.insert(results.splice(0,1000), function(err, docs){
		// 	if(err){
		// 		console.log('something is wrong, cannot insert', err);
		// 	} else{
		// 		console.log('Inserted! : ', docs.length);
		// 	}
		// });
		// }

	// 	results = bibleModel.find();
	//   res.send(results);
	// });
};

exports.allBookNames = function(req, res, next){
	var criteria = {
		"chapter": "1",
		"verse": "1"
	};

	bibleModel.aggregate([
		{$match: {verse: '1'}},
        {$group: {_id: {book: '$book', bookName: '$bookName'}, total: {$sum: 1}}},
        {$sort: {_id: 1}}
    ], function (err, data) {
        if (err) {
            throw err;
        }
        var result = [];
        data.forEach(function(element, index){
        	result.push({book: element._id.book, bookName: element._id.bookName, total: element.total});
        });
        res.send(result);
        
    });

	// bibleModel.find(criteria, 'bookName book', function (err, data) {
	//   if (err){
	//   	throw err;
	//   } 
	//   return res.send(data);
	// });


 

}