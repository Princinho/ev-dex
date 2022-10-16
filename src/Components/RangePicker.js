import React from "react"
export default function RangePicker(props) {
    const { lowLimit, highLimit, min, max, title, update, step } = props
    const [data, setData] = React.useState({
        minValue: min,
        maxValue: max
    })
    const MIN_GAP = highLimit/10
    const minValueSliderRef = React.useRef()
    const maxValueSliderRef = React.useRef()

    function changeMaxValue(event) {
        let newValue = parseInt(event.target.value)
        if (newValue < data.minValue + MIN_GAP) newValue = data.minValue + MIN_GAP
        if (newValue > highLimit) newValue = highLimit

        setData(prev => ({ ...prev, maxValue: newValue }))
        update(data.minValue, data.maxValue)
    }
    function changeMinValue(event) {
        let newPrice = parseInt(event.target.value)
        if (newPrice < lowLimit) newPrice = lowLimit
        if (newPrice > data.maxValue - MIN_GAP) { newPrice = data.maxValue - MIN_GAP }
        setData(prev => ({ ...prev, minValue: newPrice }))
        update(data.minValue, data.maxValue)

    }
    const leftOffset = (data.minValue - lowLimit) / (highLimit - lowLimit) * 100
    const rightOffset = 100 - ((data.maxValue - lowLimit) / (highLimit - lowLimit) * 100)
    return (

        <div className="wrapper">
            <header>
                <h4>{title}</h4>
            </header>
            <div className="price-input">
                <div className="field">
                    <span>Min</span>
                    <input type="number" onInput={changeMinValue} min={lowLimit} max={highLimit} className="input-min" value={data.minValue} />
                </div>
                <div className="separator">-</div>
                <div className="field">
                    <span>Max</span>
                    <input type="number" onInput={changeMaxValue} min={lowLimit} max={highLimit} className="input-max" value={data.maxValue} />
                </div>
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

                <input type="range" onInput={changeMinValue}
                    ref={minValueSliderRef}
                    value={data.minValue}
                    className="range-min" min={lowLimit} max={highLimit} step={step}
                />

                <input type="range" onInput={changeMaxValue}
                    ref={maxValueSliderRef}
                    value={data.maxValue}
                    className="range-max" min={lowLimit} max={highLimit} step={step} />
            </div>
        </div>
    )
}