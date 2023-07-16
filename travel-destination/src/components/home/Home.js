import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';


function Home({props}) {
    return (
      <div>
        <Header />
        <Tours props={props}/>
        <Footer/>

      </div>
    );
  }
  
  export default Home;






