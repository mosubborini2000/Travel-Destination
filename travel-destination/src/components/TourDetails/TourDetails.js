import React, { useState } from 'react'
import { useParams } from 'react-router'
function TourDetails({props}) {
  const {id}=useParams();
  let tourDetail = props.filter((obj) => {
    return obj.id === id;
  });
  const[seeMore,setSeeMore]=useState(true);

 
  
  console.log(tourDetail);
  
  return (
    <div>
      <h2>{tourDetail[0].name}</h2>
      <img src={tourDetail[0].image} alt={tourDetail[0].name} />
      <h3>price:{tourDetail[0].price+"$"}</h3>
      {
  seeMore ? (
    <>
      <h3>{tourDetail[0].info.substring(0, 250)}</h3>
      <button onClick={() => setSeeMore(false)}>seeMore</button>
    </>
  ) : (
    <>
      <h3>{tourDetail[0].info}</h3>
      <button onClick={() => setSeeMore(true)}>seeLess</button>
    </>
  )
}
     

    
    
    
    
    </div>
  )
}

export default TourDetails




