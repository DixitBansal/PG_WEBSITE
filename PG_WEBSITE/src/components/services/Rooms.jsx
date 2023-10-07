import React from 'react'
import { Carousel } from 'react-bootstrap'
import room1 from "../../images/1.webp"
import room2 from "../../images/3_rk_-for-rent-siri_fort-New+Delhi-bedroom.webp"
import room3 from "../../images/9844663991671535135.jpg"
import ac from "../../images/air-conditionerpur.png"
import rooms from "../../images/drawingpur.png"
import bathroom from "../../images/bathroompur.png"
import { TypeAnimation } from 'react-type-animation'


export default function Rooms() {
    return (
        <>

            <div className='w-full mx-auto'>

                <div className="text-heading-size text-dark-primary font-extrabold text-center">
                    Choose your room according to your comfort
                </div>
                <div className="text-subheading-size  text-primary-purple font-bold text-center">
                    Single&ensp;|&ensp;Double |&ensp; Tripple
                </div>

                {/* <p className='text-subtitle-size mt-4 text-center'>Your comfort is our priority. Our PG provides modern conveniences such as a washing machine for your laundry needs, pure and safe RO water, and regular cleaning services to maintain a welcoming atmosphere.</p> */}
            </div>
            <section className='mt-4'>
                <div className='container flex-col'>
                    <div class="grid  grid-flow-row gap-y-5 mt-3 md:grid-rows-3 md:grid-flow-col rounded">
                        <div class="  order-2 md:row-span-3 md:col-span-2   md:order-1  md:w-[35vw] ">
                            <Carousel indicators={false}>
                                <Carousel.Item >
                                    <div className='flex items-center h-[30vh]  md:h-[50vh] rounded '>
                                        <div className=''>
                                            <img src={room1} width={640} height={360} alt="rooms images" className='roomimg  mx-auto  md:h-[55vh]' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='flex items-center h-[30vh]  md:h-[50vh]'>
                                        <div>
                                            <img src={room2} width={640} height={360} alt="rooms images" className='roomimg  mx-auto  md:h-[55vh]' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='flex items-center  h-[30vh]  md:h-[50vh]'>
                                        <div>
                                            <img src={room3} width={640} height={360} alt="rooms images" className='roomimg  mx-auto  md:h-[55vh]' />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div class="text-center self-center order-3  md:row-span-2 md:order-2">


                            <p className='subtitle text-gray '>Discover comfort and style in our premium PG rooms. Your haven of relaxation and productivity awaits – a perfect blend of convenience and ambiance.</p>
                            <div className="container justify-between">
                                <div className='bg-base-white flex flex-col  justify-center  items-center w-[20vw] h-[10vh]   p-3 shadow-md rounded-cardradius text-center md:h-[10vh] md:w-[10vw]'>
                                    <div>
                                        <img src={ac} width={640} height={360} alt="rooms images" className='h-[70px]' />
                                    </div>


                                </div>

                                <div className='bg-base-white flex flex-col justify-center  items-center w-[20vw] h-[10vh] p-3 shadow-md rounded-cardradius text-center md:h-[10vh] md:w-[10vw]'>
                                    <div>
                                        <img src={bathroom} width={640} height={360} alt="rooms images" className='h-[70px]' />
                                    </div>

                                </div>
                                <div className='bg-base-white flex flex-col justify-center items-center w-[20vw] h-[10vh] p-3 shadow-md rounded-cardradius text-center md:h-[10vh] md:w-[10vw]'>
                                    <div>
                                        <img src={rooms} width={640} height={360} alt="rooms images" className='h-[70px]' />
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="!order-1 col md:!order-3 h-[10vh]  ">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'We provide Rooms for Single Bed',
                                    1000,
                                    'We provide Rooms for Double Bed',
                                    1000,
                                    'We provide Rooms for Tripple Bed',
                                    1000,

                                ]}
                                speed={50}
                                style={{ fontSize: '2em', color: "#3D016D" }}
                                repeat={Infinity}
                            />
                        </div>
                    </div>


                </div>

            </section>


        </>
    )
}
