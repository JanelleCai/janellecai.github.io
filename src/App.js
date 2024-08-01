import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';

function App() {
  return (
    <Router>
      <div className="App font-reg mt-16">
        <Navbar />
        <main className="mx-auto mt-4 text-left">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teaching" element={<Teaching />} />
          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

export default App;
