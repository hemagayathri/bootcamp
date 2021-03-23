import React, { Component } from 'react';
import CarouselComponent from './CarouselComponent';
import SearchComponent from './SearchComponent';
import HeaderComponent from './HeaderComponent';


class App extends Component {
  state = {
    cities: [
      {city: "Chennai", temp: 90, condition: "Hot"},
      {city: "Pittsburgh", temp: 60, condition: "Cloudy"},
      {city: "London", temp: 70, condition: "Sunny"},
    ],

    food: [
      {name: "Idly", cuisine: "Indian", price: "$8.99"},
      {name: "Gobi 65", cuisine: "Chinese", price: "$8.99"},
      {name: "Pizza", cuisine: "Italian", price: "$8.99"}
    ]
  };

  changeNameHandler = () => {
    this.setState({
     cities : [
       {city: 'Madras', temp: 90, condition: 'humid' },
       {city: 'Hyderabad', temp: 67, condition: 'cold' },
       {city: 'Coimbatore', temp: 100, condition: 'very hot' },
     ]
    })
   }
 
  changePriceHandler = () => {
    this.setState({
      food: [
        {name: "Idly", cuisine: "Indian", price: "$8.99"},
        {name: "Gobi 65", cuisine: "Chinese", price: "$12.99"},
        {name: "Pizza", cuisine: "Italian", price: "$13.99"}
      ]
    });
  };

  
  render() {
    return (
      <body>
        <HeaderComponent></HeaderComponent>
        <SearchComponent></SearchComponent>
      <div>
        <CarouselComponent></CarouselComponent>
      </div>
      <div class="text-center">
        <button class="btn btn-primary mainBtn" type="submit">View All</button>
      </div>
      </body>

    );
  }
}

export default App;