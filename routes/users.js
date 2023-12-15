let mongoose =require('mongoose')
const plm = require('passport-local-mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Pinterest");
//uper wali line se database banega practice name se


//schema matlab aappko ye batana banne wlaa har document main kya kya hoga

let userSchema=mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
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
userSchema.plugin(plm);

module.exports=mongoose.model("user",userSchema);//collection banata hai and aage wale naam se banega 
