import React from 'react'

const Counter = ({counter,label}) => {
  return (
    <div>
    <div className="relative top-[70px] px-20 py-10 bg-black opacity-75 rounded-t-2xl z-[-1]">
    </div>
    <div className="z-10">
      <p className="font-bold leading-[140px] text-white text-[96px] text-center z-10">{counter}</p>
    </div>
    <div className="relative bottom-[65px] px-20 py-10 bg-black opacity-75 rounded-b-2xl z-[-1] ">
    </div>
    <p className='text-4xl font-bold leading-[52px] text-center -mt-14'>{label}</p>
    </div>
  )
}

export default Counter