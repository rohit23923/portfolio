import React from 'react'
import c from '../PortfoliyoAssets/cLogo.png'
import cplus from '../PortfoliyoAssets/c++Logo.png'
import html from '../PortfoliyoAssets/htmlLogo.png'
import css from '../PortfoliyoAssets/CssLogo.png'
import javaScript from '../PortfoliyoAssets/jsLogo.png'
import react from '../PortfoliyoAssets/reactLogo.png'
import tailwind from '../PortfoliyoAssets/tailwindLogo.png'
import github from '../PortfoliyoAssets/githubLogo.png'
import node from '../PortfoliyoAssets/nodejs.png'
import ex from '../PortfoliyoAssets/express.png'
import mongo from '../PortfoliyoAssets/mongodb.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>//These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={c} alt='C icon'/>
                            <p className='my-4'>C</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={cplus} alt='C++ icon'/>
                        <p className='my-4'>C++</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt='HTML icon'/>
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt='Css icon'/>
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javaScript} alt='JavaScript icon'/>
                        <p className='my-4'>javaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt='React icon'/>
                        <p className='my-4'>ReactJs</p>
                    </div>
                    
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon'/>
                        <p className='my-4'>Tailwind</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={node} alt='node.js icon'/>
                        <p className='my-4'>nodejs</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ex} alt='ExpressJs icon'/>
                        <p className='my-4'>ExpressJs</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongo} alt='MongoDB icon'/>
                        <p className='my-4'>MongoDB</p>
                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt='Git icon'/>
                        <p className='my-4'>Github</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills