// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  fname: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  language: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
});

/* To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema) */
const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;
