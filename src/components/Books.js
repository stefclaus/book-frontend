import React from 'react'
import Book from './Book'

const Books = (props) => {
  return (
    <div>
      {props.books.map(book =>
        <div key={book.id}><Book book={book} /></div> )}
    </div>
  )

}



export default Books
