import React from "react";
import bag from "../images/shopping-bag.svg"
import heart from "../images/heart-line.svg"
import heartFill from "../images/heart-fill.svg"
export default function Vehicle(props) {

    const vehicle = props.data
    const showDetails = props.showVehicleDetails
    const priceXOF = 655 * parseInt(vehicle.priceEurDE)
    const handleClick = (event) => {
        event.stopPropagation()
        props.toggleFavorite(vehicle.id)
    }
    return (
        <div className="vehicle" onClick={() => { showDetails() }}>
            <img className="vehicle__image"
                src={vehicle.images[1]}
                alt="" />
            <button className="btn-like" onClick={handleClick}>
               {vehicle.isFavorite ? 
               <img src={heartFill} alt="add to wishlist" />:
               <img src={heart} alt="Remove from wishlist" />
            }
                </button>
            <div className="vehicle__info">
                <span className="vehicle__brand__label">Brand:<span className="vehicle__brand">{vehicle.brand}</span></span>
                <h3 className="vehicle__name" style={{ fontSize: vehicle.model.length >= 25 ? "1em" : "1.2em" }}>{vehicle.model}</h3>
                <span className="vehicle__price-label">Price:</span>
                <span className="vehicle__price">{parseInt(priceXOF).toLocaleString("tg-TG", { style: "currency", currency: "XOF" })}</span>
                <span className="vehicle__old-price">{parseInt(vehicle.priceEurDE).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</span>
                <span className="vehicle__range-label">Range:</span>
                <span className="vehicle__range">{vehicle.realRangeKm} km</span>
                <button className="btn-add-to-cart"><img src={bag} alt="add to cart" /></button>
            </div>
        </div>
    )
}