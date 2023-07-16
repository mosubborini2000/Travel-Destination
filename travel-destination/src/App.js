import './App.css';
import db from './components/data/db.json';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
 import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home props={db} />}></Route>
        <Route path='/city/:id' element={<TourDetails props={db} />}></Route>
      </Routes>



    {/* <Home props={db}/> */}
    </div>
  );
}

export default App;
