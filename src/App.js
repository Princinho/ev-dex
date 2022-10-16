import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar"
import {Catalog,NAME,RANGE,PRICE} from "./Components/Catalog"
import React from 'react';
const url = './EVdata.json'
function App() {
  const [priceRange, setPriceRange] = React.useState({ min: 10000, max: 100000 })
  const [pageData, setPageData] = React.useState("")
  const [vehiclesData, setVehiclesData] = React.useState([])
  const [selectedBrands, setSelectedBrands] = React.useState([])
  const [order,setOrder]=React.useState(NAME)
  const [evRange, setEvRange] = React.useState({ min: 0, max: 2000 })
  // if (vehiclesData.length > 0) {
  //   setEvRange({
  //     min: vehiclesData.reduce((a, b) => {
  //       return a.realRangeKm < b.realRangeKm ? a : b
  //     }),
  //     max: vehiclesData.reduce((a, b) => {
  //       return a.realRangeKm > b.realRangeKm ? a : b
  //     })
  //   })
  // }
  React.useEffect(
    () => {
      fetch(url, { mode: 'no-cors' }).then(res => res.json()).then(data => setVehiclesData(data))
    }, []
  )
  const brands = vehiclesData.reduce((prevBrands, currentVehicle) => {
    const newBrand = prevBrands.some(b => b == currentVehicle.brand) ? null : currentVehicle.brand
    return newBrand ? [...prevBrands, newBrand] : prevBrands
  }, [])
  brands.sort()
  function updatePrice(min, max) {
    setPriceRange({ min: min, max: max })
    setOrder(PRICE)
  }
  function updateRange(min, max) {
    setEvRange({ min: min, max: max })
    setOrder(RANGE)
  }
  console.log("Order from app.js:",order)
  function updateBrands(updatedBrands) {
    setSelectedBrands(updatedBrands)
  }
  return (
    <>
      <Sidebar searchSettings={{
        minPrice: priceRange.min, maxPrice: priceRange.max, lowPriceLimit: 10000, highPriceLimit: 300000,
        minRange: 200,
        maxRange: 500,
        lowRangeLimit: 0,
        highRangeLimit:1000,
        brands: brands,
        updateBrands: updateBrands
      }}
        updatePrice={updatePrice}
        updateRange={updateRange} />
      <Header />
      <Catalog min={priceRange.min} max={priceRange.max} order={order}
      minRange={evRange.min}
      maxRange={evRange.max}
       brands={selectedBrands} vehiclesData={vehiclesData} />
      <div>{pageData}</div>
    </>
  );
}

export default App;
