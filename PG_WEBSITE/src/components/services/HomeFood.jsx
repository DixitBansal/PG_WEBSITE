import React from 'react'
import foodImg1 from './../../images/homefood.png'
import foodImg2 from './../../images/homefood2.png'
export default function HomeFood() {
    return (
        <>


            <div class="grid grid-flow-row gap-y-8   auto-rows-max   content-between items-center box-border   md:grid-flow-col md:grid-rows-4 md:gap-x-8 md:gap-y-0">
                <div class="!order-1 text-left  text-subheading-size font-extrabold  self-center md:!order-1 md:self-end"><p className='text-dark-primary mb-0 inline lg:block'>1We're dedicated to serving you the finest quality.</p><p className='text-primary-purple mb-0 inline lg:block'>Wholesome meals with a touch of home-cooked love.</p></div>
                <div className='!order-3 text-justify text-subtitle-size font-thin self-center md:!order-2 '>Good food is the heart of a happy home, and our PG takes this to heart. Relish the assurance of best quality food that's prepared with attention to detail and a commitment to providing you with a homely dining experience.</div>
                <div class="!order-2  md:row-span-2 md:!order-4 md:justify-self-center md:mt-8 "><img src={foodImg1} width={640} height={360} className='rounded-2xl w-[95vw] h-[30vh] md:w-[52vw] md:h-[47vh] xl:w-[40vw] xl:h-[52vh]' alt="homefood" /></div>
                <div class="!order-5  md:row-span-2  md:justify-self-center md:!order-3 md:mt-8 "><img src={foodImg2} width={640} height={360} className='rounded-2xl w-[95vw] h-[30vh] md:w-[52vw] md:h-[47vh] xl:w-[40vw] xl:h-[52vh]' alt="homefood2" /></div>

                <div class="!order-4 text-left text-subheading-size font-extrabold  self-center md:!order-5 md:self-end "><p className='text-dark-primary mb-0 inline lg:block'>2We're dedicated to serving you the finest quality.</p><p className='text-primary-purple mb-0 inline lg:block'>Wholesome meals with a touch of home-cooked love.</p></div>
                <div className='!order-6 text-justify text-subtitle-size font-thin self-center md:!order-6'>Good food is the heart of a happy home, and our PG takes this to heart. Relish the assurance of best quality food that's prepared with attention to detail and a commitment to providing you with a homely dining experience.</div>
            </div>
        </>
    )
}
