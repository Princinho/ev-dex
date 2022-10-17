import React, { useEffect } from "react"
import logo from "../images/logo.png"
import homeIcon from "../images/home-line.svg"
import { Link } from "react-router-dom"
import Checkbox from "./Checkbox"
import RangePicker from "./RangePicker"
function Sidebar({ searchSettings, updatePrice,updateRange }) {
    const toXOF = 655
    const { minPrice,
        maxPrice,
        lowPriceLimit,
        highPriceLimit,
        brands,
        updateBrands } = searchSettings
    const [selectedBrands, setSelectedBrands] = React.useState([])
    function swapBrand(brand) {
        if (selectedBrands.some(b => b === brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand))
        } else {
            setSelectedBrands([...selectedBrands, brand])
        }
    }
    useEffect(() => {
        updateBrands(selectedBrands)
    }, [selectedBrands])
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
                {/* <PriceRange lowPriceLimit={lowPriceLimit}
                    highPriceLimit={highPriceLimit}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    updatePrice={(min, max) => updatePrice(min, max)}
                /> */}

                <RangePicker lowLimit={lowPriceLimit}
                    highLimit={highPriceLimit}
                    min={minPrice}
                    max={maxPrice}
                    update={(min, max) => updatePrice(min, max)}
                    step={5000}
                    title="Price"
                />

                <div style={{ height: "2rem", marginTop: "2em", fontSize: ".8rem", fontWeight: "600", letterSpacing: ".05rem", width: "100%", backgroundColor: "var(--clr-separators)", marginBottom: "2em", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span>{parseInt(minPrice * toXOF).toLocaleString("tg-TG", { style: "currency", currency: "XOF" })}</span>
                    <span style={{ margin: ".5em" }}>-</span>
                    <span>{parseInt(maxPrice * toXOF).toLocaleString("tg-TG", { style: "currency", currency: "XOF" })}</span>
                </div>
                <RangePicker lowLimit={0}
                    highLimit={1000}
                    min={200}
                    max={500}
                    update={(min, max) => updateRange(min, max)}
                    step={10}
                    title="Range"
                />
                <div style={{ display: "flex", flexDirection: "column", marginTop: "2em", height: "10em", overflowY: "scroll", overflowX: "hidden" }}>
                    {(brands.map(b => {
                        return <Checkbox
                            key={b}
                            name={b}
                            handleClick={() => {
                                swapBrand(b)

                            }}
                            checked={selectedBrands.some(brand => brand === b)} />
                    }))}
                </div>
            </div>
        </aside>
    )

}
export default Sidebar

