import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'

const Navbar = () => {

    // FOR HAMBURGER CLICK EVENT
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-1 bg-[#292c35] text-[#fcd9b8]'>

            {/* LOGO */}
            <div>
                <Link to='home' smooth={true} duration={500}>
                    <img src={Logo} className='cursor-pointer' alt="Logo Image" style={{ width: '110px' }} />
                </Link>
            </div>

            {/* MENU & SMOOTH SCROLL*/}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='projects' smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* HAMBURGER */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* MOBILE MENU & SMOOTH SCROLL*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#292c35] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* SOCIAL MEDIA ICONS FOR SIDE BAR */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full' href="www.linkedin.com/in/nitish-kumar-mv" target='_blank'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full' href="https://github.com/Nitish-Kumar05" target='_blank'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full' href="mailto: mvnitishkumar@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full' href="https://drive.google.com/file/d/1h3_92KiWnbksFnbrcuQVdNgzbhgrTYPg/view?usp=drive_link" target='_blank'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar