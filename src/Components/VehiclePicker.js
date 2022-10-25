import Vehicle from "./Vehicle";
import React, { useEffect } from "react";
import leftArrow from "../images/arrow-left-s-line.svg"
import rightArrow from "../images/arrow-right-s-line.svg"
import BasicVehicle from "./BasicVehicle";
export default function VehiclePicker({ vehiclesData, setSelected, selectedIndex }) {
    const vehicle = vehiclesData[selectedIndex]

    function selectPrevVehicle() {
        setSelected(selectedIndex - 1 > 0 ? selectedIndex - 1 : 0)
    }
    function selectNextVehicle() {
        setSelected(selectedIndex + 1 < vehiclesData.length ? selectedIndex + 1 : selectedIndex)
    }
    return (
        <div>
            <h3></h3>
            <div className="vehicle-picker">
                <button onClick={selectPrevVehicle} title="Previous vehicle"><img src={leftArrow} /></button>
                <div className="vehicle-wrapper">
                    {vehicle && <BasicVehicle key={vehicle.id} id={vehicle.id} data={vehicle} />}
                </div>
                <button onClick={selectNextVehicle} title="Next vehicle"><img src={rightArrow} alt="" /></button>
            </div>
        </div>
    )
}