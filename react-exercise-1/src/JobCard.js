import React from 'react';

function JobCard(props) {
  return(
    <div>
      <div class="weather">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default JobCard;