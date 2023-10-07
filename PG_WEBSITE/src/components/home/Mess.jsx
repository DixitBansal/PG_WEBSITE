import React from 'react'
import mess1 from "../../images/mess1.jpg"
import mess2 from "../../images/mess2.jpg"
import pattern from "../../images/about-us-pattern.png"

const Mess = () => {
    return (
        <section className='backgroundgradient pt-[5rem] pb-[3rem] lg:pb-[5rem]'>
            <div className='pattern left-[5%] opacity-[.25]'>
                <img src={pattern} height={164} width={164}  alt='' />
            </div>
            <div className='container flex-col'>
                <div className='mb-[3rem]'>
                    <h1 className='heading text-primary-purple'>Your Food Decides Your Quality</h1>
                    <h2 className='subtitle text-gray'>We're here to serve you delicious and nutritious meals. From breakfast to dinner, we've got your cravings covered</h2>
                </div>
                <div className='flex justify-between items-center flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start'>
                    <img src={mess1} height={360} width={640}  alt='mess1' className='rounded-[10px] w-full lg:w-[50%]' />
                    <img src={mess2} height={360} width={640}  alt='mess2' className='rounded-[10px] w-full lg:w-[40%]' />
                </div>
            </div>
        </section>
    )
}

export default Mess