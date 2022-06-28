import "./post.css";
import {Link} from "react-router-dom";


export default function Post({post}) {
  return (
      <>
      <div className="post">
        <img 
          src={post.photo || "https://i.pinimg.com/736x/29/46/4a/29464aa3c5800484f4577ca0c53f8953--reading-quotes-reading-books.jpg"} 
          alt="" 
          className="postImg" />
        <div className="postInfo">
            <div className="postCategories">
              <span className="postCategory"></span>
              {post.categories.map(cur_category=>(
                <span className="postCategory">{cur_category}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">{post.title}</span>
            </Link>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className="postDesc">
              {post.desc}
            </p>
        </div>
      </div>
      </>
  );
}
