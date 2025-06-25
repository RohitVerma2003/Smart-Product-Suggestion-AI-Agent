import React, { useState } from 'react'
import InputField from '../../components/InputField'
import Message from '../../components/Message'
import LoadMessage from '../../components/LoadMessage'

const Home = () => {
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(false)
  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <div className='w-2/3 h-[80vh] mt-5 mb-2 border border-1 rounded-md relative flex flex-col'>
        {chats.map((chat, index) => (
          <Message message={chat} key={index} />
        ))}
        {loading && <LoadMessage />}
      </div>
      <div className='w-2/3 h-1/16 border-1 rounded-md'>
        <InputField setChats={setChats} setLoading={setLoading} />
      </div>
    </div>
  )
}

export default Home
