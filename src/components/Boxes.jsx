import React from 'react'
import Card from './Card'

const Boxes = ({ dataList }) => {
  return (
    <>
      {
        dataList.map((movie) => (
          <Card key={movie.id} cardItem={movie} />
        ))
      }
    </>
  )
}

export default Boxes