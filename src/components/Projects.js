import React from 'react'
import '../App.css'
import Projectbox from './Projectbox'
function Projects() {
  return (
    <div  className='mt-40 tracking-[1px]'  style={{fontFamily:'Oswald'}}>


        <h1 className='projects-text text-center text-[2rem]'>Projects</h1>
    <p className='projects-text text-center'>click on any project to learn more!
</p>
        
       <div className='lg:flex justify-between items-center'>
           <Projectbox />
           <Projectbox />
           </div>

           <div id='projects' className='lg:flex justify-between  '>

           <Projectbox />
           <Projectbox />

           </div>
    </div>
  )
}

export default Projects