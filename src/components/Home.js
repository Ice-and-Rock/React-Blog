import React from 'react'
import useFetch from "./useFetch.js";
import BlogData from "../data/BlogData.json"
import BlogList from "./BlogList.js"


const Home = () => {
    const {
        data: fetchedBlogs,
        isPending,
        error,
    } = useFetch("http://localhost:3002/blogs");

    console.log(fetchedBlogs)
    
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div> Waiting for data... </div>}
      {fetchedBlogs && <BlogList blogs={fetchedBlogs} title="All Blogs!" />}
      
    </div>
  );
};
export default Home;
