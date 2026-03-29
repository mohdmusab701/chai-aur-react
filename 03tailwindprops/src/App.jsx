import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"mohd",
    age:23,
    city:"delhi"
  }

  return (
    <>
    <div className='flex items-center justify-center h-screen '>
      <h1 className=' bg-green-500 text-black px-4 py-2 
      rounded-3xl mb-4'>Tailwind test</h1>
      <Card user="ms" />
      <Card user="john" />
      
   </div>
    </>  
      
  )
}

export default App
