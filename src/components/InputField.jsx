import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'

const InputField = ({ setChats, setLoading }) => {
  const [text, setText] = useState('')

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  const reponseAI = async () => {
    try {
      setLoading(true)
      const uri = `https://varunbkl.app.n8n.cloud/webhook/ai?prompt=${text}`

      let data = await fetch(uri)
      data = await data.json()
      const response = data[0]?.output

      const newChat = { user: false, data: response }
      // const newChat = {
      //   user: false,
      //   data: [
      //     {
      //       name: 'Samsung Galaxy S21 FE 5G (Lavender, 8GB, 128GB Storage)',
      //       price: '434',
      //       features: [
      //         'Pro-grade Camera with AI Single Take, Portrait Mode, Night Mode and 30X Space zoom',
      //         '16.28cm (6.4-inch) Dynamic AMOLED 2X Display with120Hz Refresh rate',
      //         '5G Ready with Octa-core Exynos 2100 (5nm) Processor',
      //         'Android 12 operating system',
      //         'Iconic Contour Cut Design with 7.9 mm thickness',
      //         'Gorilla Glass Victus and IP68 Water Resistant'
      //       ],
      //       discount: '9%',
      //       image:
      //         'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691073671025-galaxy S21 FE.jpg',
      //       popular: false,
      //       on_sale: true
      //     },
      //     {
      //       name: 'Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
      //       price: '760',
      //       features: [
      //         'Pro-grade Camera that lets you make your nights epic with Nightography',
      //         '120Hz Dynamic AMOLED 2X display for high outdoor visibility',
      //         '4nm processor with faster CPU and GPU compared to Galaxy S21 Ultra',
      //         'Sleek design with slim bezels and polished frame',
      //         'Corning Gorilla Glass Victus+ on the screen and back panels'
      //       ],
      //       discount: '29%',
      //       image:
      //         'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy S22 5G.jpg',
      //       popular: false,
      //       on_sale: false
      //     }
      //   ]
      // }
      console.log(newChat)
      setChats(prev => [...prev, newChat])
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

  const handleStartListening = () => {
    SpeechRecognition.startListening()
  }

  const handleStopListening = () => {
    SpeechRecognition.stopListening()
    resetTranscript()
  }

  useEffect(()=>{
    setText(transcript);
  } , [transcript])

  return (
    <div className='w-full h-full flex justify-center items-center rounded-md gap-2'>
      <input
        className='w-full h-full outline-none p-2 text-white border-1 border-gray-800 rounded-md bg-[#18181b]'
        type='text'
        onInput={handleChange}
        onKeyDown={e => {
          if (e.key === 'Enter') handleSend()
        }}
        value={text}
        placeholder='What kind of product you are looking for?'
      />
      {listening ? (
        <button
          className='bg-white p-2 rounded-full hover:cursor-pointer'
          onClick={handleStopListening}
        >
          <FaMicrophoneSlash color='black' />
        </button>
      ) : (
        <button
          className='bg-white p-2 rounded-full hover:cursor-pointer'
          onClick={handleStartListening}
        >
          <FaMicrophone color='black' />
        </button>
      )}

      <button
        className='bg-white p-2 rounded-full hover:cursor-pointer'
        onClick={handleSend}
      >
        <FaArrowUp color='black' />
      </button>
    </div>
  )
}

export default InputField
