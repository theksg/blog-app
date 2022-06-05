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
        const newPost={
            userId:user._id,
            username,
            email
        }
        try{
            const res=await axios.put(`/users/${user._id}`,newPost)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            window.location.replace("/");
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
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src={user.profilePic} alt="" />

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
            <Sidebar />
        </div>);
}
