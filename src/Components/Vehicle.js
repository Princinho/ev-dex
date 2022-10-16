import React from "react";
import bag from "../images/shopping-bag.svg"
import heart from "../images/heart-line.svg"
export default function Vehicle(props) {
    
    const vehicle = props.data
    const showDetails = props.showDetails
    const priceXOF=655*parseInt(vehicle.priceEurDE)

    return (
        <div className="vehicle" onClick={() => { showDetails(props.id) }}>
            <img className="vehicle__image"
                src={vehicle.images[1] || "https://ev-database.org/img/auto/Tesla_Model_X_2021/Tesla_Model_X_2021-01.jpg"}
                alt="" />
            <button className="btn-like"><img src={heart} alt="add to wishlist" /></button>
            <div className="vehicle__info">
                <span className="vehicle__brand__label">Brand:<span className="vehicle__brand">{vehicle.brand}</span></span>
                <h3 className="vehicle__name" style={{fontSize:vehicle.model.length>=25?"1em":"1.2em"}}>{vehicle.model}</h3>
                <span className="vehicle__price-label">Price:</span>
                <span className="vehicle__price">{parseInt(priceXOF).toLocaleString("tg-TG", {style:"currency", currency:"XOF"})}</span>
                <span className="vehicle__old-price">{parseInt(vehicle.priceEurDE).toLocaleString("de-DE", {style:"currency", currency:"EUR"})}</span>
                <span className="vehicle__range-label">Range:</span>
                <span className="vehicle__range">{vehicle.realRangeKm} km</span>
                <button className="btn-add-to-cart"><img src={bag} alt="add to cart" /></button>
            </div>
        </div>
    )
}