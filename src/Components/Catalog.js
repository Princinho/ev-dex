import React from "react";
import Vehicle from "./Vehicle";
const url = './EVs.json'
export default function Catalog(props) {
    const [vehiclesData, setVehiclesData] = React.useState([])
    React.useEffect(
        () => {
            fetch(url, { mode: 'no-cors' }).then(res => res.json()).then(data => setVehiclesData(data))
        }, []
    )

    return (
        <section className="main-content">
            <h1 className="section-title">Catalog</h1>
            <div className="search-bar">
                <input type="text" id="search-catalog" name="search" className="search" placeholder="Search among 100+ EVs">
                </input>
                <select name="order" className="select-order">
                    <option value={1}>Popularity</option>
                    <option value={2}>Range</option>
                    <option value={3}>Price</option>
                </select>
            </div>
            <div className="vehicles-list">
                {vehiclesData.map(vehicle=>{
                    return <Vehicle data={vehicle}/>
                })}
                

            </div>
        </section>
    )
}