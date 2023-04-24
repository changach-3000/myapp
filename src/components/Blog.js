import React, {useState} from 'react'
import BlogsList from './BlogsList';

function Blogs () {
  const [blogs, setBlogs] = useState([
   {universe:'marvel',superhero:'ironman',id:1},
   {universe:'DC',superhero:'aquaman',id:2},
   {universe:'disney',superhero:'poccahontas',id:3}
  ]);
  return (

    <div>
     <BlogsList blogs={blogs} title="All Universes"/>
    </div>
  )
}

export default Blogs