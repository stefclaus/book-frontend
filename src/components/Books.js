import React from 'react'
import Book from './Book'
import LikeButton from './LikeButton'
import {editBook} from '../actions/editBook'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'



// eeds
const Books = (props) => {
  const handleEdit = (book) => {
   props.editBook(book.id)
  }

  //const handleLikes = (likeCounter) => {
    //  likeCounter
  // }


  // let likeCounter = 1

  return (
    <div style={{padding: "30px"}}>
      <br></br>
        Welcome to Book Review! <br></br><br></br>
      We welcome you to enter book reviews that you see from major publishers here. This app allows you to add your own reviews and thoughts.
      <br></br>
      <br></br>
      <br></br>

      Book reviews:
      {props.books.map(book =>
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}  </Link>
            <Link to={`/books/${book.id}/edit`} onClick={() => handleEdit(book)}>Edit book info</Link>
              <LikeButton />
        </li> )}
    </div>

  )

}

export default connect(null, {editBook})(Books)
