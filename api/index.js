const express=require('express');
const app=express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const PORT=process.env.PORT || 5000;
const authRoute=require("./routes/auth");

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/auth",authRoute);

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})

app.get('/', function (req, res) {
  res.send('hello world')
})