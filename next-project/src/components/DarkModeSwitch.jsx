'use client'

import React from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from 'next-themes';


const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
      {
        currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-400' /> : <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-400' />
      }
    </div>
  )
}

export default DarkModeSwitch