import React from "react";
export default function Checkbox({ name, checked, handleClick }) {

    return (

        <label  style={{display:"flex",gap:"1em",fontSize:"1.5rem"}}>
            <input name={name} type="checkbox" onChange={()=>handleClick()} checked={checked} />
            <span>
                {name}
            </span>

        </label>
    )
}