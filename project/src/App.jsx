import { useState } from 'react'
import './App.css'
import Background from './components/Background.jsx'
import Foreground from './components/Foreground.jsx'

function App() {
  return (
    <>
      <div className='reletive w-full h-screen bg-[#222831]'>
        <Background />
        <Foreground />
      </div>
    </>
  )
}

export default App
