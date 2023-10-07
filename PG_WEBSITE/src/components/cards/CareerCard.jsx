import React from 'react'

export default function CareerCard(props) {
    return (
        <>
            <div className="job-section flex-col p-3 mt-4 mb-4  rounded-cardradius box-border bg-base-white flex-wrap justify-around max-w-[340px]">
                <div className="image"><img src={props.cardContent.media} height={360} width={640} className='w-[325px]  h-[208px] rounded-md' alt={`carrier image`} /></div>
                <div className="content min-w-[330px] text-primary-purple font-bold mt-2 text-lg">{props.cardContent.headings}</div>
                <div className="exp  text-base text-justify min-w-fit text-[#1E1E1E] leading-5">{props.cardContent.content}</div>
                <button class="rounded-buttonradius bg-dark-primary text-base-white mt-2 text-white text-sm px-2 py-1">Contact now</button>
            </div>
        </>
    )
}
