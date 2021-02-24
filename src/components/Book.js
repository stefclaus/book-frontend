import React from 'react'
import {Redirect} from 'react-router-dom'
import ReviewsContainer from "../containers/ReviewsContainer"
import BookEdit from "./BookEdit"

const Book = (props) => {

  console.log(props)

//  let book = props.books[props.match.params.id - 1]
    let book = props.books.filter(book => book.id == props.match.params.id)[0]


  return (
    <div>

  

      {book ? book.title : null} - {book ? book.author : null} - {book ? book.genre : null}

  <ReviewsContainer book={book}/>
  <BookEdit book={book}/>
  </div>
  )


}

export default Book
