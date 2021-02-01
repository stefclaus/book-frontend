
export default function bookReducer(state = {books: []}, action ) {

  switch (action.type) {
    case 'FETCH_BOOKS':
      return {books: action.payload}
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action.payload]}
      default:
        return state
  }

}
