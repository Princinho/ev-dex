import React from "react";
export default function Checkbox({name}) {
    return (

        <label className="container">{name}
            <input name={name} type="checkbox" />
            <span className="checkmark"></span>
        </label>
    )
}