import React from 'react'
import html from '../Certificates/Html.png'
import css from '../Certificates/HtmlCss Zero to hero.jpg'
import tailwind from '../Certificates/Tailwind Certificate.jpg'
import introjs from '../Certificates/javascript_basic certificate_HackerRank.jpg'
import interjs from '../Certificates/javascript_intermediate certificate_page-0001.jpg'
import aws from '../Certificates/AWS.png'

const Certificate = () => {
  return (
    <div name='achivements' className='w-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certificates</p>
                    <p className='py-4'>check out some of my Certificates</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500'>
                            <img className='w-full mx-auto' src={html} alt='Certificate of HTML'/>
                            <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-300'>
                        <img className='w-full mx-auto' src={css} alt='Certificate of HTML & CSS'/>
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500'>
                        <img className='w-full mx-auto' src={tailwind} alt='Certificate of Tailwind'/>
                        <p className='my-4'>Tailwind</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500'>
                        <img className='w-full mx-auto' src={introjs} alt='Certificate of Intro JavaScript'/>
                        <p className='my-4'>Intro javaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500'>
                        <img className='w-full mx-auto' src={interjs} alt='Certificate of Intermidate of javaScript'/>
                        <p className='my-4'>javaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500'>
                    <img className='w-full mx-auto' src={aws} alt='Certificate of Introduction to AI'/>
                    <p className='my-4'>AWS</p>
                </div>

                </div>
            </div>
        </div>
  )
}

export default Certificate