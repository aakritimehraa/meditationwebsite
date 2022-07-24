import React, { useState } from 'react'
import Toggle from '../toggle.js'
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from '../themeContext.js';

function Header() {

  const [menu, setMenu] = useState(false)
  const { theme} = React.useContext(ThemeContext);

  return (
    <>

      <div className='hidden header flex justify-between items-center'>
        <h1 className='py-2 ' style={{ fontFamily: 'Josefin Sans' }}>A<sub>M</sub></h1>
        <p onClick={() => setMenu(true)} className=' text-white'><ImMenu fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} />  </p>
      </div>
      {menu ?
        <div className='menu '>

          <p onClick={() => setMenu(false)} className='float-right m-4'><AiOutlineClose fontSize='1.25rem' /></p>
          <ul className='flex justify-between items-center flex-col pr-10 mr-[20px] w-[100%] relative' style={{ fontFamily: 'Belleza' }} >
            <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold  text-gray-900 py-2 px-4 rounded-full hover:bg-pink-100 hover:text-black transition-all'><p className=' border-pink-100 '>Home</p></li>
            <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Projects</li>
            <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Contact</li>
            <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Resume</li>
            <li>          <Toggle />
            </li>
          </ul>

        </div>
        : null
      } 
      <div id='header' className=' header fixed top-0 z-10   w-[100%] md:w-[60%]  sm:flex justify-between align-center pt-4  md:text-[1rem]  lg:text-[1.25rem]'>
        <h1 className='py-2' style={{ fontFamily: 'Josefin Sans' }}>A<sub>M</sub></h1>
        <ul className='flex justify-between items-center pr-10 mr-[20px] w-[90%] relative' style={{ fontFamily: 'Belleza' }} >
          <li className='ml-[4%]  font-semibold  text-gray-900 py-2 px-6 rounded-full hover:bg-pink-100 hover:text-black transition-all'><p className=' border-pink-100 border-b-2'>Home</p></li>
          <li className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Projects</li>
          <li className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Contact</li>
          <li className='ml-[4%] mr-[100px] font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Resume</li>
          <li>          <Toggle />
          </li></ul>

      </div>
    </>
  )
}

export default Header