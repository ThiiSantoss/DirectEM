import { useState } from "react";

function useTotalScore() {
    const [totalScore, setTotalScore] = useState(0);
    const [extremeScore, setExtremeScore] = useState(false);

    const handleTotalScoreChange = (score, hasExtremeScore) => {
        setTotalScore(score);
        handleExtremeScore(hasExtremeScore);
    };

    const handleExtremeScore = (score) => {
        score === true ? setExtremeScore(true) : setExtremeScore(false);
    }


    return { totalScore, extremeScore, handleTotalScoreChange };
}

export default useTotalScore;
