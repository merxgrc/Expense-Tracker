import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import Homepage from './Homepage';


function MyApp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/' element={<Signup />} /> 
      </Routes>
    </Router>
  )
}

export default MyApp;