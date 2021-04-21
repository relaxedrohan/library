const Author = require('../models/author');

// Display list of authors
exports.author_list = (req,res)=>{
    res.send('Not implemented : Author list')
};

//Display detail page for a specific author
exports.author_details = (req,res)=>{
    res.send('Not implemented : Author details' + req.params.id)
}

//Display author create form on GET
exports.author_create_get = (req, res)=>{
    res.send('Not Implemented');
};

//Handle author create form on POST
exports.author_create_post = (req, res)=>{
    res.send('Not Implemented');
};

// Display Author delete form on GET.
exports.author_delete_get = (req,res)=>{
    res.send('Not Implemented');
};

// Handle Author delete form on POST.
exports.author_delete_get = (req, res)=>{
    res.send('not implemented')
};

// Display Author update form on GET.
exports.author_update_get = (req,res)=>{
    res.send('not implemented')
;}

// Handle Author update form on POST.
exports.author_update_post = (req,res)=>{
    res.send('not implemented')
};