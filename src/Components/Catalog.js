import React from "react";
import Vehicle from "./Vehicle";
const PRICE = 1, NAME = 2, RANGE = 3

export default function Catalog({ min, max,
    minRange, maxRange,
    vehiclesData, brands, order, showVehicleDetails, changeOrder, toggleFavorite }) {
    const [search, setSearch] = React.useState("")
    function orderVehicles(vehicles) {

        if (order == PRICE)
            vehicles.sort((v1, v2) => v2.priceEurDE - v1.priceEurDE)
        if (order == NAME)
            vehicles.sort((v1, v2) => {
                return v2.model.localeCompare(v1.model)
            })
        if (order == RANGE)
            vehicles.sort((v1, v2) => v2.realRangeKm - v1.realRangeKm)
    }

    let vehiclesFiltered = vehiclesData.filter(v => v.priceEurDE > min && v.priceEurDE < max)
    vehiclesFiltered = vehiclesFiltered.filter(v => v.realRangeKm > minRange && v.realRangeKm < maxRange)
    if (brands.length > 0) {
        vehiclesFiltered = vehiclesFiltered.filter(v => brands.some(b => b == v.brand))
    }
    if (search) {
        vehiclesFiltered = vehiclesFiltered.filter(v =>
            v.model.toLowerCase().includes(search.toLowerCase())
            || v.brand.toLowerCase().includes(search.toLowerCase()))

    }
    orderVehicles(vehiclesFiltered)


    return (
    <div className="catalog">
        <h1 className="section-title">Catalog</h1>
        <div className="search-bar">
            <input type="text" name="search" value={search} onChange={(e) => { setSearch(e.target.value) }} className="search" placeholder="Search among 100+ EVs">
            </input>
            <select name="order" value={order} onChange={({ target }) => { changeOrder(target.value) }} className="select-order">
                <option value={NAME} >Name</option>
                <option value={PRICE} >Price</option>
                <option value={RANGE} >Range</option>
            </select>
        </div>
        <div className="vehicles-list">
            {vehiclesFiltered.map(vehicle => {
                return <Vehicle key={vehicle.id} id={vehicle.id} data={vehicle}
                    showVehicleDetails={() => showVehicleDetails(vehicle.id)}
                    toggleFavorite={toggleFavorite} />
            })}

        </div>
    </div>
    )
}

export { PRICE, RANGE, NAME, Catalog }