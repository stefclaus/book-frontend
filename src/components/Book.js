import React from 'react'

const Book = (props) => {
  console.log(props)
  return (
    <div>
    <li> {props.book.title} - {props.book.author} Link: {props.book.link} Genre: {props.book.genre}  </li> 
    </div>

  )


}

export default Book
