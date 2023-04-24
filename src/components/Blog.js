import React, {useState} from 'react'

function Blogs () {
  const [blogs, setBlogs] = useState([
   {universe:'marvel',superhero:'ironman',id:1},
   {universe:'DC',superhero:'aquaman',id:2},
   {universe:'disney',superhero:'poccahontas',id:3}
  ]);
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

export default Blogs