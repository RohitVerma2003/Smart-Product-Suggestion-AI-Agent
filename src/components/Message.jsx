import React from 'react'

const Message = ({ message }) => {
  if (!message?.user) {
    return (
      <div
        className={`w-full relative flex justify-${
          message?.user ? 'end' : 'start'
        }`}
      >
        <div
          className={`max-w-2/3 h-min p-2 mx-3 my-2 bg-blue-${
            message?.user ? '600' : '400'
          } text-white font-medium rounded-md`}
        >
          {/* {message} */}
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full relative flex justify-end`} >
      <div className={`max-w-2/3 h-min p-2 mx-3 my-2 bg-blue-600 text-white font-medium rounded-md`}>
        {message?.data}
      </div>
    </div>
  )
}

export default Message
