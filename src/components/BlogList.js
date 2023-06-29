import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ fetchedBlogs, title, }) => {
  // console.log(fetchedBlogs);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {fetchedBlogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <p>{blog.date}</p>
        </Link>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
