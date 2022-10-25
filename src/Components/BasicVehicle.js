import React from "react";
import heart from "../images/heart-line.svg"
export default function Vehicle(props) {

    const vehicle = props.data
    const priceXOF = 655 * parseInt(vehicle.priceEurDE)
   
    return (
        <div style={{maxWidth:"300px"}} >
            <h3 style={{ fontSize: vehicle.model.length >= 22 ? "1em" : "1.2em" }} >{vehicle.brand} {vehicle.model}</h3>
            <img className="vehicle__image" style={{width:"100%"}}
                src={vehicle.images[1]}
                alt="" />
           
            <div >
                <span className="vehicle__brand__label">Brand:<span className="vehicle__brand">{vehicle.brand}</span></span>
                <h3 className="vehicle__name" style={{ fontSize: vehicle.model.length >= 25 ? "1em" : "1.2em" }}>{vehicle.model}</h3>
                <span className="vehicle__price-label">Price:</span>
                <span className="vehicle__price">{parseInt(priceXOF).toLocaleString("tg-TG", { style: "currency", currency: "XOF" })}</span>
                <span className="vehicle__old-price">{parseInt(vehicle.priceEurDE).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</span>
                <span className="vehicle__range-label">Range:</span>
                <span className="vehicle__range">{vehicle.realRangeKm} km</span>
            </div>
        </div>
    )
}