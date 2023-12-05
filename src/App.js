import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports
import Home from './Components/Home';
import AddStar from './Components/AddStar';
import Sidebar from './Components/Sidebar';

function App() {
  
  return (
    <div className="App bg-black flex flex-row">
        <Sidebar />
        <div className="flex-1 mt-10">
          <Routes>
            <Route path='/' Component={ Home } />
            <Route path='/add' Component={ AddStar } />
          </Routes>
        </div>
    </div>
  );
}

export default App;
