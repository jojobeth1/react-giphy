// Developer TODO: Define App component defintion here

import React, {Component} from 'react';
import './Home.css';
import SearchContainer from './SearchContainer';

class Home extends Component {
  render(){
    return(
      <div>
        <h1 class="teal-text text-lighten-2">Search Giphy</h1>
        <SearchContainer />
      </div>
    )
  }
}
export default Home
