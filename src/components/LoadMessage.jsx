import React from 'react'

const LoadMessage = () => {
  return (
    <div className={`w-full relative flex justify-start`}>
      <div className={`max-w-2/3 h-min p-2 mx-3 my-2 bg-blue-400 rounded-md`}>
        <p className='border-t-2 border-r-2 border-l-2 border-white animate-spin p-2 rounded-full'></p>
      </div>
    </div>
  )
}

export default LoadMessage
