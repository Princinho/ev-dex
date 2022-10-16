import React from "react"
export default function PriceRange(props) {
    const toXOF = 655
    const { lowPriceLimit, highPriceLimit, minPrice, maxPrice } = props
    const [priceData, setPriceData] = React.useState({
        minPrice: minPrice,
        maxPrice: maxPrice
    })
    const MIN_PRICE_SLIDER = "minPriceSliderValue",
        MAX_PRICE_SLIDER = "maxPriceSliderValue",
        MIN_PRICE_TXT = "minPrice",
        MAX_PRICE_TXT = "maxPrice",
        MIN_GAP = 1000
    const minPriceSliderRef = React.useRef()
    const maxPriceSliderRef = React.useRef()

    function changeMaxPrice(event) {
        let newPrice = parseInt(event.target.value)
        if (newPrice < priceData.minPrice + MIN_GAP) newPrice = priceData.minPrice + MIN_GAP
        if (newPrice > highPriceLimit) newPrice = highPriceLimit

        setPriceData(prev => ({ ...prev, maxPrice: newPrice }))
        props.updatePrice(priceData.minPrice, priceData.maxPrice)
    }
    function changeMinPrice(event) {
        let newPrice = parseInt(event.target.value)
        if (newPrice < lowPriceLimit) newPrice = lowPriceLimit
        if (newPrice > priceData.maxPrice - MIN_GAP) { newPrice = priceData.maxPrice - MIN_GAP }
        setPriceData(prev => ({ ...prev, minPrice: newPrice }))
        props.updatePrice(priceData.minPrice, priceData.maxPrice)

    }
    const leftOffset = (priceData.minPrice - lowPriceLimit) / (highPriceLimit - lowPriceLimit) * 100
    const rightOffset = 100 - ((priceData.maxPrice - lowPriceLimit) / (highPriceLimit - lowPriceLimit) * 100)
    return (

        <div className="wrapper">
            <header>
                <h4>Price</h4>
            </header>
            <div className="price-input">
                <div className="field">
                    <span>Min</span>
                    <input type="number" onInput={changeMinPrice} name={MIN_PRICE_TXT} min={lowPriceLimit} max={highPriceLimit} className="input-min" value={priceData.minPrice} />
                </div>
                <div className="separator">-</div>
                <div className="field">
                    <span>Max</span>
                    <input type="number" onInput={changeMaxPrice} name={MAX_PRICE_TXT} min={lowPriceLimit} max={highPriceLimit} className="input-max" value={priceData.maxPrice} />
                </div>
            </div>
            <div style={{ height: "2rem",fontSize:".8rem",fontWeight:"600",letterSpacing:".05rem", width: "100%", backgroundColor: "var(--clr-separators)", marginBottom: "2em", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span>{parseInt(priceData.minPrice * toXOF).toLocaleString("tg-TG", { style: "currency", currency: "XOF" })}</span>
                <span style={{margin:".5em"}}>-</span>
                <span>{parseInt(priceData.maxPrice * toXOF).toLocaleString("tg-TG", { style: "currency", currency: "XOF" })}</span>
            </div>
            <div className="slider">
                <div className="progress"
                    style={{
                        left: leftOffset >= 0 ? `${leftOffset}%` : "0%",
                        right: rightOffset >= 0 ? `${rightOffset}%` : "0%"
                    }}
                ></div>
            </div>
            <div className="range-input">

                <input type="range" onInput={changeMinPrice}
                    ref={minPriceSliderRef}
                    name={MIN_PRICE_SLIDER} value={priceData.minPrice}
                    className="range-min" min={lowPriceLimit} max={highPriceLimit} step="100"
                />

                <input type="range" onInput={changeMaxPrice}
                    ref={maxPriceSliderRef}
                    name={MAX_PRICE_SLIDER} value={priceData.maxPrice}
                    className="range-max" min={lowPriceLimit} max={highPriceLimit} step="100" />
            </div>
        </div>
    )
}