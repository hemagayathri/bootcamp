import React, { Component } from 'react';
import Weather from './Weather';
import CarouselComponent from './CarouselComponent';
import SearchComponent from './SearchComponent';
import Food from './Food.js';
import FunctionalFood from './FunctionalFood.js';
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
      <div>
        <Weather city={this.state.cities[0].city} temp={this.state.cities[0].temp} condition={this.state.cities[0].condition}></Weather>
        <Weather city={this.state.cities[1].city} temp={this.state.cities[1].temp} condition={this.state.cities[1].condition}></Weather>
        <Weather city={this.state.cities[2].city} temp={this.state.cities[2].temp} condition={this.state.cities[2].condition}></Weather>
      
      </div>
      <div><button onClick= {this.changeNameHandler}>Change City </button> </div>
      <div>
        <Food name={this.state.food[0].name} cuisine={this.state.food[0].cuisine} price={this.state.food[0].price}></Food>
        <Food name={this.state.food[1].name} cuisine={this.state.food[1].cuisine} price={this.state.food[1].price}></Food>
        <Food name={this.state.food[2].name} cuisine={this.state.food[2].cuisine} price={this.state.food[2].price}></Food>
      
        </div>
      <div><button onClick= {this.changePriceHandler}>Change Price </button> </div>
      <div><FunctionalFood></FunctionalFood></div>
      </body>

    );
  }
}

export default App;