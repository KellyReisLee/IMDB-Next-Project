'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);

  }, [error])

  const handleReset = () => {

  }

  return (
    <div className='text-center mt-10'>
      <h1> Something wen wrong. Please, try again</h1>
      <button className='hover:text-gray-600 cursor-pointer dark:bg-amber-500  dark:text-gray-700  px-6 mt-2 py-1 border-2 border-amber-500 rounded' onClick={() => handleReset()}>Try Again</button>
    </div>
  )
}


export default Error