import React from "react";
export default function VehicleDetails(props) {
    return (<div className="details"
    >
        <button onClick={() => { props.close() }}
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                fontSize: "2rem",
                fontWeight:"bold",
                borderRadius:0,
                border:0,
                width:"4rem",
                height:"4rem",
                // borderRadius:"50%",
                display:"grid",
                placeContent:"center"
            }}
        >
            X
        </button>
    </div>)
}