import React from 'react'
import '../App.css'
import Projectbox from './Projectbox'
import amazon from '../1.png'
import musicplayer from '../2.png'
import expense from '../3.png'

function Projects() {
  return (
    <div  className='mt-40 flex justify-center items-center flex-col tracking-[1px] bg-black'  style={{fontFamily:'Oswald'}}>


        <h1 className='text-white text-center text-[2rem]'>Projects</h1>
    <p className='text-white text-center'>click on any project to learn more!
</p>
        <div className='max-w-[100%] w-[90%] m-auto flex justify-center items-center flex-col w-[100%] py-2 px-4'>
       <div className='lg:flex justify-center items-center max-w-[100%] w-[90%] m-auto'>
           <Projectbox description='A simple Amazon clone that uses firebase login' link='https://fir-4310b.web.app/' image={amazon} name ='Amazon Clone' tags={['react ', 'firebase' , 'material ui']} />
           <Projectbox description='A simple Amazon clone that uses firebase login' link='https://fir-4310b.web.app/' image={musicplayer} name ='Amazon Clone' tags={['react ', 'firebase' , 'material ui']} />
           </div>

           <div id='projects' className='lg:flex justify-center items-center max-w-[100%] w-[90%] m-auto '>

           <Projectbox description='A simple Amazon clone that uses firebase login' link='https://fir-4310b.web.app/' image={expense} name ='Amazon Clone' tags={['react ', 'firebase' , 'material ui']} />
           <Projectbox description='A simple Amazon clone that uses firebase login' link='https://fir-4310b.web.app/' image={amazon} name ='Amazon Clone' tags={['react ', 'firebase' , 'material ui']} />

           </div>
           </div>
    </div>
  )
}

export default Projects