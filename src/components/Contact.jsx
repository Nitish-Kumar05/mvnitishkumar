import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#17181d] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/d35242d3-8ee1-4df4-ae16-22b4d928e2a7" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e09145] text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300 py-4'>
                    // Submit the form below or contact me at this email -
                        <span>
                            <a href="mailto:mvnitishkumar@gmail.com">
                                mvnitishkumar@gmail.com
                            </a>
                        </span>
                    </p>
                </div>

                {/* INPUT FEILDS */}
                <input className='p-2' type="text" placeholder='Name' name="name" required />
                <input className='my-4 p-2' type="email" placeholder='Email' name="email" required />
                <textarea className='p-2' name="message" rows="10" placeholder='Message' required></textarea>
                <button className='text-white border-2 hover:bg-[#e09145] hover:border-[#e09145] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>

                {/* FOR MOBILE DEVICES */}
                <div className='flex justify-center space-x-2 pb-1 sm:hidden'>
                    <a className='text-[#fcd9b8]' href="https://github.com/Nitish-Kumar05" target='_blank'>
                        <FaGithub size={30} />
                    </a>
                    <a className='text-[#fcd9b8]' href="https://www.linkedin.com/in/nitish-kumar-mv/" target='_blank'>
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Contact