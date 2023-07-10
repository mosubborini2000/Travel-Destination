import './App.css';
import db from './components/data/db.json';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
    <Home props={db}/>
    </div>
  );
}

export default App;





