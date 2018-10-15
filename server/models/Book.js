const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
  name:{
    type:String,
    required: true,
  },
  author:{
    type:String,
    required: true,
  },
  review:{
    type:String,
    default: 'not availible', 
  },
  pages:{
    type:String,
    default: 'not availible', 
  },
  rating:{
    type:Number,
    required: true,
    min:1,
    max:5    
  },
  price:{
    type:String,
    default: 'not availible',
  },
  ownerId:{
    type:String,
    required: true,
  },

},{timestampts:true});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book };