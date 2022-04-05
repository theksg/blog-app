import { Link } from "react-router-dom";
import "./topbar.css"
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles'


const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const user=false;


const Topbar = () => {
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
                        <li className="topListItem">                        
                        {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="topRight">

                    {user?(
                        <>
                    <img
                        className="topImageIcon"
                        src="https://img.joomcdn.net/1f2187be68327142f82d31cf0e54d47e561c373c_original.jpeg"
                        alt="Profile"
                    ></img>
                    <i class="topSearchIcon fas fa-search"></i></>
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