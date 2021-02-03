import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchBooks} from '../actions/fetchBooks'
import Books from '../components/Books'
import BookInput from '../components/BookInput'

class BooksContainer extends React.Component {

    componentDidMount(){
      this.props.fetchBooks()
    }
    render() {

      return (

        <div>
          <Route path="/books/new" component={BookInput}/>
          <BookInput/><br/><br/>
          <Books books={this.props.books}/>
        </div>
      )
    }


}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

//give this component access through props to  access to our statae

export default connect(mapStateToProps, {fetchBooks})(BooksContainer)

//to see, use mapStateToProps.
