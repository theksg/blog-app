import "./write.css";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'


const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});


export default function Write() {
  return (
    <div className='write'>
      <img src="https://www.hopkinsmedicine.org/sebin/x/e/syt-teaser-2.jpg" alt="" className="writeTopImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroupTop">
          <label htmlFor="fileInput">
            <AttachFileIcon className="writeIcon"/>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <TextField
            id="filled-basic"
            label="Tilte"
            variant="filled"
            className="writeTitleTF"
          />
        </div>
        <div className="writeFormGroupBottom">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Share your story....."
            className="writeTA"
          />
        </div>
        <div className="writeButton">
        <ThemeProvider theme={buttonTheme}>
        <Button 
        variant="outlined" 
        className="writeButton"
        >Publish</Button>
        </ThemeProvider>
        </div>
      </form>
    </div>);
}
