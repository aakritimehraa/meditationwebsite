import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Projects from '../components/Projects'

function Home() {
  return (
    <div className='max-w-[100%] w-[100%] m-auto '>
  <div className='max-w-[100%] w-[96%] md:max-w-[60%] md:w-[60%] m-auto '>
      <Header />
      <Banner />
</div>
      <Projects />
    </div>  )
}

export default Home