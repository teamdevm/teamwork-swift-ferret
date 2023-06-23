import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/css/App.css';

import { Header } from './components/index.js';
import { Home, SignIn } from './pages/index.js';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
