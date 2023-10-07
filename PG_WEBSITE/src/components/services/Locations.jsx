import { Carousel } from 'react-bootstrap'
import React, { useState } from 'react'
import pg1 from './../../images/pg1.jpg'
import pg2 from './../../images/pg2.jpg'
import pg3 from './../../images/pg-rooms-500x500.webp'
import location from './../../images/loc.png'

export default function Locations() {
    const [state, setState] = useState("");
    return (
        <>
            <div className="grid grid-rows-2 grid-flow-row md:grid-flow-col md:gap-x-8">
                <div className="row-span-2 justify-self-start !order-1 md:!order-1">
                    <img src={location} width={640} height={360} className='w-fit h-[34vh] md:w-[42vw] md:h-[48vh] ' alt="girl with location" />
                </div>

                <div className="row-span-2 !order-2 w-fit h-[34vh] justify-self-center bg-ligh-primary md:w-[42vw] md:h-[48vh] md:!order-3 md:justify-self-end">

                    <Carousel slide={true} touch={true} pause={"hover"}  >
                        <Carousel.Item interval={3000}>
                            <img src={pg1} width={640} height={360} className='w-full h-[34vh] md:w-[42vw] md:h-[48vh]' alt="crousel image" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src={pg2} width={640} height={360} className='w-full h-[34vh] md:w-[42vw] md:h-[48vh]' alt="crousel image" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src={pg3} width={640} height={360} className='w-full h-[34vh] md:w-[42vw] md:h-[48vh]' alt="crousel image" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>



                </div>
            </div>

        </>
    )
}
