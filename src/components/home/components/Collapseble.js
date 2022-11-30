import React ,{useState} from 'react'

import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
const Collapseble = () => {
    const [open, setOpen] = useState(true)

    return (
      <div className='w-full  mt-10 p-2'>
        <div className='  shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] rounded-[10px] '>  
        <div className=' bg-gradient-to-r from-[#FF566B] via-[#702CD5] to-[#21E5F0] rounded-[10px]   p-2'>
        <div className='flex   justify-between items-center bg-[#202633] rounded-[20px]'>
        <div className='flex items-center '>
            <img className='border-r-8 border-[#FF566B] ' src='/images/GEB.png' alt='superdeakneon '/>
        <p className='text-[26px] font-bold leading-[22px] text-white ml-8'>Genesis Elemental Bricks</p>
        </div>
        <div>
        <button
          type='button'
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? 'Close' : 'Open'}
        </button>
        </div>
        </div>
        </div>
        <div >
        <Collapsible open={open}>
            <div className='bg-gradient-to-r from-[#FF566B] via-[#702CD5] to-[#21E5F0] p-2 rounded-b-[10px] -mt-[7px]'>
               <div className='bg-[#202633] rounded-b-[10px]'> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, sed
          labore? Autem laboriosam minima corrupti rem repellat odio reiciendis
          nihil! Eum natus dolorem atque blanditiis ipsam aperiam. Voluptatem,
          exercitationem fugit.
          </div>
          </div>
        </Collapsible>
        </div>
        </div>
      </div>
    )
}

export default Collapseble