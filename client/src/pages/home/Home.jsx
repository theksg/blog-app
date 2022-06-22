import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Home = () =>{
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
        <Header/>
        <div className="home">
            <Posts posts={posts}/>
        </div>
        </>
    )
}

export default Home;