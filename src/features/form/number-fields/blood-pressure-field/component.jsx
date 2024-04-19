import React, { useEffect } from "react";
import NumberField from "../../../../components/number-field";
import useBloodPressure from "./hook";

function BloodPressureField({ id, onScoreChange, ...props }) {
    const {
        bloodPressure,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    } = useBloodPressure();

    useEffect(() => {
        const score = calculateNewsScore(bloodPressure);
        onScoreChange(score);
    }, [bloodPressure, calculateNewsScore, onScoreChange]);

    return (
        <NumberField
            id={id}
            value={bloodPressure}
            step="1"
            onChange={handleValueChange}
            validate={validateValue}
            format={parseFloat}
            {...props}
        />
    );
}

export default BloodPressureField;
