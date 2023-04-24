import React from 'react'

function BlogsList (props)  {
    const blogs = props.blogs;

  return (
    <div>
         {
        blogs.map((blog) =>(
          <div key={blog.id}> 
          <h2>{blog.universe} Universe</h2>
          <p>The main superhero is {blog.superhero}</p>
          </div>

        ))
      }
    </div>
  )
}

export default BlogsList