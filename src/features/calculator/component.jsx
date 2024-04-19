import React from "react";
import Card from "../../components/card";
import CardSection from "../../components/card-section";
import Display from "../display";
import Form from "../../components/form";
import useTotalScore from "../../hooks/useTotalScore";

function Calculator() {
    const { totalScore, extremeScore, handleTotalScoreChange } = useTotalScore();

    return (
        <Card>
            <Display newsScore={totalScore} extremeScore={extremeScore} />
            <CardSection id="main">
                <h1>Calculadora NEWS</h1>
                <Form onTotalScoreChange={handleTotalScoreChange} />
            </CardSection>
        </Card>
    );
}

export default Calculator;
