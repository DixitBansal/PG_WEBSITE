import React from 'react'
import Newsdisplay from './Newsdisplay'

const Adminsection = () => {

  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <div className='w-9/12'>
          <div className='flex justify-center p-2'>
            <h3 className='text-primary-purple'>Your Posts</h3>
          </div>
          <Newsdisplay className={`h-[80vh] w-full overflow-y-scroll`} cont_id={"posts__container"} classNameInfinte={'flex flex-col gap-4 lg:p-5 w-full'}/>
        </div>
      </div>
    </>
  )
}

export default Adminsection