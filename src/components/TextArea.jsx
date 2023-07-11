import { useState } from 'react'
const TextArea = () => {
  let [text, setText] = useState('')
  const [displayedText, setDisplayedText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = () => {
      setDisplayedText(text)
  }

  const handleClear = () => {
      setDisplayedText('')
      setText('')
  }

  return (
    <div>
      <div className='max-w-2xl mx-auto'>
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Write your text
        </label>
        <textarea
          id='message'
          rows='4'
          value={text}
          onChange={handleChange}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Write here...'
        ></textarea>
        <button
          onClick={handleClick}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 text-center'
        >
          Post
        </button>
        <button
          onClick={handleClear}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 ml-3 text-center'
        >
          Clear Post
        </button>
      </div>
      <div>
        <p className='p-2.5 w-[670px] mt-8 m-auto text-xl text-blue-700'>
          {displayedText}
        </p>
      </div>
    </div>
  )
}

export default TextArea
