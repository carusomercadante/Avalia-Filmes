import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { createRoot } from "react-dom";
import './global.css';
import Home from './pages/Home';
import Notas from './pages/Notas';
import Aval from './pages/Aval';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notas/:id" element={<Notas />} />
      <Route path="/aval/:id" element={<Aval />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

