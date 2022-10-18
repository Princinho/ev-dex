import React from "react";
export default function VehicleDetails({ vehicle, close }) {
    // console.log(vehicle)
    return (<div className="details" style={{ }}
    >
        <button onClick={() => { close() }}
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: 0,
                border: 0,
                minHeight: "2rem",
                cursor: "pointer",
                minWidth: "2rem",
                // borderRadius:"50%",
                display: "grid",
                placeContent: "center"
            }}
        >
            X
        </button>
       
            <div style={{ display: "grid",columnGap:"1em",rowGap:".3em", gridTemplateColumns: "1fr 1fr" }}>
                <span>Brand:</span><span>{vehicle.brand}</span>
                <span>Model:</span><span>{vehicle.model}</span>
                <span>Battery:</span><span>{vehicle.batterySizeKwh}</span>
                <span>Shape:</span><span>{vehicle.shape}</span>
                <span>Seats:</span><span>{vehicle.seats}</span>
                <span>0-100Km/h:</span><span>{vehicle.accelerationSec}</span>
                <span>Top Speed:</span><span>{vehicle.topSpeed} Km/h</span>
                <span>Real Range:</span><span>{vehicle.realRangeKm} Km</span>
                <span>Efficiency:</span><span>{vehicle.efficiencyWhPerKm} Wh/Km</span>
                <span>Fast-charge Speed:</span><span>{vehicle.fastChargeSpeedPerHr}Km/h</span>
                <span>Price DE:</span><span>{parseInt(vehicle.priceEurDE).toLocaleString("fr-FR", {style:"currency", currency:"EUR"})}</span>
                <span>Price NL:</span><span>{parseInt(vehicle.priceEurNL).toLocaleString("nl-NL", {style:"currency", currency:"EUR"})}</span>
                <span>Price UK:</span><span>{parseInt(vehicle.priceEurUK).toLocaleString("en-GB", {style:"currency", currency:"GBP"})}</span>
                <span>Price CFA:</span><span>{parseInt(vehicle.priceEurDE*655).toLocaleString("tg-TG", {style:"currency", currency:"XOF"})}</span>
            </div>
            <img className="vehicle-detail-image" src={vehicle.images[1]} alt={`${vehicle.brand} ${vehicle.model}`} style={{ width: "70%" }} />
        
    </div>)
}

// "brand": "Lucid",
// "model": "Air Dream Edition P",
// "batterySizeKwh": "118",
// "shape": "Sedan",
// "seats": "5",
// "accelerationSec": "2.7",
// "topSpeed": "270",
// "realRangeKm": "655",
// "efficiencyWhPerKm": "180",
// "fastChargeSpeedPerHr": "830",
// "priceEurDE": "218000",
// "priceEurNL": "222000",
// "priceEurUK": "N/A",
// "id": "-xboV8hvz-pE_xBG0URRP"