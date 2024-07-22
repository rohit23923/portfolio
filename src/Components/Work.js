import React from 'react';
import todo from '../myWork/firstProject.png';
import wa from '../myWork/weather.png';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                <div className='w-full h-full gap-4 p-1 sm:flex justify-around'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-1 p-2'>
                        <div style={{ backgroundImage: `url(${todo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover bg-center h-[250px]'>
                            <div className='w-full h-full text-center flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 hover:bg-blue-500 hover:duration-500'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    React js Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='https://to-do-list-three-ivory-91.vercel.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-zinc-800 hover:text-white'>
                                            Click to See
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-1 p-2'>
                        <div style={{ backgroundImage: `url(${wa})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover bg-center h-[250px]'>
                            <div className='w-full h-full text-center flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 hover:bg-blue-500 hover:duration-500'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    React js Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='https://weather-application-eosin-two.vercel.app/' target='_blank' rel='noopener noreferrer'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-zinc-800 hover:text-white'>
                                            Click to See
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
