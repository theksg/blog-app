import "./profileCard.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
const ProfileCard = () =>{
  const {user,dispatch}=useContext(Context);
    return (
        <div className="profileCard">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div class="our-team">
                    <div class="picture">
                      <img 
                      class="img-fluid" 
                      src={user.profilePic || "https://cdn.pixabay.com/photo/2013/03/30/00/11/user-97890_960_720.png"}/>
                    </div>
                    <div class="team-content">
                      {
                        user.firstname ? (
                          <>
                          <h3 class="name">{user.firstname +` `+ user.lastname}</h3>
                          <h4 class="title">{user.username}</h4>
                          </>
                        ):(
                          <>
                          <h4 class="name">{user.username}</h4>
                          </>
                        )
                      }
                      {
                        user.bio &&(<p>{user.bio}</p>)
                      }
                    </div>
                    <ul class="social">
                      {
                        user.facebook && (<li><a href={user.facebook} class="fa fa-facebook" aria-hidden="true" target="_blank"></a></li>)
                      }
                      {
                        user.linkedin && (<li><a href={user.linkedin} class="fa fa-linkedin" aria-hidden="true" target="_blank"></a></li>)
                      }
                      
                      <li><a href={`mailto:${user.email}`} class="fa-solid fa-envelope" aria-hidden="true" target="_blank"></a></li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default ProfileCard;