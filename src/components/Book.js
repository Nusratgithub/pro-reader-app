import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({ book }) => {
  const { isbn13, image, title, subtitle, price } = book
  return (
    <Link to={`../book/${isbn13}`} aria-label='View Item'>
      <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
        <img
          className='object-cover w-full h-56 md:h-64 xl:h-80'
          src={image}
          alt=''
        />
        <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-[#82CAFF] bg-opacity-75 opacity-0 hover:opacity-100'>
          <p className='mb-4 text-lg font-bold text-white'>{title}</p>
          <br />
          <p className='text-lg font-bold tracking-wide text-white'>{subtitle}</p>
          <br />
          <p className='text-lg font-bold tracking-wide text-white'>Price: {price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Book
