import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import avatar from '../assets/avatar.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    const images = [avatar, avatar2, avatar3, avatar4, avatar5];
    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 3000)

        return () => clearInterval(intervalId);
    }, [currentIndex])


    // const navigate = useNavigate();

    // const navigateToResume = () => {


    //     navigate('/resume');
    // };

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-lime-600'>
            <div>

                <img className=" object-cover rounded-full w-20 h-20 items-center mt-4" src={images[currentIndex]} alt="avatar" />
            </div>

            {/* menu */}

            <ul className='hidden md:flex text-xl md:text-lg'>
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
                    <Link to='project' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul className={
                !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center'
            } >
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
                    <Link onClick={handleClick} to='project' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/amanda-cambronero-watson-25b41875/'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/AmandaCambroneroWatson'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>

                        <Link className='flex justify-between items-center w-full text-gray-300' to='contact' smooth={true} duration={500} >
                            Contact <HiOutlineMail size={30} />
                        </Link>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <a
                            onClick={navigateToResume}
                            className='flex justify-between items-center w-full text-gray-300'
                            
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a> 
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
