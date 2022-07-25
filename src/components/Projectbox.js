import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import p from '../p1.png'

function Projectbox({name , image , link , tags , description}) {

    const [show , setShow] = useState(false)
    

  return (
    <div className='mt-20 w-[100%] ml-[10px]'>
        <div className='h-[350px] w-[100%] flex justify-center items-center bg-center bg-contain bg-no-repeat' onClick={() => setShow(!show)} style={{backgroundImage:`url(${image})`}}>

          {show ?
          <div style={{background:'rgba(0, 0, 0, 0.8)'}} className='flex justify-center items-center rounded-[4%] h-[350px] w-[100%]  text-white py-8 text-center'>

              <ul className='flex justify-center items-center mt-10'>
                <a href={link}> <li className='mr-10 bg-pink-900 text-[16px] text-white p-2 sm:px-2 rounded-[4%]'>View Live</li></a>
                  <li className='bg-pink-900 text-white text-[16px] p-2 sm:px-2 rounded-[4%]'>Github</li>
              </ul>
          </div>
          :null}
        </div>
    </div>
  )
}

export default Projectbox