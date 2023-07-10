import React from 'react';
import './Tours.css';

function Tours({props}) {
  return (
    <div>
      {props.map((tour,i) => (
        <div key={tour.id} className="tour">
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
        </div>
      ))}
    </div>
  );
}

export default Tours;

