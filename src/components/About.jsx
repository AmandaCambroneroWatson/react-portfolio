import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'
import HeroImage from "../assets/heroImage.png";

export default function About() {
    const images = [avatar, avatar2, avatar3, avatar4, avatar5];
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if (currentIndex === images.length - 1) {
    //             setCurrentIndex(0);
    //         }
    //         else {
    //             setCurrentIndex(currentIndex + 1);
    //         }
    //     }, 3000)

    //     return () => clearInterval(intervalId);
    // }, [currentIndex])
    return (
        <div name='about' className='w-full h-screen bg-gray-900 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-lime-600'>
                            About

                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-2xl'>
                        <p className='mb-2'>
                            Im a newly graduated frontend developer with several years of experience working as case officer within the Swedish Migration Board.
                        </p>
                       
                        <p className='mb-2'>
                            During my last assignment for the Swedish Migration Board, I came into contact with issues regarding web-digitization, user experience of our channels and future digital solutions.
                        </p>
                        
                        <p className='mb-2'>
                            My work brought back old childhood memories that reminded me of how much fun it was to work with the code for my blog.These memories and my curiosity web-development inspired me to take on a second education and become a frontend developer.
                        </p>
                        
                        <p>
                            Now that I have completed my education, I am ready to take on new challenges and to further develop my skills within the profession.
                        </p>

                    </div>
                    <div>
                        <div className=''>
                            <img
                                src={HeroImage}
                                alt="my profile"
                                className="rounded-2xl mx-auto w-2/3 md:w-full"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
