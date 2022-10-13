import React from "react";
import bag from "../images/shopping-bag.svg"
import heart from "../images/heart-line.svg"
export default function Vehicle(props) {
    const vehicle=props.data
    return (
        <div className="vehicle">
            <img className="vehicle__image"
                src={vehicle.images[1] ||"https://ev-database.org/img/auto/Tesla_Model_X_2021/Tesla_Model_X_2021-01.jpg"}
                alt="" />
            <button className="btn-like"><img src={heart} alt="add to wishlist" /></button>
            <div className="vehicle__info">
                <span className="vehicle__brand">Brand: {vehicle.brand}</span>
                <h3 className="vehicle__name">{vehicle.model}</h3>
                <span className="vehicle__price-label">Price:</span>
                <span className="vehicle__price">40.000$</span>
                <span className="vehicle__old-price">65.000$</span>
                <button className="btn-add-to-cart"><img src={bag} alt="add to cart" /></button>
            </div>
        </div>
    )
}