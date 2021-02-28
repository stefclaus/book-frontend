import React from 'react'
import {Redirect} from 'react-router-dom'
import ReviewsContainer from "../containers/ReviewsContainer"
import BookEdit from "./BookEdit"
import {Route, Link} from 'react-router-dom'


const Book = (props) => {

  console.log(props)
    let book = props.books.filter(book => book.id == props.match.params.id)[0]
    //conditional render is on this page!!!!!

  return (
    <div>
        <a target="_blank" href={book ? book.link: null}>{book ? book.title: null}</a> {book ? book.author : null} - {book ? book.genre : null}

  <ReviewsContainer book={book}/>
  
  </div>
  )


}

export default Book
