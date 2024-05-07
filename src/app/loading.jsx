import React from 'react'
import Image from 'next/image';

const Loading = () => {

  return (
    <div className='flex justify-center mt-10'>
      <Image src='spinner.svg' alt='loading' width={70}
        height={70} />
    </div>
  )
}

export default Loading
