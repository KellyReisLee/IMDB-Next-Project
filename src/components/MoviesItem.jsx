import React from 'react'

const MoviesItem = ({ moviesData }) => {
  console.log(moviesData.title);
  return (
    <div>
      <h1> {moviesData.title}</h1>
    </div>
  )
}

export default MoviesItem