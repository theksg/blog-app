import "./header.css";
import { Link } from "react-router-dom";
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

const Header = () =>{
    const {user,dispatch}=useContext(Context);
    return(
        <div className="header">
            <div className="headerContent">
                <div className="h-primary">
                    BlogBook
                </div>
                <p>Your very own Thought Station !!!</p>
                {
                    user?(
                        <div className="buttons">
                            <div className="topBarButton">
                                <ThemeProvider theme={buttonTheme}>
                                <Button 
                                variant="outlined" 
                                >
                                    <Link className="link" to="/write">
                                        WRITE                        
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
                                        READ                         
                                    </Link>
                                </Button>
                                </ThemeProvider>
                            </div>
                        </div>
                    )
                    :(
                        <div className="buttons">
                            <div className="topBarButton">
                                <ThemeProvider theme={buttonTheme}>
                                <Button 
                                variant="outlined" 
                                >
                                    <Link className="link" to="/login">
                                        SIGN IN                        
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
                                        SIGN UP                        
                                    </Link>
                                </Button>
                                </ThemeProvider>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;