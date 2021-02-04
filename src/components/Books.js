import React from 'react'
import Book from './Book'
import {Route, Link} from 'react-router-dom'

const Books = (props) => {
  return (
    <div>
      {props.books.map(book =>
        <div key={book.id}>
          <Link path={`/books/${book.id}`}>{book.author}</Link>
        </div> )}
    </div>
  )

}



export default Books
