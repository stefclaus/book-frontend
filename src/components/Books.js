import React from 'react'
import Book from './Book'
import {Route, Link} from 'react-router-dom'


const Books = (props) => {
  return (
    <div>
      <br></br>
      Book reviews:
      {props.books.map(book =>
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </li> )}
    </div>
  )

}



export default Books
