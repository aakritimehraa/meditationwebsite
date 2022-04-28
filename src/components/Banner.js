import React from 'react'
import li from '../li.png'
import gi from '../gi.png'
import mi from '../mi.png'
function Banner() {
  return (
    <div className='mt-12 w-[100%] flex justify-center flex  justify-between align-start'>
       
       <div>
        <h1 className='font-semibold text-[#111827] pt-10 mt-20 tracking-[px] max-w-[95%] flex-1 text-sm leading-tight md:leading-normal md:order-1 sm:text-5xl'>
       Hi, I'm <span className='text-pink-900'> Aakriti</span>. I'm a Front-End Developer based in India.
        </h1>
        <div  className='flex mt-10'>
            <img className='h-[2rem] mr-4' src={li}/>
            <img className='h-[2rem] mr-4' src={gi} />
            <img className='h-[2rem]' src={mi} />

        </div>
        </div>
              <img className='rounded-[50%] object-contain h-[200px] w-[200px] pt-10 mt-20 flex-1 flex-shrink' src='https://png.pngitem.com/pimgs/s/140-1403974_text-child-communication-girl-on-computer-clipart-hd.png' />

    </div>
  )
}

export default Banner