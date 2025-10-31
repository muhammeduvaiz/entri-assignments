const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    },
    isDeleted:{
        type:Boolean,
        required:true
    },

},{timestamps:true});

const bookModel = mongoose.model('Book', bookSchema);
module.exports = bookModel;
