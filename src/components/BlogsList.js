import React from 'react'

function BlogsList ({blogs,title})  {
    
  return (
    <div>
        <h2>{title}</h2>
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