import React from "react";

function RadioButton({ id, group, text, icon, value, defaultChecked, onChange, children }) {
    return (
        <>
            <input
                id={id}
                type="radio"
                name={group}
                value={value}
                defaultChecked={defaultChecked}
                onChange={onChange}
            />
            <label htmlFor={id} className="radio-button">
                {icon === "left" && children}
                {text}
                {icon === "right" && children}
            </label>
        </>
    );
}

export default RadioButton;
