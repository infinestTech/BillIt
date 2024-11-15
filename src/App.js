import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Combine from './components/Combine';
import './css/HomeScreen.scss' 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Combine />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
