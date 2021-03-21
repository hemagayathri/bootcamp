import React from 'react';

function Weather(props) {
  return(
      <div class="weather">
        <h1>{props.city}</h1>
        <p>{props.temp}</p>
        <h3>{props.condition}</h3>
      </div> 
  )
}

export default Weather;