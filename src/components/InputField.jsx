import React, { useState } from 'react'

const InputField = ({ setChats, setLoading }) => {
  const [text, setText] = useState('')

  const reponseAI = async () => {
    try {
      setLoading(true)
      const uri = `https://varunbkl.app.n8n.cloud/webhook/ai?prompt=${text}`

      let data = await fetch(uri)
      data = await data.json()
      const response = data[0]?.output;
      
      const newChat = {user : false , data : response};
      setChats((prev)=>[...prev , newChat]);
    } catch (error) {
      throw Error(error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSend = () => {
    if (text === '') return
    const newChat = { user: true, data: text }
    setChats(prev => [...prev, newChat])
    setText('')
    reponseAI()
  }

  const handleChange = e => {
    setText(e.target.value)
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <input
        className='w-full h-full outline-none p-2'
        type='text'
        onInput={handleChange}
        value={text}
      />
      <button
        className='bg-blue-500 text-white text-sm px-2 py-1 mx-1 rounded-md hover:cursor-pointer hover:bg-blue-600 uppercase'
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  )
}

export default InputField
