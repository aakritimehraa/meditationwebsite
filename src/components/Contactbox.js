import React from 'react'
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoMailSharp } from 'react-icons/io5'
import { ThemeContext } from '../themeContext';



function Contactbox() {
    const { theme } = React.useContext(ThemeContext);


    return (



        <div className='max-w-[100%] flex lg:justify-center lg:items-center justify-start items-start flex-col lg:flex-row '>
            <div className='w-[100%] flex justify-center items-start flex-col mt-[20%] dark:text-white'>
                <h1 className='text-2xl font-semibold md:text-4xl xl:text-6xl mb-20 dark:text-white'>Love to hear from you <br></br>
                    Get in Touch 👋</h1>
                 <form className='flex justify-center items-center flex-col' name="contact" method="POST" data-netlify="true">
                <label className='text-xl mb-2'>Your Name</label>
                <input name='name' className='dark:bg-gray-900 bg-gray-100 outline-none border-none h-[50px] w-[90%] sm:w-[80%] lg:w-[90%]' type='text' placeholder='name' />
                <br></br>

                <label className='text-xl mb-2'>Your Email</label>
                <input name='email' className='dark:bg-gray-900 bg-gray-100 outline-none border-none h-[50px] w-[90%] sm:w-[80%] lg:w-[90%]' type='email' placeholder='email' />
                <br></br>
                <label  className='text-xl mb-2'>Message</label>
                <textarea name='message' cols='100' rows='5' className='max-w-[100%] w-[90%] sm:w-[80%] lg:w-[90%] dark:bg-gray-900 bg-gray-100 outline-none border-none'></textarea>
               
                <button type='submit' className='bg-black dark:bg-gray-900 text-white font-semibold outline-none border-none p-2 w-[40%] mt-10'>
                    Send
                </button>
                </form>
            </div>
            <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
            <div className='hidden xl:block mt-10'>

                <ul className='flex justify-start items-start flex-col dark:text-white'>
                    <li className='flex justify-center items-center mb-10'><BsFillTelephoneFill fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'}  />
                           <p className='font-semibold ml-2'>12345</p>
                    </li>

                    <li className='flex justify-center items-center'> <IoMailSharp fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'}  />
                   <p className='font-semibold ml-2'> aakritimehrasa@gmail.com</p>
                    </li>

                

                   
                </ul>
           
                <div  className='flex mt-10'>

<BsLinkedin fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'}/>
<BsGithub fontSize='1.25rem'  color={theme === 'dark' ? 'white' :'black'} className='icon' />

</div>

            </div>
        </div>
    )
}

export default Contactbox