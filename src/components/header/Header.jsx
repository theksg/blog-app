import "./header.css";

const Header = () =>{
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React and Node</span>
                <span className="headerTitleLarge">Blog App</span>
            </div>
            <img
                className="headerImg"
                src="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt="header"
            ></img>
        </div>
    )
}

export default Header;