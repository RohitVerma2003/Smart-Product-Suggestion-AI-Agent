import React from 'react'
import { FaRobot } from 'react-icons/fa'

const LoadMessage = () => {
  return (
    <div className={`w-full relative flex justify-start`}>
      <div
        className={`max-w-2/3 h-min p-2 mx-3 my-2 flex justify-start items-center gap-5`}
      >
        <FaRobot color='white' size={25} />
        <p className='border-t-2 border-r-2 border-l-2 border-white animate-spin p-2 rounded-full'></p>
      </div>
    </div>
  )
}

export default LoadMessage
