const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookInstanceSchema = new Schema({
    book : { type: Schema.Types.ObjectId, ref : 'Book', required : true},
    imprint : {type : String, required : true},
    status : {type :String, required : true, enum : ['Available', 'Maintainance', 'Loaned', 'Reserved'], default : 'Maintainance'},
    due_date : {type : Date, default : Date.now}
})

BookInstanceSchema.virtual('url').get(()=>{
    return '/catalog/bookinstance/' + this._id;
})

module.exports = mongoose.model('BookInstance', BookInstanceSchema);