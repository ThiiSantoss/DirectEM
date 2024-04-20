import { useState } from "react";

const NEWS_SCORE = {
    higher: 131,
    lower: 40,
    ranges: {
        low: { min: 41, max: 50 },
        normal: { min: 51, max: 90 },
        high: { min: 91, max: 110 },
        very_high: { min: 111, max: 130 },
    },
};

function useHeartRate() {
    const [heartRate, setHeartRate] = useState(90);

    const handleValueChange = (event) => {
        const value = parseInt(event.target.value);

        setHeartRate((_) => {
            calculateNewsScore(value);
            return value;
        });
    };

    const validateValue = (value) => value >= 0 && value <= 220 && value !== "";

    const calculateNewsScore = (heartRate) => {
        const { higher, lower, ranges } = NEWS_SCORE;

        if (heartRate >= higher || heartRate <= lower) return 3;
        else if (
            heartRate >= ranges.very_high.min &&
            heartRate <= ranges.very_high.max
        )
            return 2;
        else if (
            (heartRate >= ranges.low.min && heartRate <= ranges.low.max) ||
            (heartRate >= ranges.high.min && heartRate <= ranges.high.max)
        )
            return 1;

        return 0;
    };

    return {
        heartRate,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    };
}

export default useHeartRate;
