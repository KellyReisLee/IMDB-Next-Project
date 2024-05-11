import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  console.log(movieId);
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)

  const movie = await res.json()
  console.log(movie);

  return (

    <div className='mt-12 px-12'>
      <h2 className='text-6xl text-center'>{movie.title || movie.name}</h2>

      <div className='w-full  h-full mt-7 flex justify-center '>

        <div className='p-4 md:pt-8 flex flex-col items-center lg:flex-row content-center max-w-6xl mx-auto md:space-x-6  '>


          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={500}
            alt={`image ${movie.original_title}`}
            priority
            className='rounded border-8  p-3 border-none shadow-lg'
          />



          <div className='flex flex-col  px-6 mt-5 gap-2 lg:mt-0 lg:p-0 md:mt-10 md:px-12 sm:px-6  sm:mt-7'>
            <h3 className='text-lg font-bold tracking-wide '>Overview</h3>
            <p className='text-sm mb-2'>{movie.overview}</p>
            <div>
              <h3 className='text-lg font-bold tracking-wide'>Genres:</h3>
              {
                movie.genres.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))
              }
            </div>


            <p className='flex gap-1 items-center'>
              <span className='text-lg font-bold tracking-wide'>Country:</span>
              <span>{movie.origin_country}</span>
            </p>

            <p className='flex gap-1 items-center'>
              <span className='text-lg font-bold tracking-wide'>Language:</span>
              <span>{movie.original_language}</span>
            </p>


            <p className='flex gap-1 items-center'>
              <span className='text-lg font-bold tracking-wide '>Homepage:</span>
              <a className='cursor-pointer hover:underline underline-offset-7 hover:text-amber-500' href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a>
            </p>

            <div className='flex justify-between '>
              <p>
                <span className='text-lg font-bold tracking-wide'>Date: </span> {movie.release_date || movie.first_air_date}</p>
              <p><span className='text-lg font-bold tracking-wide'>Votes:</span> {movie.vote_count}</p>
            </div>



          </div>
        </div>

      </div>
    </div>
  )
}

export default MoviePage