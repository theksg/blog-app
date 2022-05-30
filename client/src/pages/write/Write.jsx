import "./write.css";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";


const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});


export default function Write() {

  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setFile]=useState(null);
  const {user} =useContext(Context);

  const handleSubmit = async event =>{
    event.preventDefault();


    const newPost ={
      username:user.username,
      title,
      desc
    }

    if(file){
      const data=new FormData();
      const filename=Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo=filename;

      try{
        await axios.post("/upload",data);
      }
      catch(error){

      }
    }

    try{
      const res=await axios.post("/posts",newPost);
      window.location.replace("/post/"+res.data._id);
    }
    catch(error){
      
    }
  }

  return (
    <div className='write'>
      {
        file &&(
          <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          />
        )
      }
      <img src="https://www.hopkinsmedicine.org/sebin/x/e/syt-teaser-2.jpg" alt="" className="writeTopImg" />
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroupTop">
          <label htmlFor="fileInput">
            <AttachFileIcon className="writeIcon"/>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} 
          onChange={event=>setFile(event.target.files[0])}
          />
          <TextField
            id="filled-basic"
            label="Tilte"
            variant="filled"
            className="writeTitleTF"
            value={title}
            onChange={event=>setTitle(event.target.value)}
          />
        </div>
        <div className="writeFormGroupBottom">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Share your story....."
            className="writeTA"
            value={desc}
            onChange={event=>setDesc(event.target.value)}
          />
        </div>
        <div className="writeButton">
        <ThemeProvider theme={buttonTheme}>
        <Button 
        variant="outlined" 
        className="writeButton"
        type="submit"
        >Publish</Button>
        </ThemeProvider>
        </div>
      </form>
    </div>);
}
