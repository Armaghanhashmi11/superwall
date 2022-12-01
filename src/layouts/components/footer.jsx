import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='grid justify-center items-center lg:grid-cols-5 gap-20 bg-[#12002D]'>
      <div className=' col-span-2 lg:col-span-1 pt-16 lg:pl-20 lg:pb-10'>
        <div className='flex justify-center items-center md:justify-start '>
        <img className='w-[157px] ' src="/assets/images/logo.png" alt='logo'/>
        </div>
        <p className='text-center lg:text-start text-[17px] whitespace-nowrap font-bold leading-[21.62px] text-white py-6'>Join Superwall Community</p>
      <div className='flex justify-center items-center gap-2'>
        <img src="/assets/images/neon_twitter.png" alt='twit'/>
        <img src="/assets/images/neon_discord.png" alt='discord'/>
        <img src="/assets/images/neon_insta.png" alt='insta'/>
        <img src="/assets/images/neon_website.png" alt='website'/>
      </div>
      </div>
      <div  className='pt-16 lg:pl-20 lg:pb-10'>
        <p className='text-[17px] font-bold leading-5 text-white text-center md:text-left'>Superwall.co</p>
        <p className='text-sm font-normal leading-5 text-white py-4 text-center md:text-left'>Utilities & Perks</p>
        <p className='text-sm font-normal leading-5 text-white text-center md:text-left'>Super Deal</p>
        <p className='text-sm font-normal leading-5 text-white py-4 text-center md:text-left'>Super Team</p>
        <p className='text-sm font-normal leading-5 text-white text-center md:text-left'>Frequently Asked Questions</p>

      </div>
      <div  className='pt-16 lg:pl-16 lg:pb-10'>
      <p className='text-[17px] font-bold leading-5 text-white text-center md:text-left'>Superwall.co</p>
        <p className='text-sm font-normal leading-5 text-white py-4 text-center md:text-left'>Home</p>
        <p className='text-sm font-normal leading-5 text-white text-center md:text-left'>$BRCK Token</p>
        <p className='text-sm font-normal leading-5 text-white py-4 text-center md:text-left'>Superwall Roadmap</p>
        <p className='text-sm font-normal leading-5 text-white text-center md:text-left'>Super Team</p>
        <p className='text-sm font-normal leading-5 text-white py-4 text-center md:text-left'>Ambassadors</p>

      </div>
      <div  className='col-span-2 pt-16 lg:pr-20 pb-8 lg:pb-10'>
      <p className='text-[30px] font-bold leading-10 text-white text-center px-2 lg:text-left'>Sign-up for Whitelist & OG</p>
        <p className='text-lg font-normal leading-5 text-white pt-4 pb-5 text-center px-2 lg:text-left'>Be the first to know about discounts, offers, events, alphas, beta testing and more! </p>
       <div className='w-[70%] mx-auto md:w-full bg-gradient-to-r from-[#FF566B] via-[#702CD5] to-[#21E5F0] p-1 rounded-full'>
        <div className='bg-[#12002D] flex justify-evenly px-2 items-center rounded-full'>
          <div>
          <img src="/assets/images/sms.png" alt='website'/>
          </div>
          <div>
          <input placeholder='Enter your email' type="text" className="bg-[#12002D] outline-none block w-full p-4"/>
          </div>
          <div>
            <p className='cursor-pointer'>Subscribe</p>
          </div>
        </div>
       </div>
      </div>

    </div>
    <p className='bg-[#12002D] text-center pb-8 text-[15px] font-normal'>Copyright © SUPERWALLGLOBAL 2022. All Rights Reserved</p>
    </>
  )
}

export default Footer