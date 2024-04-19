import React, { useEffect } from "react";
import NumberField from "../../../../components/number-field";
import useTemperature from "./hook";

function TemperatureField({ id, onScoreChange, ...props }) {
    const {
        temperature,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    } = useTemperature();

    useEffect(() => {
        const score = calculateNewsScore(temperature);
        onScoreChange(score);
    }, [temperature, calculateNewsScore, onScoreChange]);

    return (
        <NumberField
            id={id}
            value={temperature}
            step="0.1"
            onChange={handleValueChange}
            validate={validateValue}
            format={parseFloat}
            {...props}
        />
    );
}

export default TemperatureField;
