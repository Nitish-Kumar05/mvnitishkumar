import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#17181d] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>

                {/* CONTAINER */}
                <div className='max-w[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#e09145]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi. I'm Nitish, nice to meet you. Please check out my works in project section
                        </p>
                    </div>
                    <div>
                        <p>
                            A frontend developer specializing in React. With a passion for clean and interactive user interfaces, I thrive on crafting seamless web experiences that engage and delight users.
                            <br />
                            While React is my playground, I'm also curious about the backend world. I'm excited to explore the synergy between frontend and backend technologies, enhancing my skills and creating even more powerful web solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
