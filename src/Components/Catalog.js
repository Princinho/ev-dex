import React from "react";
export default function Catalog(prop){
    return(
        <section className="main-content">
            <h1 className="section-title">Catalog</h1>
            <div className="search-bar">
            <input type="text" name="search" className="search" placeholder="Search among 100+ EVs"/>
            <select name="order" className="select-order">
                <option value={1}>Popularity</option>
                <option value={2}>Range</option>
                <option value={3}>Price</option>
            </select>
            </div>
        </section>
    )
}