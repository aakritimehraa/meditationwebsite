import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Projects from './components/Projects'
import './App.css'
import './index.css'


function App(){


 
  return (
    <div className='w-[100%] h-[200vh]' > 
  <div className='max-w-[100%] w-[96%] md:max-w-[60%] md:w-[60%] h-screen m-auto '>
      <Header />
      <Banner />
      <Projects />
    </div>
  

    </div>
  )
}

export default App