var express = require('express');
var router = express.Router();
const userModel=require("./users")
const postModel=require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/createdUser', async function(req, res, next) {
 let createdUser= await userModel.create({
  username: "Aayushya",
  password: "Modi",
  posts: [],
  email:"Aayusyatiwari@gmail.com",
  fullname:"aayushyaTiwari",

 })
 res.send(createdUser)
});
router.get('/allUser', async function(req, res, next) {
 let User= await userModel.
 findOne({_id:'65789791c2e936a7cbe588ff'})
 .populate('posts')
  res.send(User)
});
router.get('/createPost',async(req,res)=>{
  let CreatedPost= await postModel.create({
    postText: "Hello every one",
    user:'65789791c2e936a7cbe588ff'
  })
  let user =await userModel.findOne({_id:'65789791c2e936a7cbe588ff'})
  user.posts.push(CreatedPost._id)
  await user.save();
  res.send("done")
})

module.exports = router;
