import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#17181d]'>

            {/* CONTAINER */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#fcd9b8]'>
                    Hey, There my name is
                </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    <span className='text-[#e09145]'>N</span>itish <span className='text-[#e09145]'>K</span>umar
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Web Developer
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Dedicated front-end React developer with a passion for creating seamless user experiences. Excited to bridge the gap to backend development for a full-stack skill set.
                </p>

                {/* BUTTONS */}
                <div className='flex'>
                    <Link to='projects' smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-[#e09145] hover:border-[#e09145]'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>

                    <Link to='contact' smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-[#e09145] hover:border-[#e09145] ml-4'>
                            Contact Me
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Home