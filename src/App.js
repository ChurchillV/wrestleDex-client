import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Component Imports
import Home from './Pages/Home';
import AddStar from './Pages/AddStar';
import Sidebar from './Pages/Sidebar';

function App() {
  
  return (
    <div className="App bg-black flex flex-row h-screen">
        <ToastContainer position='top-center' />
        <Sidebar />
        <div className="flex-1 mt-10 overflow-auto">
          <Routes>
            <Route path='/' Component={ Home } />
            <Route path='/add' Component={ AddStar } />
          </Routes>
        </div>
        <div>

        </div>
    </div>
  );
}

export default App;
