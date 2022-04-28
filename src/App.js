import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Projects from './components/Projects'
import './App.css'
import './index.css'

function App() {
  return (
    <div className='w-[100%] h-[200vh]  bg-gradient-to-tl from-indigo-100 via-pink-100 to-white-100' > 
    <div className='max-w-[60%] w-[60%] h-screen m-auto '>

      <Header />
      <Banner />
      <Projects />
    </div>


    </div>
  )
}

export default App