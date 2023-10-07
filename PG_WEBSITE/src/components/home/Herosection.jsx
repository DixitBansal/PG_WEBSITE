import React from 'react'
// images
import pattern from "../../images/about-us-pattern.png"
import hersectionimg from "../../images/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living.jpg"

const Herosection = () => {
    return (
        <main className='backgroundgradient relative'>
            <div className='pattern top-[5%] left-[5%] hidden lg:block'>
                <img src={pattern} height={164} width={164}  alt=''/>
            </div>
            <div className='pattern bottom-[5%] right-[10%] opacity-25'>
                <img src={pattern} height={164} width={164}  alt=""   />
            </div>
            <div className='pattern hidden bottom-[5%] left-[10%] opacity-[.35] lg:block'>
                <img src={pattern} height={164} width={164}  alt='' />
            </div>
            <div className='absolute uppercurve w-[70%] h-[70%] bg-primary right-0 z-0 hidden lg:block'></div>
            <div className='flex flex-col container justify-center lg:justify-between items-center h-[90vh] lg:h-screen lg:flex-row'>
                <div className='flex flex-col items-center text-center lg:!text-left gap-2 lg:gap-0 lg:items-start'>
                    <h1 className='mainheading  text-primary-purple'>Nandani Girls PG</h1>
                    <h2 className='heading text-gray'>Feel At Home</h2>
                    <h3 className='subheading text-dark-primary lg:text-left m-0'>We Provide you the service like your own home for your best growth</h3>
                </div>
                <div className='flex justify-center my-5 w-[70%] md:w-[50%] lg:w-[70%]'>
                    <img src={hersectionimg} height={360} width={640} alt={'our-pg-image'} className='rounded-[10px] z-10' />
                </div>
            </div>
        </main>
    )
}

export default Herosection