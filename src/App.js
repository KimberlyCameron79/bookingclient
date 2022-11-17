
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Booking from './screens/Booking';
import Register from './screens/Register';
import Login from './screens/Login';
import Profile from './screens/Profile';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:roomid/:fromdate/:todate" element={<Booking />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<ProfileScreen />}/>
     
        
      </Routes>
      </BrowserRouter>
              
    </div>
  );
}

export default App;
