import "./post.css";


export default function Post({post}) {
  return (
      <>
      <div className="post">
        {post.photo &&
        (<img 
        src={post.photo} 
        alt="" 
        className="postImg" />)}
        <div className="postInfo">
            <div className="postCategories">
              {post.categories.map(cur_category=>(
                <span className="postCategory">{cur_category}</span>
              ))}
            </div>
            <span className="postTitle">{post.title}</span>
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
