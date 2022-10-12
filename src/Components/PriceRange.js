import React from "react"
export default function PriceRange(props) {
    const sliderRef = React.useRef(null)
    const lowPriceLimit = 1000, highPriceLimit = 10000
    const [priceData, setPriceData] = React.useState({
        minPrice: 2500,
        maxPrice: 7000
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
    }
    function changeMinPrice(event) {
        let newPrice = parseInt(event.target.value)
        // console.log(`low price limit: ${lowPriceLimit}`)
        if (newPrice < lowPriceLimit) newPrice = lowPriceLimit
        if (newPrice > priceData.maxPrice - MIN_GAP) { newPrice = priceData.maxPrice - MIN_GAP }
        setPriceData(prev => ({ ...prev, minPrice: newPrice }))

    }
    console.log(priceData)
    const leftOffset=(priceData.minPrice - lowPriceLimit) / (highPriceLimit - lowPriceLimit) * 100
    const rightOffset=100 - ((priceData.maxPrice - lowPriceLimit) / (highPriceLimit - lowPriceLimit) * 100)
    return (

        <div className="wrapper">
            <header>
                <h4>Price</h4>
            </header>
            <div className="price-input">
                <div className="field">
                    <span>Min</span>
                    <input type="number" onChange={changeMinPrice} name={MIN_PRICE_TXT} min={lowPriceLimit} max={highPriceLimit} className="input-min" value={priceData.minPrice} />
                </div>
                <div className="separator">-</div>
                <div className="field">
                    <span>Max</span>
                    <input type="number" onChange={changeMaxPrice} name={MAX_PRICE_TXT} min={lowPriceLimit} max={highPriceLimit} className="input-max" value={priceData.maxPrice} />
                </div>
            </div>
            <div className="slider">
                <div className="progress"
                    style={{
                        left:leftOffset>=0?`${leftOffset}%`:"0%",
                        right: rightOffset>=0?`${rightOffset}%`:"0%"
                    }}
                ></div>
            </div>
            <div className="range-input">

                <input type="range" onChange={changeMinPrice}
                    ref={minPriceSliderRef}
                    name={MIN_PRICE_SLIDER} value={priceData.minPrice}
                    className="range-min" min={lowPriceLimit} max={highPriceLimit} step="100" />

                <input type="range" onChange={changeMaxPrice}
                    ref={maxPriceSliderRef}
                    name={MAX_PRICE_SLIDER} value={priceData.maxPrice}
                    className="range-max" min={lowPriceLimit} max={highPriceLimit} step="100" />
            </div>
        </div>
    )
}