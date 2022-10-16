import React from "react"
import logo from "../images/logo.png"
import homeIcon from "../images/home-line.svg"
import { Link } from "react-router-dom"
import PriceRange from "./PriceRange"
import Checkbox from "./Checkbox"
function Sidebar({ searchSettings, updatePrice }) {
    const { minPrice, maxPrice, lowPriceLimit, highPriceLimit, brands } = searchSettings
    return (
        <aside className="sidebar">
            <Link className="main-nav-link logo">
                <img className="main-nav-logo-img" src={logo} alt="EV Dex logo" />
                <span className="brand-wrapper">
                    <span className="brand">EV-DEX</span>
                    <br />
                    <span className="motto">Index for EVs</span>

                </span>
            </Link>
            <Link className="sub-nav-item location">
                <img src={homeIcon} alt="Home icon" /> Main Page &gt; <span>Catalog</span></Link>
            <div className="sidebar-inner-wrapper">
                <PriceRange lowPriceLimit={lowPriceLimit}
                    highPriceLimit={highPriceLimit}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    updatePrice={(min, max) => updatePrice(min, max)} />
                <div style={{ display: "flex", flexDirection: "column", marginTop: "2em",height:"10em",overflowY:"scroll",overflowX:"hidden" }}>
                    {(brands.map(b => {
                        return <Checkbox key={b} name={b} />
                    }))}
                </div>
            </div>
        </aside>
    )

}
export default Sidebar

