import './App.css';
import React from 'react';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
// import SUVs from './Pages/SUVs';
import Header from './Components/Header';
import Wishlist from './Pages/Wishlist';
import Sidebar from './Components/Sidebar';
import Compare from './Pages/Compare';
import { useCarManager } from './Hooks/useCarManager';
import { useLocation } from 'react-router-dom';
function App() {
  const carManager = useCarManager()
  const {
    updateBrands,
    updateRange,
    updatePrice,
    priceRange,
    brands
  } = carManager
  console.log(useLocation())
  return (
    <>
      <Header />
      <section className="main-content">
        {useLocation().pathname != "/compare" &&
          <Sidebar searchSettings={{
            minPrice: priceRange.min, maxPrice: priceRange.max, lowPriceLimit: 10000, highPriceLimit: 300000,
            minRange: 200,
            maxRange: 500,
            lowRangeLimit: 0,
            highRangeLimit: 1000,
            brands: brands,
            updateBrands: updateBrands
          }}
            updatePrice={updatePrice}
            updateRange={updateRange}
          />}
        <Routes>
          <Route exact path='/Wishlist' element={<Wishlist carManager={carManager} />} />
          <Route exact path='/Compare' element={<Compare carManager={carManager} />} />
          <Route exact path='/' element={<Home carManager={carManager} />} />
        </Routes>
      </section>
    </>
  )
}

export default App;
