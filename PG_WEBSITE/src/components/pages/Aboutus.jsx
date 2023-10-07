import React, { useState } from 'react'
// components
import Subnavslider from './Subnavslider'
import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"
import Testimonials from "../home/Testmonials"
// images
import ourmission from "../../images/ourmission.jpg"
import team from "../../images/teamimg.jpg"
import Teamcard from './Teamcard'
import digit1 from "../../images/digit-1.png"
import digit2 from "../../images/digit-2.png"
import digit3 from "../../images/digit-3.png"
import digit4 from "../../images/digit-4.png"
import digit5 from "../../images/digit-5.png"
import digit6 from "../../images/digit-6.png"
import pg1 from "../../images/nandaniPG-1.jpg"
import pg2 from "../../images/nandaniPG-2.jpg"
import pg3 from "../../images/nandaniPG-3.webp"
import pg4 from "../../images/contactsectionimg.webp"

const Aboutus = () => {

    const [teamMembers, setTeamMembers] = useState([
        {
            img: team,
            name: "Silesh singh",
            designation: "Director"
        },
        {
            img: team,
            name: "Rohan Kumar",
            designation: "Warden"
        },
        {
            img: team,
            name: "Abhishek Mittal",
            designation: "Warden"
        },
    ])

    const [whyUsCards, setWhyUsCards] = useState([
        {
            text: "Clean and Well-Maintained Facilities",
            img: digit1,
        },
        {
            text: "Discipline and Decorum",
            img: digit2,
        },
        {
            text: "Secure Environment",
            img: digit3,
        },
        {
            text: "Common Areas for Socializing",
            img: digit4,
        },
        {
            text: "Friendly and Helpful Staff",
            img: digit5,
        },
        {
            text: "Local Information and Recommendations",
            img: digit6,
        }
    ])

    const [gallary, setGallary] = useState([
        {
            img: pg1
        },
        {
            img: pg2
        },
        {
            img: pg3
        },
        {
            img: pg4
        },
    ])

    return (
        <section className='lg:backgroundgradient'>
            <div className='container flex-col'>
                <div className='flex flex-col justify-center items-center w-full mt-5 mb-2 text-center lg:text-left'>
                    <h1 className='text-gray-dark font-extrabold'>About <span className='text-primary-purple'>Us</span></h1>
                    <p className='text-gray'>We eager to provide you the best services so that you can grow well</p>
                </div>
                <div className='flex justify-center py-5'>
                    <Subnavslider links={[{ text: "Our Mission", link: "#mission" }, { text: "Why Us", link: "#why-us" }, { text: "Our Team", link: "#our-team" }, { text: "Testimonials", link: "#testimonials" }]} />
                </div>
                <main>
                    <div className='pt-3'>
                        {/* our mission section */}
                        <div className='flex flex-col' id='mission'>
                            <h2 className='flex justify-center text-primary-purple font-extrabold mb-5'>
                                Our Mission
                            </h2>
                            <div className='flex flex-col lg:flex-row lg:gap-5 justify-between text-text-gray'>
                                <div className='flex flex-col gap-3 lg:w-5/12 justify-center'>
                                    <div>
                                        <h3 className='text-primary-purple'>Our Motive : <span className='text-gray-dark'>Enhancing Your Student Journey at Nandani Girls PG</span></h3>
                                        <p>
                                            At Nandani PG's, our mission is to provide more than just a place to live, we're committed to enriching the student experience by fostering a supportive, inspiring, and thriving community. Our focus goes beyond providing accommodation, we aim to be an integral part of your educational journey.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className='text-primary-purple'>Why We Exist: <span className='text-gray-dark'>Nurturing Growth and Connection</span></h3>
                                        <p>
                                            We believe that a nurturing environment plays a vital role in a student's academic success and personal growth. Our hostel exists to create a home away from home, where students can feel safe, motivated, and connected to a diverse network of peers. We're dedicated to helping you make the most of your educational endeavors.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center my-5 lg:w-6/12 lg:my-0'>
                                    <img alt='our-mission-image' height={640} width={640}  className='rounded-xl shadow-sm' src={ourmission} />
                                </div>
                            </div>
                        </div>
                        {/* pg photo section */}
                        <div className='p-3'>
                            <div className='flex justify-center pb-5'>
                                <h2 className='text-primary-purple heading'>Have A look On us</h2>
                            </div>
                            <Carousel>
                                {
                                    gallary.map((element, index) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <div className='flex justify-center overflow-hidden'>
                                                    <img src={element.img} height={360} width={640} alt="our-pg" className='h-[25rem]' />
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        {/* Why Us section */}
                        <div id="why-us" className='mt-5'>
                            <h2 className='flex justify-center text-primary-purple font-extrabold mb-5'>
                                Why Us?
                            </h2>
                            <div>
                                <div className='mb-5'>
                                    <p className='m-0 text-text-gray text-center'>
                                        Nandani Girls PG's is the Smart Choice of students for stay. We have dedicated team for maintaing the PG's Cleanliness and hygiene. We provide the best quality of food and mess so that you can focus on you dream and grow well.
                                    </p>
                                </div>
                                <div className='flex flex-wrap justify-evenly'>
                                    {
                                        whyUsCards.map((element, index) => {
                                            return (
                                                <>
                                                    <div className='flex items-center m-2 p-6 justify-between border-gray-light border-solid border-2 rounded-md basis-64 grow shrink'>
                                                        <div className='w-[70%]'>
                                                            <p className=' p-0 m-0'>{element.text}</p>
                                                        </div>
                                                        <div>
                                                            <img height={48} width={48} alt={`${index}`} src={element.img} />
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Our Team section */}
                        <div className='flex flex-col mt-5 mb-5' id="our-team">
                            <h2 className='flex justify-center text-primary-purple font-extrabold mb-5'>
                                Our Team
                            </h2>
                            <div className='flex flex-col lg:flex-row gap-9'>
                                {teamMembers.map((element, index) => {
                                    return <Teamcard key={index} img={element.img} name={element.name} designation={element.designation} />
                                })}
                            </div>
                        </div>
                        {/* Testimonial section */}
                        <div id="testimonials">
                            <Testimonials />
                        </div>
                    </div>
                </main>
            </div>
            {/* contact now action button */}
            <div className='bg-primary-purple py-4 text-base-white'>
                <div className='container flex items-center justify-between'>
                    <p className='m-0'>Contact us Now for More Details</p>
                    <Link to={"/contact-us"}><button className='button hover:bg-[#602f9b] bg-dark-primary text-base-white py-[0.5rem] px-[1rem] rounded-sm'>Contact Us</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Aboutus