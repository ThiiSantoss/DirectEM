import { useState } from "react";

const NEWS_SCORE = {
    lower: 91,
    normal: 96,
    ranges: {
        low: { min: 94, max: 95 },
        very_low: { min: 92, max: 93 },
    },
};

function useOxygenSaturation() {
    const [oxygenSaturation, setOxygenSaturation] = useState(96);

    const handleValueChange = (event) => {
        const value = parseInt(event.target.value);

        setOxygenSaturation((_) => {
            calculateNewsScore(value);
            return value;
        });
    };

    const validateValue = (value) => value >= 0 && value <= 100 && value !== "";

    const calculateNewsScore = (oxygenSaturation) => {
        const { lower, ranges } = NEWS_SCORE;

        if (oxygenSaturation <= lower) return 3;
        else if (
            oxygenSaturation >= ranges.very_low.min &&
            oxygenSaturation <= ranges.very_low.max
        )
            return 2;
        else if (
            oxygenSaturation >= ranges.low.min &&
            oxygenSaturation <= ranges.low.max
        )
            return 1;

        return 0;
    };

    return {
        oxygenSaturation,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    };
}

export default useOxygenSaturation;
