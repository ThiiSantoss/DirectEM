import React, { useEffect } from "react";
import NumberField from "../../../../components/number-field";
import useOxygenSaturation from "./hook";

function OxygenSaturationField({ id, onScoreChange, ...props }) {
    const {
        oxygenSaturation,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    } = useOxygenSaturation();

    useEffect(() => {
        const score = calculateNewsScore(oxygenSaturation);
        onScoreChange(score);
    }, [oxygenSaturation, calculateNewsScore, onScoreChange]);

    return (
        <NumberField
            id={id}
            value={oxygenSaturation}
            step="1"
            onChange={handleValueChange}
            validate={validateValue}
            format={parseFloat}
            {...props}
        />
    );
}

export default OxygenSaturationField;
