import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';
import student from "../../images/testimonialstudent.jpg"
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

const Testmonials = () => {

    const [testimonials, setTestimonials] = useState([
        {
            img: student,
            review: "The Precious moments of the my college life are spent in my PG, with the comfort of bed and quality of service it helped me a lot to focus on my work and grow well. I thank a lot to all the staff memebers and warden sir for helping me in building myself",
            stars: 2,
            name: "Somya Agarwal"
        },
        {
            img: student,
            review: "The Precious moments of the my college life are spent in my PG, with the comfort of bed and quality of service it helped me a lot to focus on my work and grow well. I thank a lot to all the staff memebers and warden sir for helping me in building myself",
            stars: 2,
            name: "Somya Agarwal"
        },
        {
            img: student,
            review: "The Precious moments of the my college life are spent in my PG, with the comfort of bed and quality of service it helped me a lot to focus on my work and grow well. I thank a lot to all the staff memebers and warden sir for helping me in building myself",
            stars: 2,
            name: "Somya Agarwal"
        },
        {
            img: student,
            review: "The Precious moments of the my college life are spent in my PG, with the comfort of bed and quality of service it helped me a lot to focus on my work and grow well. I thank a lot to all the staff memebers and warden sir for helping me in building myself",
            stars: 2,
            name: "Somya Agarwal"
        },
        {
            img: student,
            review: "The Precious moments of the my college life are spent in my PG, with the comfort of bed and quality of service it helped me a lot to focus on my work and grow well. I thank a lot to all the staff memebers and warden sir for helping me in building myself",
            stars: 2,
            name: "Somya Agarwal"
        },
    ])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='backgroundgradient'>
            <div className='container flex flex-col pb-5'>
                <div className='flex justify-center my-5'>
                    <h2 className='heading text-primary-purple'>Our Students Say's</h2>
                </div>
                <div>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                    >
                        {
                            testimonials.map((element, index) => {
                                return (
                                    <div className='p-2' key={index}>
                                        <Card>
                                            <Card.Img variant="top" height={360} width={640}  alt='student-image' src={element.img} />
                                            <Card.Body>
                                                <Card.Title>Miss. {element.name}</Card.Title>
                                                <Card.Text className='text-[0.75rem]'>
                                                    {element.review}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Testmonials