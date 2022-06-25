import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";


const Topbar = () => {
    const {user,dispatch}=useContext(Context);

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"});
    }
    return (
        <>
            <div className="topbar">
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topIcon">
                            <i class="fa-solid fa-bookmark"></i>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/">
                                HOME
                            </Link>
                        </li>
                        <li className="topListItem">                        
                        <Link className="link" to="/write">
                            WRITE                        
                        </Link>
                        </li>
                        {
                            user &&
                            (<li className="topListItem">                        
                            <Link className="link" to={`/profile/?username=${user.username}`}>
                                PROFILE                        
                            </Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="topRight">

                    {user&&(
                        <>
                            <Link className="link" to="/settings">
                            <img
                                className="topImageIcon"
                                src={user.profilePic || "https://cdn.pixabay.com/photo/2013/03/30/00/11/user-97890_960_720.png"}
                                alt="Profile"
                            ></img></Link>
                            <i class="fa-solid fa-arrow-right-from-bracket logoutIcon topIcon" 
                            onClick={handleLogout}
                            ></i>
                        </>
                    )
                }
                    
                </div>
            </div>
        </>

    )
}

export default Topbar;