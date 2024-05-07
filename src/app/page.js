import MoviesItem from '@/components/MoviesItem';
import React from 'react'

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {

  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`)

  const resData = await res.json()
  if (!res.ok) {
    throw new Error('Failed to fetch data.')
  }

  const moviesData = resData.results

  return (
    <div className='p-8 h-screen'>
      {
        moviesData.map((movie) => (
          <MoviesItem key={movie.id} moviesData={movie} />
        ))
      }

    </div>
  )
}

export default Home
