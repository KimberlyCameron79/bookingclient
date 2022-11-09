
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import roomsRoute from '../../routes/roomsRoute'
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        
      </Routes>
      </BrowserRouter>
              
    </div>
  );
}

export default App;
