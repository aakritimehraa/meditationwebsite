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
                 <form className='flex justify-center items-start flex-col' name="contact" action='/' method="POST" netlfiy  onSubmit='submit' data-netlify="true">
                 <input type="hidden" name="form-name" value="contact" />
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

                <form name="simpleContactForm" method="POST" data-netlify="true" id="simple-contact-form" class="contact-form">  <p class="form-row">
    <label id="contact-form-name-label" for="contact-form-name" class="form-label">Name</label>
    <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" class="form-input" />
  </p>
  <p class="form-row">
    <label id="contact-form-email-label" for="contact-form-email" class="form-label">Email address</label>
    <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" class="form-input" />
  </p>
  <p class="form-row">
    <label id="contact-form-message-label" for="contact-form-message" class="form-label">Message</label>
    <textarea name="message" id="contact-form-message" aria-labelledby="contact-form-message-label" class="form-textarea" rows="7"></textarea>
  </p>
  <p class="form-row form-submit">
    <button type="submit" class="button">Send Message</button>
  </p>
</form>
            </div>
            
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