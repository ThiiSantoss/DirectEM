import { useState } from "react";

const NEWS_SCORE = {
    lower: 90,
    higher: 220,
    ranges: {
        normal: { min: 111, max: 219 },
        low: { min: 101, max: 110 },
        very_low: { min: 91, max: 100 },
    },
};

function useBloodPressure() {
    const [bloodPressure, setBloodPressure] = useState(219);

    const handleValueChange = (event) => {
        const value = parseInt(event.target.value);

        setBloodPressure((_) => {
            calculateNewsScore(value);
            return value;
        });
    };

    const validateValue = (value) => value >= 0 && value !== "";

    const calculateNewsScore = (bloodPressure) => {
        const { higher, lower, ranges } = NEWS_SCORE;

        if (bloodPressure >= higher || bloodPressure <= lower) return 3;
        else if (
            bloodPressure >= ranges.very_low.min &&
            bloodPressure <= ranges.very_low.max
        )
            return 2;
        else if (
            bloodPressure >= ranges.low.min &&
            bloodPressure <= ranges.low.max
        )
            return 1;

        return 0;
    };

    return {
        bloodPressure,
        handleValueChange,
        validateValue,
        calculateNewsScore,
    };
}

export default useBloodPressure;
