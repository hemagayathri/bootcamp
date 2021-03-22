import React from 'react';

function Food(props) {
  return(
      <div class="weather">
        <h1>{props.name}</h1>
        <p>{props.cuisine}</p>
        <h4>{props.price}</h4>
      </div> 
  )
}

export default Food;