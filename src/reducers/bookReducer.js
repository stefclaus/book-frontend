
export default function bookReducer(state = {books: []}, action ) {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {books: action.payload}
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action.payload]}
    case 'ADD_REVIEW':
      let books = state.books.map(book => {
        if (book.id === action.payload.id) {
          return action.payload
        } else {
          return book
        }
      })
      return {...state, books: books}
    //  return {...state, reviews: reviews}
    case 'DELETE_REVIEW'
    let books = state.books.map(book => {
      if (book.id === action.payload.id) {
        return action.payload
      } else {
        return book
      }
    })
    return {...state, books: books}
      default:
        return state
  }

}
