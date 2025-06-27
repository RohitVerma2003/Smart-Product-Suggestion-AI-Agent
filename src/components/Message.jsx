import React from 'react'
import Product from './Product'
import { FaUserCircle, FaRobot  } from 'react-icons/fa'

const Message = ({ message }) => {
  if (!message?.user) {
    return (
      <div className={`w-full relative flex justify-start`}>
        <div className='w-full flex items-start justify-start '>
        <FaRobot color='white' size={25} className='mt-5'/>
          <div
            className={`max-w-4/5 md:max-w-2/3 h-max p-2 mx-3 my-2 text-white font-normal bg-[#18181b] border border-1 border-gray-800 rounded-md` }
          >
            {message.data.map((ele, index) => (
              <div className={`w-full ${index > 0 ? 'border-t-1 py-5' : 'pb-5'}`} key={index}>
                <Product product={ele} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full relative flex justify-end`}>
      <div className='w-full flex items-center justify-end'>
        <div
          className={`max-w-4/5 md:max-w-2/3 h-min p-2 mx-3 my-2 text-white font-normal rounded-md bg-[#18181b] border border-1 border-gray-800 rounded-md`}
        >
          {message?.data}
        </div>
        <FaUserCircle color='white' size={25} />
      </div>
    </div>
  )
}

export default Message
