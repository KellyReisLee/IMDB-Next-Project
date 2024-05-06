import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <Icon className='text-2xl sm:hidden cursor-pointer' />
      <p className='uppercase font-semibold hidden sm:inline text-sm cursor-pointer'>{title}</p>
    </Link >
  )
}

export default MenuItem
