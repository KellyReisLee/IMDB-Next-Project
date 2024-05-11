import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";


const Card = ({ cardItem }) => {

  return (
    <div className='group cursor-pointer  sm:hover:shadow-slate-400 sm:shadow-md rounded-lg  sm:border sm:border-slate-400  transition-shadow duration-300  '>
      <Link href={`/movie/${cardItem.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original${cardItem.backdrop_path || cardItem.poster_path
          }`} alt={`image movie ${cardItem.name}`} width={500}
          height={500} priority className='sm:rounded-t-lg w-full group-hover:opacity-75 transition-opacity duration-300 rounded-lg ' />
        <div className='p-3 px-4 '>
          <h2 className='text-lg font-bold truncate py-3'>{cardItem.original_name || cardItem.original_title}</h2>
          <p className='line-clamp-2 text-md'>{cardItem.overview}</p>

          <div className='flex w-full gap-1 justify-between my-4 lg:flex-col'>
            <div className='flex gap-1'>
              <p>Created in:</p>
              <span> {cardItem.release_date || cardItem.first_air_date}</span>

            </div>
            <div className='flex  items-center gap-2'>
              {cardItem.vote_count}
              <FaRegThumbsUp />
            </div>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default Card