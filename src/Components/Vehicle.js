import React from "react";
import bag from "../images/shopping-bag.svg"
import heart from "../images/heart-line.svg"
export default function Vehicle(props) {
    return (
        <div className="vehicle">
            <img className="vehicle__image"
                src={props.image ||"https://ev-database.org/img/auto/Tesla_Model_X_2021/Tesla_Model_X_2021-01.jpg"}
                alt="image of a car" />
            <button className="btn-like"><img src={heart} /></button>
            <div className="vehicle__info">
                <span className="vehicle__brand">Brand: Tesla</span>
                <h3 className="vehicle__name">Tesla Model X</h3>
                <span className="vehicle__price-label">Price:</span>
                <span className="vehicle__price">40.000$</span>
                <span className="vehicle__old-price">65.000$</span>
                <button className="btn-add-to-cart"><img src={bag} /></button>
            </div>
        </div>
    )
}