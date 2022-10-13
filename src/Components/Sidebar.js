import React from "react"
import logo from "../images/logo.png"
import homeIcon from "../images/home-line.svg"
import { Link } from "react-router-dom"
import PriceRange from "./PriceRange"
import Checkbox from "./Checkbox"
function Sidebar(props) {
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
                <PriceRange lowPriceLimit={10000} highPriceLimit={300000} minPrice={25000} maxPrice={100000} />
                <div style={{display:"flex",flexDirection:"column",marginTop:"2em"}}>
                    <Checkbox/>
                    <Checkbox/>
                </div>
            </div>
        </aside>
    )

}
export default Sidebar

