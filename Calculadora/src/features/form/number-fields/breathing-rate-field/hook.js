import { useState } from "react";

const NEWS_SCORE = {
    higher: 25,
    lower: 8,
    ranges: {
        low: { min: 9, max: 11 },
        normal: { min: 12, max: 20 },
        very_high: { min: 21, max: 24 },
    },
};

function useBrathingRate() {
    const [breathingRate, setBreathingRate] = useState(20);

    const handleValueChange = (event) => {
        const value = parseInt(event.target.value);

        setBreathingRate((_) => {
            calculateNewsScore(value);
            return value;
        });
    };

    const validateValue = (value) => value >= 0 && value !== "";

    const calculateNewsScore = (breathingRate) => {
        const { higher, lower, ranges } = NEWS_SCORE;

        if (breathingRate >= higher || breathingRate <= lower) return 3;
        else if (
            breathingRate >= ranges.very_high.min &&
            breathingRate <= ranges.very_high.max
        )
            return 2;
        else if (
            breathingRate >= ranges.low.min &&
            breathingRate <= ranges.low.max
        )
            return 1;

        return 0;
    };

    return {
        breathingRate,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    };
}

export default useBrathingRate;
