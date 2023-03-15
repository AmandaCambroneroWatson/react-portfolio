import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import HeroImage from "../assets/heroImage.png";
import { TypeAnimation } from 'react-type-animation'

import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export default function Home() {
    return (

        <div name='home' className='w-full h-screen bg-gray-900'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-white text-lg'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-lime-600'>
                    AMANDA C.WATSON
                </h1>
                <h2 className=' flex text-4xl sm:text-7xl font-bold text-lime-800'> 
                I'm a frontend developer.
                  
                    {/* <TypeAnimation
                        sequence={[
                            '    frontend developer', // Types 'One'
                            2000, // Waits 1s
                            'coder', // Deletes 'One' and types 'Two'
                            2000,
                            'fullstack enthusiast',
                            2000, // Waits 2s

                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                    /> */}
                </h2>
                <p className='text-gray-200 text-xl py-4 max-w-[700px]  inline border-b-4 border-lime-800'>
                    I am passionate about building minimalistic and aesthetically pleasing user interfaces. Currently, I love to work on web application using technologies like MERN
                    React, Tailwind and Vite.
                </p>
                <div>
                    {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-lime-600 hover:border-lime-600'>
                      View Work
                      <span className='group-hover:rotate-90 duration-300'>
                          <HiArrowNarrowRight className='ml-3 ' />
                      </span>
                  </button> */}

                    <div className="">
                        <ul className='text-2xl flex text-gray-500'>
                            <li className=''>
                                <a
                                    className=''
                                    href='https://www.linkedin.com/in/amanda-cambronero-watson-25b41875/'
                                >
                                    <FaLinkedin size={40} />
                                </a>
                            </li>
                            <li className=''>
                                <a
                                    className=''
                                    href='https://github.com/AmandaCambroneroWatson'
                                >
                                    <FaGithub size={40} />
                                </a>
                            </li>
                            <li className=''>

                                <Link to='contact' smooth={true} duration={500}>
                                    <HiOutlineMail size={40} />
                                </Link>

                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
