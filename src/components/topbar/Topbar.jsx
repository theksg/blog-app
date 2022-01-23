import "./topbar.css"


const Topbar = () =>{
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImageIcon"
                src="https://img.joomcdn.net/1f2187be68327142f82d31cf0e54d47e561c373c_original.jpeg"
                alt="Profile"
                ></img>
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
        </>

    )
}

export default Topbar;