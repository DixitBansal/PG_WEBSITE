import React from 'react'
import laundry from "../../images/washingmachine.png"
import pattern from "../../images/about-us-pattern.png"

const Laundry = () => {
    return (
        <section className='backgroundgradient relative'>
            <div className='container'>
                <div className='my-[3rem]'>
                    <h1 className='heading text-primary-purple'>Convenient Laundry Services</h1>
                    <div className='flex flex-col-reverse lg:flex-row-reverse justify-between'>
                        <div className='pattern top-[5%] right-[10%] hidden opacity-20 lg:block'>
                            <img src={pattern} height={164} width={164}  alt='' />
                        </div>
                        <div className='pattern top-[37%] left-[10%] opacity-25 lg:left-[35%]'>
                            <img src={pattern} height={164} width={164}  alt='' />
                        </div>
                        <div className='z-10 lg:my-6 flex flex-row justify-center'>
                            <img src={laundry} height={640} width={640}  alt='washing-machine' />
                        </div>
                        <div className='flex flex-col justify-center lg:w-[50%]'>
                            <ul className='pl-0'>
                                <li>
                                    <span className='subheading font-extrabold text-dark-primary'>Convenience</span>
                                    <p className='subtitle text-[1.25rem] text-gray'>We provide the laundry support inside the PG premises so that you can conveniently wash your cloths</p>
                                </li>
                                <li>
                                    <span className='pl-1 subheading font-extrabold text-dark-primary'>Quality</span>
                                    <p className='subtitle text-[1.25rem] text-gray'>Good Quality of machines and powders are available in the PG laundry.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Laundry