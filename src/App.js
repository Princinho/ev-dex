import './App.css';
import React from 'react';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
// import SUVs from './Pages/SUVs';
import Header from './Components/Header';
import Wishlist from './Pages/Wishlist';
function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path='/Wishlist' element={<Wishlist />} />
        <Route exact path='/' element={<Home />} />

      </Routes>
    </>
  )
}

export default App;
