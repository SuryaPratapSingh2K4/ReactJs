import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className= "w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("red")}}
          style={{backgroundColor: "red"}}>Red</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("pink")}}
          style={{backgroundColor: "pink"}}>Pink</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("Orange")}}
          style={{backgroundColor: "Orange"}}>Orange</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("Yellow")}}
          style={{backgroundColor: "Yellow"}}>Yellow</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("Purple")}}
          style={{backgroundColor: "Purple"}}>Purple</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("blue")}}
          style={{backgroundColor: "blue"}}>blue</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("green")}}
          style={{backgroundColor: "green"}}>green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("black")}}
          style={{backgroundColor: "black"}}>black</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          onClick={() => {setColor("brown")}}
          style={{backgroundColor: "brown"}}>brown</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
