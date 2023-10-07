import React from 'react'
import roImg from './../../images/RO_vec.png'
import washingImg from './../../images/washing_vectored.png'
import cleanersImg from './../../images/cleanersVectored.png'

export default function OtherServices() {
    return (
        <>
            <div className='w-full lg:w-[60%] mx-auto'>

                <div className="text-heading-size text-dark-primary font-extrabold text-center">
                    Every Thing You Need In One Roof
                </div>
                <div className="text-subheading-size text-primary-purple font-bold text-center">
                    RO WATER |  CLEANINGS |  LAUNDARY
                </div>

                <p className='text-subtitle-size mt-4 text-center'>Your comfort is our priority. Our PG provides modern conveniences such as a washing machine for your laundry needs, pure and safe RO water, and regular cleaning services to maintain a welcoming atmosphere.</p>
            </div>

            <div className="vector w-[98%] m-auto bg-base-white rounded-3xl lg:w-[72%]">
                <div className="flex w-fit flex-wrap justify-around">
                    <img src={washingImg} width={640} height={360} alt="cleanings images" className='w-[44%] h-[23vh] md:w-[27vw] md:h-[30vh]' />
                    <img src={roImg} width={640} height={360} alt="cleanings images" className='w-[44%] h-[23vh] md:w-[27vw] md:h-[35vh]' />
                    <img src={cleanersImg} width={640} height={360} alt="cleanings images" className='w-[44%] h-[23vh] md:w-[27vw] md:h-[30vh]' />
                </div>
                <div className="container flex-col">

                    <p className='text-subtitle-size mt-4 text-center font-thin'>We want your stay with us to stay with you forever. We want you to find your new best friend, your future business partner, your band or anyone else who can help you grow. That's why we connect you with all of them through Synapse - our Community Programme, to have the best time of your life. Trust us, you'll look back at this time as the one that changed your life forever.</p>
                </div>

            </div>
        </>
    )
}
