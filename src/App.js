import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar"
import Catalog from "./Components/Catalog"
import PriceRange from './Components/PriceRange';
import React from 'react';
const url = 'https://ev-database.org/#sort:path~type~order=.rank~number~desc|range-slider-range:prev~next=0~1200|range-slider-acceleration:prev~next=2~23|range-slider-topspeed:prev~next=110~450|range-slider-battery:prev~next=10~200|range-slider-towweight:prev~next=0~2500|range-slider-fastcharge:prev~next=0~1500|paging:currentPage=0|paging:number=9'

function App() {
  const [pageData, setPageData] = React.useState("")
  // React.useEffect(()=>{
  //   getAllImages()
  // }, [])
  // // function getAllImages() {
  // //   const options = {
  // //     mode: 'no-cors'
  // //   }
  // //   fetch("./Components/test-data.json", options)
  // //     .then(response => response.json())
  // //     .then(data => setPageData(data.slice(100,200)))
  // // }
  console.log("Page is ",pageData)
  return (
    <>
      <Sidebar />
      <Header />
      <Catalog />
      <div>{pageData}</div>
    </>
  );
}

export default App;
