'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBox = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)

  }
  return (
    <form onSubmit={handleSubmit} className=' text-center mt-10 mb-6 '>
      <input
        className='w-8/12 h-14 border rounded-r-none rounded-md shadow-md placeholder-gray-500 dark:placeholder-gray-300 outline-none bg-transparent flex-1 px-3  border-gray-400' type='text' placeholder='Search Keywords... '
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      <button disabled={!search} className='bg-amber-600 text-white h-14 rounded-md border-none  rounded-l-none px-5 cursor-pointer shadow-md disabled:bg-gray-500'>Search</button>
    </form>
  )
}

export default SearchBox
