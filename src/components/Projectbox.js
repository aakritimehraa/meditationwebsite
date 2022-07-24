import React , { useState } from 'react'
import p from '../p1.png'

function Projectbox() {


    const [show , setShow] = useState(false)
    

  return (
    <div className='mt-20 w-[100%]  mr-10'>
        <div className='h-[350px] w-[100%] rounded-[4%]  bg-no-repeat' onClick={() => setShow(!show)} style={{backgroundImage:`url(${p})`}}>
          
          {show ?
          <div style={{background:'rgba(0, 0, 0, 0.8)'}} className=' rounded-[4%]  text-white h-[100%] py-8 text-center'>
              <p className='text-2xl mt-10'>Amazon Clone</p>
              <p className='font-normal mt-4'>A simple Amazon clone that uses firebase login</p>
              <ul className='flex justify-center align-center mt-10'>
                  <li className='mr-10 bg-white text-black p-2 px-2 rounded-[4%]'>React</li>
                  <li className='mr-10 bg-white text-black p-2 px-2 rounded-[4%]'>Firebase</li>
                  <li className='bg-white text-black p-2 px-2 rounded-[4%]'>Material ui</li>

              </ul>

              <ul className='flex justify-center align-center mt-10'>
                  <li className='mr-10 bg-pink-900 text-white p-2 px-2 rounded-[4%]'>View Live</li>
                  <li className='bg-pink-900 text-white p-2 px-2 rounded-[4%]'>Github</li>
              </ul>
          </div>
          :null}
        </div>
    </div>
  )
}

export default Projectbox