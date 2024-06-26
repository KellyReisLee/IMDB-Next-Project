'use client'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')


  return (
    <Suspense>
      <div>
        <Link className={` font-semibold ${genre === param
          ? 'underline underline-offset-8  decoration-4 decoration-amber-500 rounded-lg'
          : ''
          }`}
          href={`/?genre=${param}`}>
          {title}
        </Link>
      </div>
    </Suspense>
  )
}

export default NavbarItem
