import React from 'react'
import Images from '../components/Images'
import err from '/src/assets/image/error.gif'

const Error = () => {
  return (
    <div className="bg-[#d8765d]">

      <div className='  w-1/3 m-auto'>
        {/* <img src="/src/assets/image/error.gif" alt="" className='w-1/3 m-auto' /> */}
        <Images imgSrc={err} />

      </div>
    </div>
  )
}

export default Error