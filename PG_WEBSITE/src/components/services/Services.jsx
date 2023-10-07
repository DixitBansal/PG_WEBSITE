import React from 'react'
import SubNavbar from '../SubNavbar'
import HomeFood from './HomeFood'
import OtherServices from './OtherServices'
import Rooms from './Rooms'
import foodImg1 from './../../images/homefood.png'
import foodImg2 from './../../images/homefood2.png'
import { Carousel } from 'react-bootstrap'
import Locations from './Locations'

export default function Services() {
    return (
        <>

            <div className="  bg-gradient-to-b from-[#efeaf3] mt-0 to-[#f5f5f5]">
                <div className="container flex-col ">

                    <div className='flex flex-col items-center mt-2'>
                        <div className='font-extrabold text-center mainheading '><p className='text-primary-purple inline'>OUR </p><p className='text-dark-primary inline'>OFFERINGS</p> </div>
                        <div className='text-[#717171] subheading text-center'>We eager to provide you the best services so that you can grow well</div>
                    </div>
                    <SubNavbar tab1="Home Food" tab2="RO & Cleaners" tab3="Rooms" comp1={<HomeFood />} comp2={<OtherServices />} comp3={<Rooms />} />
                    <div className='flex flex-col items-center mt-4 mb-4'>
                        <div className='font-extrabold text-center mainheading '><p className='text-primary-purple inline'>OUR </p><p className='text-dark-primary inline'>LOCATIONS</p> </div>
                        <div className=' text-[#717171] subheading text-start'>We are at 4 major locations in Jaipur</div>
                    </div>
                    <div className="">
                        <Locations />

                    </div>
                </div>

            </div>
        </>
    )
}
