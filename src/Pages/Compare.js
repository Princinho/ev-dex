import VehiclePicker from "../Components/VehiclePicker";
import React from "react";
export default function Compare({ carManager }) {
    const [index1, setIndex1] = React.useState(0)
    const [index2, setIndex2] = React.useState(0)
    const [search, setSearch] = React.useState("")
    const [search2, setSearch2] = React.useState("")
    const [v1, setV1] = React.useState(null)
    const [v2, setV2] = React.useState(null)
    const [vehicles, setVehicles] = React.useState(carManager.vehiclesData)
    const [vehicles2, setVehicles2] = React.useState(carManager.vehiclesData)
    React.useEffect(() => {
        setV1(vehicles[index1])
        setV2(vehicles[index2])
    })
    function getMax(key) {
        if (!vehicles) return 0
        return vehicles.reduce((prev, current) => {
            return parseInt(prev) < parseInt(current[key]) ? current[key] : prev

        }, 0)
    }
    function getDisplay(key) {
        return (
            <div style={{ display: "flex", marginBlock: "1em", width: "100%", minHeight: "4em", gridColumn: "span 3", backgroundColor: "#ddd" }}>

                <div style={{ flex: 1 }}>
                    <div style={{
                        display: "flex", justifyContent: "space-between",
                        width: getWidth(v1, key),
                        minHeight: "2em", backgroundColor: "var(--clr-accent)", paddingInline: "1em"
                    }}>
                        <span>{v1.brand} {v1.model}</span>
                        <span>{v1[key]}</span>
                    </div>
                    <div style={{
                        width: getWidth(v2, key),
                        display: "flex", justifyContent: "space-between",
                        minHeight: "2em", backgroundColor: "var(--clr-primary-dark)", color: "white", paddingInline: "1em"
                    }}>
                        <span>{v2.brand} {v2.model}</span>
                        <span>{v2[key]}</span>
                    </div>
                </div>

            </div>
        )
    }

    function getWidth(vehicle, key) {
        if (key == 'accelerationSec') {
            const result = (parseFloat(getMax(key)) - parseFloat(vehicle[key])) / parseFloat(getMax(key)) * 100 + "%"
            return result
        }
        return parseInt(vehicle[key]) / parseInt(getMax(key)) * 100 + "%"
    }
    function updateSearch(e) {
        const searchTerm = e.target.value
        
        const filteredVehicles = carManager.vehiclesData.filter(v =>
            v.model.toLowerCase().includes(searchTerm.toLowerCase())
            || v.brand.toLowerCase().includes(searchTerm.toLowerCase()))
        if (e.target.name == "search") {
            setSearch(searchTerm)
            setVehicles(searchTerm == "" ? carManager.vehiclesData : filteredVehicles)
            setIndex1(0)
        } else {
            setSearch2(searchTerm)
            setVehicles2(searchTerm == "" ? carManager.vehiclesData : filteredVehicles)
            setIndex2(0)
        }
    }
    // console.log(vehicles2)
    return (
        <section className="section-compare">
            <div style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
                <input type="text" name="search" onChange={updateSearch} value={search} className="search" style={{minWidth:"40%"}}  placeholder="Search among 100+ EVs" />
                <input type="text" name="search2" onChange={updateSearch} value={search2} className="search" style={{minWidth:"40%"}}  placeholder="Search among 100+ EVs" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <VehiclePicker vehiclesData={vehicles} selectedIndex={index1} setSelected={(index) => {
                    setIndex1(index)
                    setV1(vehicles[index])
                }} />
                <VehiclePicker vehiclesData={vehicles2} selectedIndex={index2} setSelected={(index) => {
                    setIndex2(index)
                    setV2(vehicles2[index])
                }} />
            </div>
            {(v2 && v1) &&
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                    <span>Range</span>
                    {getDisplay('realRangeKm')}

                    <span>Battery (Kwh):</span>
                    {getDisplay('batterySizeKwh')}

                    <span>0-100Km/h (Seconds):</span>
                    {getDisplay('accelerationSec')}

                    <span>Top Speed (km/h):</span>
                    {getDisplay('topSpeed')}

                    <span>Shape:</span><span>{v1.shape}</span>
                    <span>{v2.shape}</span>

                    <span>Seats:</span><span>{v1.seats}</span>
                    <span>{v2.seats}</span>


                    <span>Efficiency (Wh/km):</span><span>{v1.efficiencyWhPerKm} Wh/Km</span>
                    <span>{v2.efficiencyWhPerKm} Wh/Km</span>

                    <span>Fast-charge Speed (Km/h):</span><span>{v1.fastChargeSpeedPerHr}Km/h</span>
                    <span>{v2.fastChargeSpeedPerHr}Km/h</span>


                    <span>Price NL:</span><span>{parseInt(v1.priceEurNL).toLocaleString("nl-NL", { style: "currency", currency: "EUR" })}</span>
                    <span>{parseInt(v2.priceEurNL).toLocaleString("nl-NL", { style: "currency", currency: "EUR" })}</span>

                    <span>Price UK:</span><span>{parseInt(v1.priceEurUK).toLocaleString("en-GB", { style: "currency", currency: "GBP" })}</span>
                    <span>{parseInt(v2.priceEurUK).toLocaleString("en-GB", { style: "currency", currency: "GBP" })}</span>


                </div>}
        </section>
    )
}