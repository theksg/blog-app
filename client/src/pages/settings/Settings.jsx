import "./settings.css"
import Sidebar from "./../../components/sidebar/Sidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useContext } from "react";
import { Context } from "./../../context/Context";


const buttonTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
    },
});


export default function Settings() {
    const {user}=useContext(Context)
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
                        <input type="file" id="fileInput" style={{ display: "none" }} />

                    </div>
                    {/* <label>Username</label>
                    <input type="text" placeholder="Safak" name="name" /> */}
                    <div className="settingsTF">
                        <TextField id="filled-basic" label="Username" variant="filled" type={"text"} fullWidth/>

                    </div>
                    <div className="settingsTF">
                        <TextField id="filled-basic" label="E-Mail" variant="filled" type={"email"} fullWidth/>

                    </div>
                    <div className="settingsTF">
                        <TextField id="filled-basic" label="Password" variant="filled" type={"password"} fullWidth />

                    </div>
                    {/* <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" /> */}
                    <div className="updateButton">
                        <ThemeProvider theme={buttonTheme}>
                            <Button
                                variant="outlined"
                            >Update</Button>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
            <Sidebar />
        </div>);
}
