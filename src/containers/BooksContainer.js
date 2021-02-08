import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchBooks} from '../actions/fetchBooks'
import Books from '../components/Books'
import Book from '../components/Book'
import BookInput from '../components/BookInput'

class BooksContainer extends React.Component {

    componentDidMount(){
      this.props.fetchBooks()
    }

    render() {

      return (
        <div>
              <Switch>

              <Route path='/books/new' component={BookInput}/>
              <Route path='/book/:id' render={(routerProps) => <Book {...routerProps} books={this.props.books}/>}/>
              <Route path='/books' render={(routerProps) => <Books {...routerProps} books={this.props.books}/>}/>
              </Switch>
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
