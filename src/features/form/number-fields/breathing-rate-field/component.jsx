import React, { useEffect } from "react";
import NumberField from "../../../../components/number-field";
import useBreathingRate from "./hook";

function BreathingRateField({ id, onScoreChange, ...props }) {
    const {
        breathingRate,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    } = useBreathingRate();

    useEffect(() => {
        const score = calculateNewsScore(breathingRate);
        onScoreChange(score);
    }, [breathingRate, calculateNewsScore, onScoreChange]);

    return (
        <NumberField
            id={id}
            value={breathingRate}
            step="1"
            onChange={handleValueChange}
            validate={validateValue}
            format={parseFloat}
            {...props}
        />
    );
}

export default BreathingRateField;
