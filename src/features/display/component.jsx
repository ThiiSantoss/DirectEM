import React from "react";
import CardSection from "../../components/card-section";
import useDisplay from "./hook";

const CLASSIFICATION = {
    green: "baixo",
    yellow: "médio",
    red: "alto",
};

function Display({ newsScore, extremeScore }) {
    const { defineRiskLevel } = useDisplay();
    const riskLevel = defineRiskLevel(newsScore, extremeScore);

    return (
        <CardSection id="display">
            <div className="wrapper">
                <div className={`card-section__viewer--${riskLevel}`}></div>
                <h2 className="card-section__caption">
                    Paciente com <span>{CLASSIFICATION[riskLevel]}</span> risco
                    de deterioração clínica.
                </h2>
                <h2>Pontuação na escala NEWS: {newsScore}</h2>
            </div>
        </CardSection>
    );
}

export default Display;
