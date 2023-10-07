import React from 'react'

const Teamcard = ({ img, name, designation }) => {
    return (
        <div className='flex'>
            <div className='flex flex-col'>
                <div className=''>
                    <img alt={`${name}`} src={img} height={360} width={640}  className='rounded-xl' />
                </div>
                <div className='flex flex-col mt-2'>
                    <h3 className='m-0 text-gray-dark font-extrabold'>{name}</h3>
                    <h4 className='font-thin m-0'>{designation}</h4>
                </div>
            </div>
        </div>
    )
}

export default Teamcard