import React from 'react';
import './Tours.css';
import { Link } from 'react-router-dom';
import Tour from './tour/tour';

function Tours({props}) {
  return (
    <div>
      {
      props.map((obj,i) => (
        <div key={obj.id} className="cssTours" style={{backgroundColor : 'red'}}>
         
         <Link to={`/city/${obj.id}`}> <Tour key={i} props={obj}/> </Link>
        
        </div>
      ))}
    </div>
  );
}

export default Tours;

