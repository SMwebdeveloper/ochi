import React from 'react'
import Navbar from './components/Navbar'
import LandignPage from './components/LandignPage'
import Marque from './components/Marque'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>      
      <LandignPage/>
      <Marque/>
    </div>
  )
}

export default App