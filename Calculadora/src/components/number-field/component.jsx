import React, { useEffect } from "react";
import useField from "./hook";
import SuccessIcon from "../../assets/icons/icon-success.svg";
import ErrorIcon from "../../assets/icons/icon-error.svg";

function NumberField({ id, validate, format, step, onChange, ...props }) {
    const { value, state, handleChange, handleBlur } = useField({
        validate,
        format,
        initialState: props.value,
    });

    const handleValueChange = (e) => {
        const inputValue = e.target.value;

        if ((parseFloat(inputValue) >= 0 || inputValue === "")) {
            handleChange(e);
            onChange && onChange(e);
        }
    };

    return (
        <div id={id} className={`input-field${state}`}>
            <input
                type="number"
                value={value}
                step={step}
                onChange={handleValueChange}
                onBlur={handleBlur}
                {...props}
            />
            {state &&
                (state === "--complete" ? <SuccessIcon /> : <ErrorIcon />)}
        </div>
    );
}

export default NumberField;
