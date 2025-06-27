import React, { useEffect, useRef, useState } from 'react'
import InputField from '../../components/InputField'
import Message from '../../components/Message'
import LoadMessage from '../../components/LoadMessage'
import Intro from '../../components/Intro'

const Home = () => {
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [chats])

  return (
    <div className='w-full h-full flex justify-center items-center flex-col relative'>
      {chats.length > 0 && <div
        className='w-5/6 md:w-3/4 h-[85vh] mt-5 mb-2 relative flex flex-col overflow-y-scroll scroll-smooth'
        ref={ref}
      >
        {chats.map((chat, index) => (
          <Message message={chat} key={index} />
        ))}
        {loading && <LoadMessage />}
      </div>}
      {!chats.length && <Intro />}
      <div className='w-4/5 md:w-1/2 h-1/16 fixed bottom-5 z-100'>
        <InputField setChats={setChats} setLoading={setLoading} />
      </div>
    </div>
  )
}

export default Home
