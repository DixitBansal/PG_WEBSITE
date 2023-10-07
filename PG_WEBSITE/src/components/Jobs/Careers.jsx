import React from 'react'
import chefimg from './../../images/chef.png'
import CareerCard from '../cards/CareerCard'
import CleanersImg from './../../images/cleaners.png'
import brokerImg from './../../images/broker.png'



export default function Careers() {

    const chefCardContent = {
        media: chefimg, headings: "Cook up a smile with every meal!", content: "We're seeking a culinary enthusiast who is passionate about delivering delicious, nourishing meals in a friendly, communal environment."
    }
    const CleanersCardContent = {
        media: CleanersImg, headings: "Cook up a smile with every meal!", content: "We're seeking a culinary enthusiast who is passionate about delivering delicious, nourishing meals in a friendly, communal environment."
    }
    const brokerCardContent = {
        media: brokerImg, headings: "Be a broker and earn money!", content: "We're seeking a culinary enthusiast who is passionate about delivering delicious, nourishing meals in a friendly, communal environment."
    }
    return (
        <>
            <div>

                <div className='flex flex-col items-center mt-16'>
                    <div className=' text-primary-purple font-extrabold text-center heading '>CAREERS AT NANDINI</div>
                    <div className=' text-[#717171] subheading text-center'>We are looking for the  people who do their work by heart so that we can offer
                        best quality to our daughters</div>

                    <button className='bg-[#3D016D] p-2 text-base-white inline text-center align-middle mt-4 '>
                        SEE ALL POSITIONS
                    </button>
                </div>

                <section className='w-full  bg-gradient-to-b from-[#c69fe6] to-dark-primary  h-full '>
                    <div class="custom-shape-divider-top-1692033952">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <div className="cards flex flex-wrap justify-around  gap-4 ">

                        <CareerCard cardContent={chefCardContent} />
                        <CareerCard cardContent={CleanersCardContent} />
                        <CareerCard cardContent={brokerCardContent} />
                    </div>
                </section>

            </div>



        </>
    )
}
