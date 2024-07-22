import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-purple-600'>Hi, my name is</p>
                <p className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rohit Sharma</p>
                <p className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</p>
                <p className='text-[#8892b0] py-4 max-w[700px]'>I'm a full-Stack developer. Currently, I'm focusing on building responsive full-stack web applications.</p>
                <div>
                    <Link to="work" smooth={true} duration={300}> <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </button></Link> 
                </div>
            </div>
        </div>
    )
}

export default Home