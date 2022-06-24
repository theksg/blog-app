import { useEffect } from "react";
import { useState } from "react";
import ProfileCard from "../../components/profileCard/ProfileCard";
import Posts from "../../components/posts/Posts";
import "./profile.css";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Profile = () =>{
    const [posts,setPosts]=useState([])

    const {search} = useLocation()
    console.log(search)
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res =  await axios.get("/posts"+search)
            console.log(res.data)
            setPosts(res.data)
        }

        fetchPosts();
    },[search])
    return (
        <>
        <ProfileCard/>
        <div className="home">
            <Posts posts={posts}/>
        </div>
        </>
    )
}

export default Profile;