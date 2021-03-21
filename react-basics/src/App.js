import React, { Component } from 'react';
import Weather from './Weather';
import CarouselComponent from './CarouselComponent';
import SearchComponent from './SearchComponent';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <SearchComponent></SearchComponent>
        </div>
        <div>
        <CarouselComponent></CarouselComponent>
      </div>
      <div class="text-center">
        <button class="btn btn-primary mainBtn" type="submit">View All</button>
      </div>
      
      
      </div>
    );
  }
}

export default App;