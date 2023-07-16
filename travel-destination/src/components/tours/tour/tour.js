import React from 'react';
import './tour.css';
import Tours from '../Tours';
function Tour({props}) {
  return (
    <div>
         <h2>{props.name}</h2>
          <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Tour;