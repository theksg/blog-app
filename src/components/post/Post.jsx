import "./post.css";


export default function Post() {
  return (
      <>
      <div className="post">
        <img src="https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/story_full_width/5c6n24n4pm_mountains_hero.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Life</span>
                <span className="postCategory">Music</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem adipisci, est, eaque incidunt saepe id molestiae assumenda dolorum error illo deleniti, ut natus soluta odio ratione animi fugiat! Iure cum provident necessitatibus ipsam perspiciatis illum, vel nesciunt, placeat in nulla repudiandae iste iusto vitae corporis tempora vero sunt eaque.
            </p>
        </div>
      </div>
      </>
  );
}
