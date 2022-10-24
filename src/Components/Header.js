import React from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import logo from "../images/logo.png"
import homeIcon from "../images/home-line.svg"
export default function Header(props) {
    const location = useLocation().pathname
    return (
        <>

            <header>
                <aside className="header-left">
                    <Link className="main-nav-link logo" to="/">
                        <img className="main-nav-logo-img" src={logo} alt="EV Dex logo" />
                        <span className="brand-wrapper">
                            <span className="brand">EV-DEX</span>
                            <br />
                            <span className="motto">Index for EVs</span>

                        </span>
                    </Link>
                    <Link className="sub-nav-item location">
                        <img src={homeIcon} alt="Home icon" /> Main Page &gt; <span>Catalog</span></Link>
                </aside>
                <nav className="main-nav">
                    <div className="main-nav-group">
                        <Link className="main-nav-link">Flatbeds</Link>
                        <Link className="main-nav-link">Sedans</Link>
                    </div>
                    <div className="main-nav-group">
                        <Link className="main-nav-link">SUVs</Link>
                        <Link className="main-nav-link">Trucks</Link>
                    </div>
                    <div className="main-nav-group  account">
                        <Link className="main-nav-link">ENG</Link>
                        <Link className="main-nav-link">Prince</Link>
                    </div>
                    <div className="sub-nav">
                        <Link className="sub-nav-link" to="/compare">Compare products</Link>
                        <Link className={`sub-nav-link ${location == "/wishlist" ? "active" : ""}`} to="/wishlist">Wishlist</Link>
                        <Link className="sub-nav-link cart">2 Products - $1000</Link>
                    </div>

                </nav>
            </header>
        </>
    )
}