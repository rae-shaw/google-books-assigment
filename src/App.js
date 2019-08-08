import React from 'react';
import './App.css';
import Header from './header.js';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


 const books=[
    {
     "volumeInfo": {
        "title": "Flowers",
        "authors": [
         "Vijaya Khisty Bodach"
        ]
      }
    },
    {
     "volumeInfo": {
        "title": "Flowers",
        "authors": [
         "Gail Saunders-Smith"
        ]
      }
    },
    {
     "volumeInfo": {
        "title": "Flowers",
        "authors": [
         "Paul McEvoy"
        ]
      }
    }
  ];
 

class App extends React.Component {

  render(){
    return (
      <main className='App'>
        <Header />
        <SearchForm />
        <SearchResults books={this.state.books} />
      </main>
    );
  }
}

export default App;