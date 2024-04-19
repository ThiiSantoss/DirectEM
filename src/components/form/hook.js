import { useState } from "react";

const useTotalScore = () => {
    const [temperatureScore, setTemperatureScore] = useState(0);
    const [heartRateScore, setHeartRateScore] = useState(0);
    const [bloodPressureScore, setBloodPressureScore] = useState(0);
    const [breathingRateScore, setBreathingRateScore] = useState(0);
    const [oxygenSaturationScore, setOxygenSaturationScore] = useState(0);
    const [consciusnessLevelScore, setConciusnessLevelScore] = useState(0);
    const [oxygenSuplementationScore, setOxygenSuplementationScore] =
        useState(0);
    const [extremeScore, setExtremeScore] = useState(false);

    const handleTemperatureScoreChange = (score) => {
        setTemperatureScore(score);
        handleExtremeScore(score);
    };

    const handleHeartRateScoreChange = (score) => {
        setHeartRateScore(score);
        handleExtremeScore(score);
    };

    const handleBloodPressureScoreChange = (score) => {
        setBloodPressureScore(score);
        handleExtremeScore(score);
    };

    const handleBreathingRateScoreChange = (score) => {
        setBreathingRateScore(score);
        handleExtremeScore(score); 
    };

    const handleOxygenSaturationScoreChange = (score) => {
        setOxygenSaturationScore(score);
        handleExtremeScore(score);
    };

    const handleConsciusnessLevelScoreChange = (score) => {
        setConciusnessLevelScore(score);
        handleExtremeScore(score);
    };

    const handleOxygenSuplementationScoreChange = (score) => {
        setOxygenSuplementationScore(score);
        handleExtremeScore(score);
    };

    const handleExtremeScore = (score) => {
        score === 3 && extremeScore === false ? setExtremeScore(true) : setExtremeScore(false); 
    };

    const getTotalScore = () => {
        return (
            temperatureScore +
            heartRateScore +
            bloodPressureScore +
            breathingRateScore +
            oxygenSaturationScore +
            consciusnessLevelScore +
            oxygenSuplementationScore
        );
    };

    return {
        temperatureScore,
        heartRateScore,
        bloodPressureScore,
        breathingRateScore,
        oxygenSaturationScore,
        consciusnessLevelScore,
        oxygenSuplementationScore,
        extremeScore,
        handleTemperatureScoreChange,
        handleHeartRateScoreChange,
        handleBloodPressureScoreChange,
        handleBreathingRateScoreChange,
        handleOxygenSaturationScoreChange,
        handleConsciusnessLevelScoreChange,
        handleOxygenSuplementationScoreChange,
        getTotalScore,
    };
};

export default useTotalScore;
