const express=require('express');
const app=express();

const cors = require('cors')
app.use(cors())

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const PORT=process.env.PORT || 50000;
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute=require("./routes/categories");

const multer=require("multer")

const cloudinary = require("cloudinary").v2;
const fs = require('fs-extra')

// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
if (!fs.existsSync("./images")) {
  fs.mkdirSync("./images");
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key:  process.env.API_KEY,
  api_secret:  process.env.API_SECRET,
});

async function uploadToCloudinary(locaFilePath) {
  
  // locaFilePath: path of image which was just
  // uploaded to "uploads" folder

  var mainFolderName = "blog";
  // filePathOnCloudinary: path of image we want
  // to set when it is uploaded to cloudinary
  var filePathOnCloudinary = 
      mainFolderName + "/" + locaFilePath;
      filePathOnCloudinary=filePathOnCloudinary.replace("\\", "/")

  console.log(filePathOnCloudinary)

  return cloudinary.uploader
      .upload(locaFilePath, { public_id: filePathOnCloudinary })
      .then((result) => {

          // Image has been successfully uploaded on
          // cloudinary So we dont need local image 
          // file anymore
          // Remove file from local uploads folder
          fs.unlinkSync(locaFilePath);

          return {
              message: "Success",
              url: result.url,
          };
      })
      .catch((error) => {

          // Remove file from local uploads folder
          console.log(error)
          fs.unlinkSync(locaFilePath);
          return { message: "Fail" };
      });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"),async (req, res) => {
  var locaFilePath = req.file.path;
  try{
    var result = await uploadToCloudinary(locaFilePath);
    console.log(result)
    res.send(result)
  }
  catch(error){
    console.log(error)
  }
});

app.use(express.json())

const url='mongodb://localhost:27017/blog'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories",categoryRoute);

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})

app.get('/', function (req, res) {
  res.send('hello world')
})