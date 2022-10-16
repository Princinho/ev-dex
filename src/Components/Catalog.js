import React from "react";
import Vehicle from "./Vehicle";
import VehicleDetails from "./VehicleDetails";
import { nanoid } from "nanoid";
const PRICE = 1, NAME = 2, RANGE = 3
export default function Catalog({ min, max, minRange, maxRange, vehiclesData, brands,order }) {
    const [selectedVehicleId, setSelectedVehicleId] = React.useState(-1)
    const [catalogOrder, setCatalogOrder] = React.useState(order)
    function showDetails(id) {
        setSelectedVehicleId(id)
    }
    function orderVehicles(vehicles) {
        if (order == PRICE)
            vehicles.sort((v1, v2) => v2.priceEurDE - v1.priceEurDE)
        if (order == NAME)
            vehicles.sort((v1, v2) => v2.model - v1.model)
        if (order == RANGE)
            vehicles.sort((v1, v2) => v2.realRangeKm - v1.realRangeKm)
    }
    let vehiclesFiltered = vehiclesData.filter(v => v.priceEurDE > min && v.priceEurDE < max)
    vehiclesFiltered = vehiclesFiltered.filter(v => v.realRangeKm > minRange && v.realRangeKm < maxRange)
    if (brands.length > 0) {
        vehiclesFiltered = vehiclesFiltered.filter(v => brands.some(b => b == v.brand))
    }
    orderVehicles(vehiclesFiltered)
    function handleOrderChange(event) {
        setCatalogOrder(event.target.value)
    }
    console.log("Order from catalog:",order)

    return (
        <section className="main-content">
            <h1 className="section-title">Catalog</h1>
            <div className="search-bar">
                <input type="text" id="search-catalog" name="search" className="search" placeholder="Search among 100+ EVs">
                </input>
                <select name="order" value={order} onChange={handleOrderChange} className="select-order">
                    <option value={NAME} >Name</option>
                    <option value={PRICE} >Price</option>
                    <option value={RANGE} >Range</option>
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

export { PRICE, RANGE, NAME ,Catalog}