import React,{useState} from 'react'

const Article = () => {

  // let name = 'mario'
  const [name, setName]= useState('mario')
  const [age, setAge]= useState(21)

  const handleclick = () => {
   setName('Luigi');
   setAge(26);
  }

  
  return (
    <div>
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleclick} > Click me</button>
    
    </div>
  )
}

export default Article
