import React from "react";
import Vehicle from "./Vehicle";
export default function Catalog(props) {
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
                <Vehicle/>
                <Vehicle image="https://ev-database.org/img/auto/BMW_iX_2022/BMW_iX_2022-01.jpg"/>
                <Vehicle image="https://ev-database.org/img/auto/Kia_EV6_GT_2021/Kia_EV6_GT_2021-01.jpg"/>
            </div>
        </section>
    )
}