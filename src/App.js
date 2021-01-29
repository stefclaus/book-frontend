import React, { Component } from 'react';
//import BooksContainer from './containers/BooksContainer'
import BooksContainer from './containers/BooksContainer'


//check that call to API works

//fetch result is by default a get request
class App extends React.Component {

  componentDidMount() {
//    this.props.fetchBooks({type: 'FETCH_BOOKS', payload: {name: 'Cool'}})
//    fetch('http://localhost:3000/api/v1/books')
//    .then(response => response.json())
//    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <BooksContainer/>
      </div>
    );
  }
};

//map state to props lets us access values in our store as props
//lets you see whata is alreaady in the store! passes to connect
//const mapStateToProps = () => {
//  return {
//    books:state.books
//  }
//}

//second argument gives us ability to dispatach new actions to our store from the component

export default App;
