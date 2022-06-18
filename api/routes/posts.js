const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const cloudinary = require("cloudinary").v2;


//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } 
      catch (err) {
        res.status(500).json(err);
      }
    } 
    else {
      res.status(401).json("You can update only your post!");
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        if(post.photo!=""){
          let pos=post.photo.search("blog");
          let public_id=post.photo.slice(pos,-4);
          console.log(public_id)
          await cloudinary.uploader.destroy(public_id)
          .then(res=>{
            console.log(res)
          })
          .catch(error=>{
            console.log(error)
          })
        }
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } 
      catch (err) {
        res.status(500).json(err);
      }
    } 
    else {
      res.status(401).json("You can delete only your post!");
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.username;
  const category = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } 
    else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } 
    else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;