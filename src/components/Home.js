import React from "react";
import useFetch from "./useFetch.js";
import BlogList from "./BlogList.js";

const Home = () => {
  const {
    data: fetchedBlogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div> Waiting for data... </div>}
      {fetchedBlogs && <BlogList fetchedBlogs={fetchedBlogs} title="All Blogs!" />}
    </div>
  );
};
export default Home;
