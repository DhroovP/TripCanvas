import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './HomePage';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={HomePage}>
          </Route>
          <Route path="/about">
            {/* About component */}
          </Route>
          {/* other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
