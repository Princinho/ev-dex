import React from "react";
import Vehicle from "./Vehicle";
import VehicleDetails from "./VehicleDetails";
import { nanoid } from "nanoid";
export default function Catalog({ min, max,vehiclesData }) {
    const [selectedVehicleId, setSelectedVehicleId] = React.useState(-1)
    
    function showDetails(id) {
        // console.log(id)
        console.log(vehiclesData[id])
        setSelectedVehicleId(id)
    }
    
    const vehiclesFiltered = vehiclesData.filter(v => v.priceEurDE > min && v.priceEurDE < max)
    return (
        <section className="main-content">
            <h1 className="section-title">Catalog</h1>
            <div className="search-bar">
                <input type="text" id="search-catalog" name="search" className="search" placeholder="Search among 100+ EVs">
                </input>
                <select name="order" className="select-order">
                    <option value={3}>Price</option>
                    <option value={2}>Range</option>
                    <option value={1}>Popularity</option>
                </select>
            </div>
            <div className="vehicles-list">
                {vehiclesFiltered.map((vehicle, index) => {
                    return <Vehicle key={vehicle.id} id={vehicle.id} data={vehicle} showDetails={showDetails} />
                })}
                {vehiclesData[selectedVehicleId] &&
                    <VehicleDetails vehicle={vehiclesData[selectedVehicleId]} close={() => setSelectedVehicleId(-1)} />}
            </div>
        </section>
    )
}