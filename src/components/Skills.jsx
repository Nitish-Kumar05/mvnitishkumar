import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#17181d] text-gray-300'>

        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#e09145]'>
                    Skills
                </p>
                <p className='py-4'>
                    // These are the technologies I know
                </p>
            </div>

            {/* ICONS CONTAINER */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8'>
                <div className='shadow-[#040c16]'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-[#040c16]'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-[#040c16]'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-[#040c16]'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-[#040c16]'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                    <p className='my-4'>BOOTSTRAP</p>
                </div>
                <div className='shadow-[#040c16]'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills