const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Pinterest");
const Schema = mongoose.Schema;

// Define the post schema
const postSchema = new Schema({
  postText: {
    type: String,
    required: true,
  },
  user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
