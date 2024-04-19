import { useState } from "react";

function useField({ validate, format, initialState = "" }) {
    const [value, setValue] = useState(initialState);
    const [state, setState] = useState("");

    function handleChange(event) {
        const inputValue = event.target.value;
        const formattedValue = format ? format(inputValue) : inputValue;
        const isValid = validate ? validate(inputValue) : true;

        setState(isValid ? "--complete" : "--error");
        setValue(formattedValue);
    }

    function handleBlur(event) {
        const inputValue = event.target.value;
        const isValid = validate ? validate(inputValue) : true;
        
        setState(isValid ? "--complete" : "--error");
    }

    return { value, state, handleChange, handleBlur };
}

export default useField;
