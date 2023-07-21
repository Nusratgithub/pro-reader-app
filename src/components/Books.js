import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Book from './Book'

const BookServices = () => {
  const booksApiData = useLoaderData()
  const booksData = booksApiData.books;
  console.log(booksData)

  return (
    <div className='container mx-auto py-16 px-4 lg:px-0'>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {
          booksData.map(book => (
            <Book key={book.isbn13} book={book} />
          ))
        }
      </div>
    </div>
  )
}

export default BookServices;
