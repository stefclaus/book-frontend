import React from 'react'
import {Redirect} from 'react-router-dom'


const Book = (props) => {

  console.log(props)

  let book = props.books[props.match.params.id - 1]
//  let book = props.books.filter(books => book.id == props.match.params.id)[0]
  return (
    <li>
      
      {book ? book.title : null} - {book ? book.author : null} - {book ? book.genre : null}
    </li>
  )


}

export default Book
