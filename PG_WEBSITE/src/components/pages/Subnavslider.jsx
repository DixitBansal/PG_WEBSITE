import React, { useState } from 'react'

const Subnavslider = ({ links }) => {

    const [colorTo, setColorTo] = useState("")

    function updateColor(event) {
        setColorTo(event.target.dataset.text)
    }

    return (
        <div className='flex w-full py-4 px-10 items-center text-gray lg:w-[60%] shadow-xl rounded-[100px]'>
            <ul className='flex gap-4 flex-wrap items-center m-0 p-0 justify-evenly w-full flex-row'>
                {
                    links.map((element, index) => {
                        return (
                            <li key={index}><a data-text={element.text} className={`py-4 no-underline ${colorTo === element.text || (colorTo === "" && index === 0) ? "text-primary-purple md:border-b-2 md:border-primary-purple md:border-solid" : "text-gray"}`} onClick={(event) => {
                                updateColor(event)
                            }} href={element.link}>{element.text}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Subnavslider