import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar"
import Catalog from "./Components/Catalog"
import PriceRange from './Components/PriceRange';
import React from 'react';
const url = './EVdata.json'
function App() {
  const [priceRange, setPriceRange] = React.useState({ min: 10000, max: 100000 })
  const [pageData, setPageData] = React.useState("")
  const [vehiclesData, setVehiclesData] = React.useState([])
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
  // console.log(brands)
  function updatePrice(min, max) {
    setPriceRange({ min: min, max: max })
  }

  return (
    <>
      <Sidebar searchSettings={{ minPrice: 10000, maxPrice: 100000, lowPriceLimit: 10000, highPriceLimit: 300000, brands: brands }}
        updatePrice={updatePrice} />
      <Header />
      <Catalog min={priceRange.min} max={priceRange.max} vehiclesData={vehiclesData} />
      <div>{pageData}</div>
    </>
  );
}

export default App;
