import React from 'react'
import Book from './Book'
import {editBook} from '../actions/editBook'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'




const Books = (props) => {
  const handleEdit = (book) => {
   props.editBook(book.id)
  }

  return (
    <div>
      <br></br>
        Welcome to Book Review! We welcome you to enter book reviews that you see here. Then you can
        add your own reviews our thoughts.
      <br></br>
      <br></br>
      <br></br>
      Book reviews:
      {props.books.map(book =>
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}  </Link>
            <Link to={`/books/${book.id}/edit`} onClick={() => handleEdit(book)}>Edit book info</Link>
        </li> )}
    </div>

  )


}

export default connect(null, {editBook})(Books)
