import React from "react";

const BlogList = ({ blogs, title, }) => {
  console.log("blogs being called");

  return (
    <div classname="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <p>{blog.date}</p>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
