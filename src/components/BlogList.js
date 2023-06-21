import React from 'react'


const BlogList = ({blogs}) => {
  
  console.log("blogs being called")

  return (
    <div>
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
