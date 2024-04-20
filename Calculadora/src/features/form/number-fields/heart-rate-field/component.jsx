import React, { useEffect } from "react";
import NumberField from "../../../../components/number-field";
import useHeartRate from "./hook";

function HeartRateField({ id, onScoreChange, ...props }) {
    const { heartRate, handleValueChange, validateValue, calculateNewsScore } =
        useHeartRate();

    useEffect(() => {
        const score = calculateNewsScore(heartRate);
        onScoreChange(score);
    }, [heartRate, calculateNewsScore, onScoreChange]);

    return (
        <NumberField
            id={id}
            value={heartRate}
            step="1"
            onChange={handleValueChange}
            validate={validateValue}
            format={parseFloat}
            {...props}
        />
    );
}

export default HeartRateField;
