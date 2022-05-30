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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
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