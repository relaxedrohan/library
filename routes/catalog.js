const express = require('express');
const router = express.Router();

const Genre = require('../models/genre')
const Author = require('../models/author')
const Book = require('../models/book');
const BookInstance = require('../models/bookInstance');

const async = require('async')



//BOOK routes

//GET catalog home page
router.get('/', (req, res)=>{
    async.parallel({
        book_count: (callback)=>{
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: (callback)=>{
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: (callback)=>{
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: (callback)=>{
            Author.countDocuments({}, callback);
        },
        genre_count: (callback)=>{
            Genre.countDocuments({}, callback);
        }
    }, (err, results)=>{
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });

});

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', (req, res)=>{
    res.send('NOT IMPLEMENTED: Book create GET');

});

// POST request for creating Book.
router.post('/book/create', (req, res)=>{
    res.send('NOT IMPLEMENTED: Book create POST');
});

// GET request to delete Book.
router.get('/book/:id/delete', (req, res)=>{
        res.send('NOT IMPLEMENTED: Book delete GET');

});

// POST request to delete Book.
router.post('/book/:id/delete', (req, res)=>{
    res.send('NOT IMPLEMENTED: Book delete POST');
});

// GET request to update Book.
router.get('/book/:id/update', (req, res)=>{
    res.send('NOT IMPLEMENTED: Book update GET');
});

// POST request to update Book.
router.post('/book/:id/update', (req, res)=>{
    res.send('NOT IMPLEMENTED: Book update POST');

});

// GET request for one Book.
router.get('/book/:id', (req, res)=>{
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
});

// GET request for list of all Book items.
router.get('/books', (req, res)=>{
    Book.find({}, 'title author')
        .populate('author')
        .exec((err, list_books)=>{
            if(err){return async.next(err)}
            res.render('book_list',{title : 'Book_list', book_list : list_books})
        })
});

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', (req, res)=>{
    res.send('Not Implemented');
});

// POST request for creating Author.
router.post('/author/create', (req, res)=>{
    res.send('Not Implemented');
});

// GET request to delete Author.
router.get('/author/:id/delete', (req, res)=>{
    res.send('Not Implemented');
});

// POST request to delete Author.
router.post('/author/:id/delete', (req, res)=>{
    res.send('Not Implemented');
});

// GET request to update Author.
router.get('/author/:id/update', (req, res)=>{
    res.send('Not Implemented');
});

// POST request to update Author.
router.post('/author/:id/update', (req, res)=>{
    res.send('Not Implemented');
});

// GET request for one Author.
router.get('/author/:id', (req, res)=>{
    res.send('Not Implemented');
});

// GET request for list of all Authors.
router.get('/authors', (req, res)=>{
    Author.find()
          .sort([['family_name', 'ascending']])
          .exec((err, list_author)=>{
            if(err){return next(err)} 
            res.render('author_list', {title:'Author_list', author_list : list_author })
          })
});

//GENRE ROUTES

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', (req,res)=>{
    res.send('Not Implemented');
});

//POST request for creating Genre.
router.post('/genre/create', (req,res)=>{
    res.send('Not Implemented');
});

// GET request to delete Genre.
router.get('/genre/:id/delete', (req,res)=>{
    res.send('Not Implemented');
});

// POST request to delete Genre.
router.post('/genre/:id/delete', (req,res)=>{
    res.send('Not Implemented');
});

// GET request to update Genre.
router.get('/genre/:id/update', (req,res)=>{
    res.send('Not Implemented');
});

// POST request to update Genre.
router.post('/genre/:id/update', (req,res)=>{
    res.send('Not Implemented');
});

// GET request for one Genre.
router.get('/genre/:id', (req,res)=>{
    res.send('Not Implemented');
});

// GET request for list of all Genre.
router.get('/genres', (req,res)=>{
    res.send('Not Implemented');
});


/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', (req, res)=>{
    res.send('Not Implemented');
});

// POST request for creating BookInstance.
router.post('/bookinstance/create', (req, res)=>{
    res.send('Not Implemented');
});

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', (req, res)=>{
    res.send('Not Implemented');
});

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', (req, res)=>{
    res.send('Not Implemented');
});

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', (req, res)=>{
    res.send('Not Implemented');
});

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', (req, res)=>{
    res.send('Not Implemented');
});

// GET request for one BookInstance.
router.get('/bookinstance/:id', (req, res)=>{
    res.send('Not Implemented');
});

// GET request for list of all BookInstance.
router.get('/bookinstances', (req, res)=>{
    BookInstance.find()
        .populate('book')
        .exec((err, list_bookInstance)=>{
            if(err){return next(err)}
            res.render('bookinstance_list', {title : 'bookInstance_list', bookinstance_list: list_bookInstance })
        })    
});

module.exports = router;

