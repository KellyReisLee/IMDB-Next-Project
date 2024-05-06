import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-5 py-7 max-w-screen-2xl mx-6'>
      <div className='flex gap-4 '>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <DarkModeSwitch />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold  text-gray-700 bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
          <span className='text-xl hidden sm:inline text-amber-500'>Clone</span>
        </Link>
      </div>
    </div>
  )
}

export default Header