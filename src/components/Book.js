import React from 'react'
import {Redirect} from 'react-router-dom'

const Book = (props) => {

  console.log(props)
  let book = props.books[props.match.params.id - 1]
//  let book = props.books.filter(books => book.id == props.match.params.id)[0]
  console.log(book)
  return (
    <div>
     {book ? book.title : null}
   </div>
  )


}

export default Book
