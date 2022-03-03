import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
    const location =useLocation()
    const postID=location.pathname.split('/')[2]

    useEffect(()=>{
        const getPost= async()=>{
            const res= await axios.get('/posts/'+postID);
            console.log(res)
        }
        getPost();
    },[postID])
  return (
  <div className="singlePost">
      <div className="singlePostWrapper">
          <img src="https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/story_full_width/5c6n24n4pm_mountains_hero.jpg" alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
              Lorem ipsum dolor sit amet.

              <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
          </h1>

          <div className="singlePostInfo">
              <span className="singlePostAuthor">Author:<b> Saksham</b></span>
              <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate libero eius, vitae voluptatum natus similique saepe iure facilis ipsum voluptatibus pariatur minus praesentium officia accusamus delectus, fugit facere distinctio sequi. Quas quos quibusdam iste asperiores! Dolor accusamus pariatur debitis nemo neque ex voluptatibus consequatur, ut quod dolorum temporibus sequi voluptas quae delectus laudantium iusto odit ab blanditiis ea eum quo! Debitis exercitationem ipsum dolorum! Pariatur dolores cum dolore possimus dolorum ipsum iure maxime beatae et. Fugit mollitia optio deleniti labore quas. Suscipit, esse quis dignissimos ipsum totam cupiditate recusandae assumenda magni, commodi officiis sit provident velit tempore voluptates quasi. Illum, quibusdam non expedita molestiae, recusandae voluptate omnis at explicabo quidem inventore nemo harum suscipit distinctio nostrum possimus ipsum adipisci? Assumenda accusamus quis nam? Magni enim voluptates accusamus ipsum unde, facilis iste atque quisquam consequuntur, eaque quam iure quo, doloribus saepe neque. Ab, id aliquam explicabo dolore quidem facere voluptas ipsa in veniam commodi deleniti adipisci perspiciatis ducimus consectetur, nobis vitae, a consequatur voluptates sapiente asperiores? Explicabo nisi neque rem cupiditate earum autem, fuga corrupti culpa nihil tenetur ipsam sunt, facilis ratione inventore doloribus cumque unde distinctio assumenda perferendis excepturi molestiae molestias. Nihil dolores, illum magnam error magni saepe, deserunt laboriosam vitae similique harum doloremque quod eum laudantium officia quidem veritatis reprehenderit molestiae provident! Ipsa in harum nam cum inventore! Fugit, magnam! Ex, at tempore soluta magni distinctio vel esse sapiente culpa aut earum tempora eum pariatur inventore commodi repudiandae praesentium! Laboriosam similique nesciunt ex sunt officiis neque maiores, consectetur adipisci.
          </p>
      </div>
  </div>);
}
