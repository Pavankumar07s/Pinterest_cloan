const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/Pinterest")
// Define the user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type: String, // Assuming posts are strings, you can adjust this based on your actual post schema
  }],
  dp: {
    type: String, // Assuming dp is a URL or file path, adjust accordingly
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
