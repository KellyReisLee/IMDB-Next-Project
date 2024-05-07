

import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex dark:bg-gray-500 font-semibold  dark:text-white md:text-md lg:text-lg bg-amber-300 text-gray-700 p-4   justify-center gap-6'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar