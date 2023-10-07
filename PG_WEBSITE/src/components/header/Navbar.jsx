import React, { useState } from 'react'
// componets
import samplelogo from "../../images/NLogo.png"
import "./navbar.css"
import { useLocation, useNavigate } from 'react-router-dom'
// icons
import { RxCross1 } from "react-icons/rx"
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {

    const navigator = useNavigate()
    const [shownav, setshownav] = useState(false)
    const location = useLocation()

    function handelClick(event) {
        const page = event.target.dataset.link
        // can perform animation here
        navigator(page)
        toggleNavBar()
    }

    // navbar sliding function
    function toggleNavBar(event) {
        setshownav((prev) => {
            return !prev
        })
    }

    return (
        <>
            {location.pathname == '/' ? <div className="hidden lg:block lg:absolute top-2 left-2 z-30">

                <div className={`flex items-center  h-[30%] justify-center`}>
                    <img src={samplelogo} className='w-[30%] h-[50%]' />
                </div>
            </div> : ""}

            <div className='flex justify-between items-center p-3 text-gray-dark lg:hidden'>
                <h3 className='mb-0'>
                    Nandani PG's
                </h3>
                <div>
                    <RxHamburgerMenu className='w-9 h-9' onClick={(event) => {
                        toggleNavBar()
                    }} />
                </div>
            </div>
            <header className={`fixed top-0 ${shownav ? "left-0 " : "left-[-100%]"} lg:left-0 w-screen h-screen bg-primary-purple ${location.pathname === "/" ? "lg:absolute" : "lg:static"} ${location.pathname === "/" ? "dotransparent" : ""} lg:w-full lg:h-auto z-[100] lg:top-0 transition-all duration-500`}>
                <div className='flex-col h-full lg:container z-10 flex lg:py-[0.65rem] lg:justify-end lg:flex-row'>
                    <div className='absolute top-[2%] right-[2%] text-white text-xl lg:hidden' onClick={(event) => {
                        toggleNavBar()
                    }}>
                        <RxCross1 className=' w-5 h-5 text-dark-primary' />
                    </div>
                    <div
                        class="w-[100px] h-[100px] my-5 mx-auto rounded-full 
                inline-flex items-center justify-center 
                bg-white lg:hidden">
                        <img src={samplelogo} alt="logo" className='w-[100px] h-[100px]' />
                    </div>
                    <nav className='flex flex-col gap-7 lg:gap-[0px] lg:ms-48 items-center justify-center lg:flex-row'>
                        <button className={`navbutton ${location.pathname === '/' ? "text-dark-primary" : "text-base-white"}`} data-link={"/"} onClick={handelClick}>Home</button>
                        <button className={`navbutton ${location.pathname === '/services' ? "text-dark-primary" : "text-base-white"}`} data-link={"/services"} onClick={handelClick}>Services</button>
                        <button className={`navbutton ${location.pathname === '/about-us' ? "text-dark-primary" : "text-base-white"}`} data-link={"/about-us"} onClick={handelClick}>About Us</button>
                        <button className={`navbutton ${location.pathname === '/careers' ? "text-dark-primary" : "text-base-white"}`} data-link={"/careers"} onClick={handelClick}>Carriers</button>
                        <button className={`navbutton ${location.pathname === '/contact-us' ? "text-dark-primary" : "text-base-white"}`} data-link={"/contact-us"} onClick={handelClick}>Contact Us</button>
                        <button className={`navbutton ${location.pathname === '/news' ? "text-dark-primary" : "text-base-white"}`} data-link={"/news"} onClick={handelClick}>News</button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar