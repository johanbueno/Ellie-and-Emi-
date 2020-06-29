import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Likes from './components/likes';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Likes/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
