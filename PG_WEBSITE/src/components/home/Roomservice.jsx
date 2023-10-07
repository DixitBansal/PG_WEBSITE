import React from 'react'
// components
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// images
import room1 from "../../images/1.webp"
import room2 from "../../images/3_rk_-for-rent-siri_fort-New+Delhi-bedroom.webp"
import room3 from "../../images/9844663991671535135.jpg"
import ac from "../../images/air-conditionerpur.png"
import rooms from "../../images/drawingpur.png"
import bathroom from "../../images/bathroompur.png"

const Roomservice = () => {
    return (
        <section className='backgroundgradient'>
            <div className='container flex-col'>
                <div className='text-right'>
                    <h1 className='heading text-primary-purple'>
                        Best Rooms Ever
                    </h1>
                    <h2 className='subtitle text-gray'>Discover comfort and style in our premium PG rooms. Your haven of relaxation and productivity awaits – a perfect blend of convenience and ambiance.</h2>
                </div>
                <div className='flex justify-between flex-col lg:my-[3rem] lg:flex-row'>
                    <Carousel className='w-full lg:w-[60%] my-[4rem] lg:my-0'>
                        <Carousel.Item>
                            <div className='flex items-center lg:h-[60vh]'>
                                <div className=''>
                                    <img src={room1} alt='' height={360} width={640}  className='roomimg shadow-md' />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='flex items-center lg:h-[60vh]'>
                                <div>
                                    <img src={room2} alt='' height={360} width={640}  className='roomimg shadow-md' />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='flex items-center lg:h-[60vh]'>
                                <div>
                                    <img src={room3} alt='' height={360} width={640}  className='roomimg shadow-md' />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div className='flex flex-col lg:w-[40%] lg:m-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 justify-items-center'>
                            <div className='bg-base-white flex flex-col justify-center items-center w-full lg:h-[200px] lg:w-[200px] p-3 shadow-md rounded-cardradius text-center'>
                                <div>
                                    <img src={ac} alt='' height={640} width={640}  className='w-[100px]' />
                                </div>
                                <div className='text-gray'>
                                    Ac Rooms & Non Ac rooms
                                </div>
                            </div>
                            <div className='bg-base-white flex flex-col justify-center items-center w-full lg:h-[200px] lg:w-[200px] p-3 shadow-md rounded-cardradius text-center'>
                                <div>
                                    <img src={rooms} height={640} width={640}  alt='' className='w-[100px]' />
                                </div>
                                <div className='text-gray mt-2'>
                                    Single, Double and Triple Rooms available
                                </div>
                            </div>
                            <div className='bg-base-white flex flex-col justify-center items-center w-full lg:h-[200px] lg:w-[200px] p-3 shadow-md rounded-cardradius text-center'>
                                <div>
                                    <img src={bathroom} height={640} width={640}  alt='' className='w-[100px]' />
                                </div>
                                <div className='text-gray mt-2'>
                                    Attached Bathrooms
                                </div>
                            </div>
                            <div className='bg-base-white flex flex-col justify-center items-center w-full lg:h-[200px] lg:w-[200px] p-3 shadow-md rounded-cardradius text-center'>
                                <div>
                                    <img src={rooms} height={640} width={640}  alt='' className='w-[100px]' />
                                </div>
                                <div className='text-gray mt-2'>
                                    Single, Double and Triple Rooms available
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark-primary mt-[2rem]'>
                <div className='justify-between items-center container text-base-white h-[100px]'>
                    <p className='m-0 text-[1.05rem]'>
                        For more details visit our services page or contact us
                    </p>
                    <button className='button'>Know More</button>
                </div>
            </div>
        </section>
    )
}

export default Roomservice