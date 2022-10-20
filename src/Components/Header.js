import React from "react";
import { Link } from "react-router-dom"
export default function Header(props) {
    return (
        <>
            
            <header>
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
                    <Link className="sub-nav-link">Compare products</Link>
                    <Link className="sub-nav-link" to="/wishlist">Wishlist-Empty</Link>
                    <Link className="sub-nav-link cart">2 Products - $1000</Link>
                    </div>
                    
                </nav>
            </header>
        </>
    )
}