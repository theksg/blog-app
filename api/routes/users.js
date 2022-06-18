const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const axios = require('axios').default;


//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    const { userID, ...newBody }=req.body;
    req.body=newBody;
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const user = await User.findById(req.params.id);
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      if(updatedUser._doc.profilePic != user.profilePic && user.profilePic!=""){
        try{
          await axios.delete(`http://localhost:${process.env.PORT}/api/file-delete`, {
            data: { link: user.profilePic },
          });
          console.log("Old Photo Delelted Successfully")
        }
        catch(error){
          console.log(error);
        }
      }
      const { password, ...others }=updatedUser._doc;
      res.status(200).json(others);
    } 
    catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  } 
  else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        if(user.profilePic!=""){
          let pos=user.profilePic.search("blog");
          let public_id=user.profilePic.slice(pos,-4);
          console.log(public_id)
          await cloudinary.uploader.destroy(public_id)
          .then(res=>{
            console.log(res)
          })
          .catch(error=>{
            console.log(error)
          })
        }
        const posts= await axios.get('http://localhost:50000/api/posts/?username='+user.username)
        
        posts.data.forEach(async post => {
          await axios.delete(`http://localhost:50000/api/posts/${post._id}`, {
            data: { username: user.username },
          });
        });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } 
      catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    } 
    catch (err) {
      console.log(err)
      res.status(404).json("User not found!");
    }
  } 
  else {
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;