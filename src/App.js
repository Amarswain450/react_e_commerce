import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import CardDetails from './components/CardDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card-details/:id' element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
