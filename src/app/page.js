import Boxes from '@/components/Boxes';
import React, { Suspense } from 'react'



const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {

  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 30000 } })

  const resData = await res.json()
  if (!res.ok) {
    throw new Error('Failed to fetch data.')
  }

  const moviesData = resData.results


  return (
    <Suspense>
      <div className='sm:grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  max-w-full  mx-auto xl:px-20 py-6 px-10  gap-4'>
        <Boxes dataList={moviesData} />
      </div>
    </Suspense>
  )
}

export default Home
