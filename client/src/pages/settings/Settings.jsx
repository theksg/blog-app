import "./settings.css"
import Sidebar from "./../../components/sidebar/Sidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useContext,useState } from "react";
import { Context } from "./../../context/Context";
import axios from "axios";

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
    },
});


export default function Settings() {
    const {user}=useContext(Context)
    const {dispatch,isFetching}=useContext(Context);
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [file, setFile] = useState(null)

    const handleUpdate = async (event) =>{
        const updatedUser={
            userId:user._id,
            username,
            email
        }

        if(file){
            const data=new FormData();
            const filename=Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.photo=filename;
      
            try{
              const res=await axios.post("/upload",data);
              console.log(res);
              updatedUser.profilePic=res.data.url;
            }
            catch(error){
              console.log(error)
            }
          }
        try{
            const res=await axios.put(`/users/${user._id}`,updatedUser)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            window.location.replace("/");
        }
        catch(error){
            console.log(error)
        }
    }

    const handleDelete = async ()=>{
        try{
            await axios.delete(`/users/${user._id}`, {
                data: { userId: user._id },
              });
            dispatch({type:"LOGOUT"});
            // window.location.replace("/");
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Account</span>
                    <span className="settingsTitleDelete" onClick={handleDelete}>Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        
                        {
                            file?(
                                <img
                                src={URL.createObjectURL(file)}
                                />
                              ):(<img src={user.profilePic || "https://cdn.pixabay.com/photo/2013/03/30/00/11/user-97890_960_720.png"} alt="" />)
                        }
                        <IconButton>
                            <label htmlFor="fileInput" className="settingsPPIcon">
                                <AccountCircleIcon />
                            </label>
                        </IconButton>
                        <input type="file" id="fileInput" style={{ display: "none" }}
                        onChange={event=>setFile(event.target.files[0])} />

                    </div>
                    <div className="settingsTF">
                        <TextField id="filled-basic" label="Username" variant="filled" type={"text"} fullWidth
                        value={username}
                        onChange={event=>setUsername(event.target.value)}
                        />

                    </div>
                    <div className="settingsTF">
                        <TextField id="filled-basic" label="E-Mail" variant="filled" type={"email"} fullWidth
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                        />

                    </div>
                    <div className="updateButton">
                        <ThemeProvider theme={buttonTheme}>
                            <Button
                                onClick={handleUpdate}
                                variant="outlined"
                            >Update</Button>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        </div>);
}
