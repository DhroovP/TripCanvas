import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact>
            {/* Home component */}
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
