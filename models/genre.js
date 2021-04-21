const mongoose = require('mongoose');
const { Schema } = mongoose;

const GenreSchema = new Schema({
    name : { type : String, required : true, maxLength : 100, minLength : 3}
})

GenreSchema.virtual('url').get(()=>{
    return '/catalog/genre/' + this._id;
})

module.exports = mongoose.model('Genre', GenreSchema);