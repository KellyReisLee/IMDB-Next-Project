import Boxes from '@/components/Boxes'
import React from 'react'

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm


  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`,
  );

  const data = await res.json()
  const results = data.results;

  return (
    <>
      {
        results.length > 0 && (
          <div className='sm:grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 px-auto  gap-3 sm:gap-5'>
            <Boxes dataList={results} />
          </div>
        )
      }
      {
        results.length === 0 && (
          <p className='text-center mt-6 bg-amber-600 p-4 text-lg'>No data found!</p>
        )
      }
    </>
  )
}

export default SearchPage
