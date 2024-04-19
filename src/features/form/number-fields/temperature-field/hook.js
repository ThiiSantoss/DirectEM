import { useState } from "react";

const NEWS_SCORE = {
    higher: 39,
    lower: 35,
    ranges: {
        low: { min: 35.1, max: 36.0 },
        normal: { min: 36.1, max: 38.0 },
        high: { min: 38.1, max: 39.0 },
    },
};

function useTemperature() {
    const [temperature, setTemperature] = useState(38);

    const handleValueChange = (event) => {
        const value = parseFloat(event.target.value);

        setTemperature((_) => {
            calculateNewsScore(value);
            return value;
        });
    };

    const validateValue = (value) => value >= 0 && value !== "";

    const calculateNewsScore = (temperature) => {
        const { higher, lower, ranges } = NEWS_SCORE;

        if (temperature >= higher || temperature <= lower) {
            return 3;
        } else if (
            (temperature >= ranges.low.min && temperature <= ranges.low.max) ||
            (temperature >= ranges.high.min && temperature <= ranges.high.max)
        ) {
            return 1;
        }
        return 0;
    };

    return {
        temperature,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    };
}

export default useTemperature;
