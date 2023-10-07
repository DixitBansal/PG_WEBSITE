import React from 'react'
import Newsdisplay from '../../admin/Newsdisplay'

const News = () => {
    return (
        <section>
            <div className='flex justify-center'>
                <div className='w-full lg:w-[50%] py-4'>
                    <Newsdisplay className={`h-[87vh] w-full overflow-y-scroll`} cont_id={"posts__container"} classNameInfinte={"flex flex-col w-full gap-4 p-3 lg:p-5"} showDelButton={false} />
                </div>
            </div>
        </section>
    )
}

export default News