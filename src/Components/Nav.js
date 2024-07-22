import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

export const Nav = () => {
    
    const [nav, setnav] = useState(false)
    const hamburger = () => setnav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
            <div></div>

            <ul className='hidden md:flex'>
                <li className='px-4 cursor-pointer hover:text-purple-600 hover:scale-125 duration-300'>
                <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='px-4 cursor-pointer hover:text-purple-600 hover:scale-125 duration-300'>
                <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='px-4 cursor-pointer hover:text-purple-600 hover:scale-125 duration-300'>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='px-4 cursor-pointer hover:text-purple-600 hover:scale-125 duration-300'>
                <Link to="achivements" smooth={true} duration={500}>Achivements</Link>
                </li>
                <li className='px-4 cursor-pointer hover:text-purple-600 hover:scale-125 duration-300'>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            <div onClick={hamburger} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-2xl cursor-pointer hover:text-purple-600'><Link onClick={hamburger} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-2xl cursor-pointer hover:text-purple-600'><Link onClick={hamburger} to="about" smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-2xl cursor-pointer hover:text-purple-600'><Link onClick={hamburger} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-2xl cursor-pointer hover:text-purple-600'><Link onClick={hamburger} to="achivements" smooth={true} duration={500}>Achivements</Link></li>
                <li className='py-6 text-2xl cursor-pointer hover:text-purple-600'><Link onClick={hamburger} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            <div className='hidden lg:flex  flex-col fixed top-[35%] left-0'>
                <ul>
                    <li className='w-[130px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600 '>
                        <a href='https://www.linkedin.com/in/rohit-sharma-oo7/' className='flex justify-between items-center w-full text-gray-300 hover:cursor-pointer'>Linkden<FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[130px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333] '>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com'>Github<FaGithub size={30} /></a>
                    </li>
                    
                </ul>
            </div>

        </div>
    )
}
