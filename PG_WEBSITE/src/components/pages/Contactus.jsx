import React from 'react'
import Contact from '../home/Contact'
import { BiSolidPhoneCall, BiLogoGmail, BiSolidLocationPlus, BiLogoInstagramAlt, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi"

const Contactus = () => {

  return (
    <section className='backgroundgradient'>
      <div>
        {/* heading part */}
        <div className='flex flex-col justify-center items-center w-full pt-5 mb-2 text-center lg:text-left'>
          <h1 className='text-gray-dark font-extrabold'>Contact <span className='text-primary-purple'>Us</span></h1>
          <p className='text-gray'>We Would Welcome the Opportunity to Connect with You.!</p>
        </div>
        <div className='w-[100%] h-[50vh]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.492651245874!2d75.7931808!3d26.824278699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dcb2ff4b9e9f1%3A0xa48ffae0bde402a2!2sNandini%20girls%20PG%20Sanganer!5e0!3m2!1sen!2sin!4v1694670792893!5m2!1sen!2sin" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='flex flex-col w-full lg:flex-row'>
          <div className='flex flex-col items-center lg:items-start justify-between w-full bg-primary-purple text-base-white p-4 gap-3'>
            <div>
              <h3>Contact Information</h3>
              <p className='font-thin'>Send Us your Query</p>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-3 flex-col lg:flex-row'>
                <div><BiSolidPhoneCall className='text-[1.5rem]' /></div>
                <div><p className='m-0'>+91 7891002011</p></div>
              </div>
              <div className='flex items-center gap-3 flex-col lg:flex-row'>
                <div><BiLogoGmail className='text-[1.5rem]' /></div>
                <div><p className='m-0'>aarryyyadav@gmail.com</p></div>
              </div>
              <div className='flex items-center gap-3 flex-col lg:flex-row'>
                <div><BiSolidLocationPlus className='text-[1.5rem]' /></div>
                <div><p className='m-0 text-center lg:text-left'>Mansarovar, Pratap Nagar, Kumbah Marg, Sanganer</p></div>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='rounded-[50%] bg-dark-primary p-2 hover:bg-base-white hover:text-dark-primary'>
                <BiLogoInstagramAlt className='text-[1.75rem]' />
              </div>
              <div className='rounded-[50%] bg-dark-primary p-2 hover:bg-base-white hover:text-dark-primary'>
                <BiLogoFacebook className='text-[1.75rem]' />
              </div>
              <div className='rounded-[50%] bg-dark-primary p-2 hover:bg-base-white hover:text-dark-primary'>
                <BiLogoTwitter className='text-[1.75rem]' />
              </div>
            </div>
          </div>
          <div className='w-full'>
            <Contact showmap={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactus