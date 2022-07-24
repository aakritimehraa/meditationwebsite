import React from 'react'
import { BsLinkedin} from 'react-icons/bs';
import { BsGithub} from 'react-icons/bs';
import { IoMailSharp} from 'react-icons/io5';

import ai from '../ai.png'
import { ThemeContext } from '../themeContext';

function Banner() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='sm:mt-12 w-[100%] flex justify-center items-center flex-col-reverse lg:flex-row  '>
       
       <div>
        <h1 className='banner-text font-semibold text-[#111827] lg:pt-10 lg:mt-20 tracking-[px] max-w-[100%] flex-1 text-sm leading-tight md:leading-normal md:order-1 text-2xl sm:text-4xl md:text-5xl xl:text-6xl'>
       Hello, I'm <span className='text-pink-900'> Aakriti Mehra</span>.
        </h1>
        <p className='banner-p font-semibold text-[#111827] text-2xl '> I'm a Front-End Developer based in India.</p>
        <div  className='flex mt-10'>

           <BsLinkedin fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'}/>
           <BsGithub fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'} className='icon' />
           <IoMailSharp fontSize='1.25rem' color={theme === 'dark' ? 'white' :'black'} className='icon' />

        </div>
        </div>
              <img className='rounded-[70%] object-contain h-[300px] w-[300px] pt-10 mt-10 flex-1 flex-shrink' src={ai} />

    </div>
  )
}

export default Banner