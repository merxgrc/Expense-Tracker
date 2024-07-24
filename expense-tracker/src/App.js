import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from "./Signup";
import './App.css';

export default function MyApp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Signup />
    </Router>
  )
}