import React from 'react'
import logo from "../../images/NLogo.png"
// icons
import { MdAddIcCall } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
import { ImLocation2 } from "react-icons/im"
import { Link } from 'react-router-dom'
import insta from "../../images/Instagram.png"
import whatsapp from "../../images/whatsapp.png"

const Footer = () => {
    return (
        <footer className='bg-dark-primary text-base-white'>
            <div className='container flex-col py-4'>
                <div className='flex justify-around bg-base-white rounded-full'>
                    <div className="insta self-center">
                        <Link className='no-underline text-white' target='_blank' to={"https://www.instagram.com"}><img src={insta} height={360} width={640} alt='logo' className='w-[40px]   md:w-[60px]' /></Link>
                    </div>
                    <div className="logo">

                        <Link className='no-underline text-white' to={"/news"}><img src={logo} height={360} width={640} alt='logo' className='w-[80px]  md:w-[100px]' /></Link>
                    </div>
                    <div className="whatsapp self-center">
                        <a href="" target='_blank'>
                            <img src={whatsapp} height={360} width={640} alt='logo' className='w-[40px]  md:w-[60px]' />
                        </a>
                    </div>
                </div>
                <div className='flex flex-row gap-3 flex-wrap justify-center md:justify-around py-4  md:gap-0'>
                    <div className=''>
                        <h1 className='subtitle mb-3'>Reach Us</h1>
                        <ul className='pl-0 text-center flex flex-col gap-2'>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <MdAddIcCall />
                                </span>
                                <a href='tel:7891002011' className='no-underline text-white'>+91 7891002011</a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span><AiOutlineMail /></span>
                                <a className='no-underline text-white' href='mailto:aarryyyadav@gmail.com'>aarryyyadav@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h1 className='subtitle mb-3'>Company</h1>
                        <ul className='pl-0 flex flex-col gap-2'>
                            <li>
                                <Link className='no-underline text-white' to={"/aboutus"}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className='no-underline text-white' to={"/contact-us"}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className='no-underline text-white' to={"/services"}>
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h1 className='subtitle mb-3'>Locations</h1>
                        <ul className='pl-0 text-center flex flex-col gap-2'>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <ImLocation2 />
                                </span>
                                <a href='' className='no-underline text-white'>Mansarovar</a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span><ImLocation2 /></span>
                                <a className='no-underline text-white' href=''>Kumbha Marg</a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span><ImLocation2 /></span>
                                <a className='no-underline text-white' href=''>Pratap Nagar</a>
                            </li>
                        </ul>
                    </div>

                    <div>

                    </div>
                </div>
                <div>

                </div>
            </div>
            <h6 className='text-base-white text-center mb-0 mt-0'>
                <a className='no-underline text-white' href='tel:9549816330'>click here to contact us for your Own website.</a>

            </h6>
        </footer>
    )
}

export default Footer