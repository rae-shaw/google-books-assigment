import React from 'react';
import './App.css';
import Header from './header.js';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


 
 

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      error: null,
      isLoaded: false,
      books: {
        items: []
      }
    }
  }

  booksChanged(books){
    console.log("Definitely in app.booksChanged")
    console.log(this);
    this.setState({
      books
    });
    console.log(books)
  }

  // searchTermChanged(searchTerm){
  //   this.setState({
  //     searchTerm
  //   });
  // }

  render(){
    return (
      <main className='App'>
        <Header />
        <SearchForm 
          callBack={this.booksChanged.bind(this)}
        />
        <SearchResults 
        books={this.state.books} />
      </main>
    );
  }
}

export default App;