import React from 'react'

const Book = (props) => {

  console.log(props)

//  let book = props.books[props.match.params.id - 1]
//  let book = props.books.filter(books => book.id == props.match.params.id)[0]
  return (
    <li>
      {/*book ? book.title : null*/}
    </li>
  )


}

export default Book
