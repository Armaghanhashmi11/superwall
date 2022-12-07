import React from 'react'

const SuperSpaceHolder = () => {
  return (
      <div className='relative  w-full  p-[3px]'>
        <div className=' bg-[#202633] w-full rounded-lg md:rounded-[40px] shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] '>
          <img className='w-[80%] mx-auto' src='/assets/images/superdealneon.png' alt='superdeakneon'/>
          <p className='font-medium text-sm md:text-[27px] leading-[40.5px] text-center text-white'>🔥 “Get 3 For The Price Of 1” 🔥</p>
          <p className='font-medium text-sm md:text-[27px] leading-[40.5px] text-center text-white mx-2'>Super Pass  -{'>'}   Genesis Elemental Bricks  -{'>'}   Some Other World</p>
          <p className='font-lato font-normal  text-lg md:text-[39px] text-center text-white pt-3 pb-[55px] racingfont mx-2'>Total  combined  value  of  Nearly  1  Eth!</p>
        </div>
        <div className="absolute w-full h-full top-0" >
        <img className="w-full h-full " width={'100%'} height='100%' alt="neon" src='/assets/images/superdealneons.png'/>
        </div>
      </div>
      
  )
}

export default SuperSpaceHolder