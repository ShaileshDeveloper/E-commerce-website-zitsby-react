
import './App.css';
import {Routes , Route} from "react-router-dom"

import Homescreen from "./screens/Homescreen"
import Productsmenscreen from './screens/productsmenscreen';

function App() {
  return (
    <div className="app">
     <Routes>
     <Route path ="/" element ={<Homescreen /> } />
     <Route path ="/mensproduct" element ={<Productsmenscreen />} />
     </Routes>
    </div>
  );
}

export default App;
