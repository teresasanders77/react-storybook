import React from "react";
import "./Input.css";

function Input(props) {
    const { variant = "large", placeholder = "Large", ...rest } = props;
    return (
        <div>
            <input className={`input ${variant}`} placeholder={`${placeholder}`} {...rest}></input>
        </div>
    );
}

export default Input;
