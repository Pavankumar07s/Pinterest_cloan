var express = require('express');
var router = express.Router();
const userModel=require("./users")
const postModel=require("./post");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.authenticate(new LocalStrategy(userModel.authenticate()))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/createdUser', async function(req, res, next) {
//  let createdUser= await userModel.create({
//   username: "Aayushya",
//   password: "Modi",
//   posts: [],
//   email:"Aayusyatiwari@gmail.com",
//   fullname:"aayushyaTiwari",

//  })
//  res.send(createdUser)
// });
// router.get('/allUser', async function(req, res, next) {
//  let User= await userModel.
//  findOne({_id:'65789791c2e936a7cbe588ff'})
//  .populate('posts')
//   res.send(User)
// });
// router.get('/createPost',async(req,res)=>{
//   let CreatedPost= await postModel.create({
//     postText: "Hello every one",
//     user:'65789791c2e936a7cbe588ff'
//   })
//   let user =await userModel.findOne({_id:'65789791c2e936a7cbe588ff'})
//   user.posts.push(CreatedPost._id)
//   await user.save();
//   res.send("done")
// })

//register
router.post('/register',(req,res)=>{
const { username, email, fullname } = req.body;
const userData = new userModel({ username, email, fullname });

userModel.register(userData,req.body.password)
.then(function(){
  passport.authenticate('local')(req,res,function(){
    res.redirect('/profile')
  })
})

})
router.get('/profile',isLoggedIn,(req,res)=>{
  res.send("You are on profile page")
})
//login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

//logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect('/')

}

module.exports = router;
