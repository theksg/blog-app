import { Link } from "react-router-dom";
import "./topbar.css"
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useContext } from "react";
import { Context } from "../../context/Context";


const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});


const Topbar = () => {
    const {user,dispatch}=useContext(Context);

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"});
    }
    return (
        <>
            <div className="topbar">
                <div className="topLeft">
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i class="topIcon fab fa-twitter-square"></i>
                    <i class="topIcon fab fa-instagram-square"></i>
                    <i class="topIcon fab fa-youtube-square"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/">
                                HOME
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/settings">
                                ABOUT                        
                            </Link>
                        </li>
                        <li className="topListItem">                        
                        <Link className="link" to="/write">
                            WRITE                        
                        </Link>
                        </li>
                        <li className="topListItem">                        
                        <Link className="link" to="/settings">
                            CONTACT                        
                        </Link>
                        </li>
                        <li className="topListItem" onClick={handleLogout}>                        
                        {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="topRight">

                    {user?(
                        <>
                            <Link className="link" to="/settings">
                            <img
                                className="topImageIcon"
                                src={user.profilePic || "https://cdn.pixabay.com/photo/2013/03/30/00/11/user-97890_960_720.png"}
                                alt="Profile"
                            ></img></Link>
                            <i class="fa-solid fa-arrow-right-from-bracket logoutIcon" 
                            onClick={handleLogout}
                            ></i>
                        </>
                    )
                :
                (<>
                <div className="topBarButton">
                    <ThemeProvider theme={buttonTheme}>
                    <Button 
                    variant="outlined" 
                    >
                        <Link className="link" to="/login">
                            LOGIN                        
                        </Link>
                        </Button>
                    </ThemeProvider>
                </div>
                <div className="topBarButton">
                    <ThemeProvider theme={buttonTheme}>
                    <Button 
                    variant="outlined" 
                    >
                        <Link className="link" to="/register">
                            REGISTER                        
                        </Link>
                    </Button>
                    </ThemeProvider>
                </div>
                </>)
                }
                    
                </div>
            </div>
        </>

    )
}

export default Topbar;