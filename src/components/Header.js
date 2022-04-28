import React from 'react'

function Header() {
  return (
    <div className='flex justify-between align-center pt-4 text-[1.124rem]'>
      <h1 className='py-2 ' style={{fontFamily:'Josefin Sans'}}>A<sub>M</sub></h1>
      <ul className='flex justify-between align-center w-[60%]' style={{fontFamily:'Belleza'}} >
        <li className='ml-[4%]  font-semibold  text-gray-900 py-2 px-6 rounded-full hover:bg-pink-100 transition-all'><p className=' border-pink-100 border-b-2'>Home</p></li>
        <li className='ml-[4%] font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 transition-all'>About</li>
        <li className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 transition-all'>Projects</li>
        <li className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 transition-all'>Contact</li>     
        <li className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 transition-all'>Resume</li> 
          </ul>

          <p className='py-2 px-4'>dark mode</p>
    </div>
  )
}

export default Header