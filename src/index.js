import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCElO9X3oRjRsujgPldg0FrLmxGtFdXOgQ';
// create a new component. this component should produce some html

// take this generated html and put it on the page (DOM)
const App = ()  => {
  return (
      <div>
        <SearchBar />
      </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('container')); // selests by ID
ReactDOM.render(<App />, document.querySelector('.container')); //selects by anything we want
