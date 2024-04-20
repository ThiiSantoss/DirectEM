import React, { useEffect, useState } from "react";
import FormField from "../form-field";
import HeartRateField from "../../features/form/number-fields/heart-rate-field";
import TemperatureField from "../../features/form/number-fields/temperature-field";
import BloodPressureField from "../../features/form/number-fields/blood-pressure-field";
import BreathingRateField from "../../features/form/number-fields/breathing-rate-field";
import OxygenSaturationField from "../../features/form/number-fields/oxygen-saturation-field";
import ConciusnessLevelGroup from "../../features/form/radio-groups/conciusness-level";
import OxygenSuplementationGroup from "../../features/form/radio-groups/oxygen-suplementation";
import useTotalScore from "./hook";

function Form({ onTotalScoreChange }) {
  const {
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
  } = useTotalScore();

    useEffect(() => {
        const totalScore = getTotalScore();
        onTotalScoreChange(totalScore, extremeScore);
    }, [
        temperatureScore,
        heartRateScore,
        bloodPressureScore,
        breathingRateScore,
        oxygenSaturationScore,
        consciusnessLevelScore,
        oxygenSuplementationScore
    ]);

    return (
        <form id="news-scale-form">
            <FormField name="Temperatura (ºC)" hint="Digite apenas números.">
                <TemperatureField id="temperature" onScoreChange={handleTemperatureScoreChange} />
            </FormField>
            <FormField name="Nível de consciência" hint="Selecione uma opção.">
                <ConciusnessLevelGroup onOptionChange={handleConsciusnessLevelScoreChange} />
            </FormField>
            <hr />
            <FormField name="Frequêcia cardíaca (bpm)" hint="Digite apenas números.">
                <HeartRateField id="heart-rate" onScoreChange={handleHeartRateScoreChange} />
            </FormField>
            <FormField name="Pressão Arterial Sistólica (mmHg)" hint="Digite apenas números.">
                <BloodPressureField id="blood-pressure" onScoreChange={handleBloodPressureScoreChange} />
            </FormField>
            <hr />
            <FormField name="Frequência respiratória (irpm)" hint="Digite apenas números.">
                <BreathingRateField id="breath-rate" onScoreChange={handleBreathingRateScoreChange} />
            </FormField>
            <FormField name="Saturação do O₂ (%)" hint="Digite apenas números.">
                <OxygenSaturationField id="oxygen-saturation" onScoreChange={handleOxygenSaturationScoreChange} />
            </FormField>
            <FormField name="Usando suplementação de O₂?" hint="Selecione uma opção.">
                <OxygenSuplementationGroup onOptionChange={handleOxygenSuplementationScoreChange} />
            </FormField>
        </form>
    );
}

export default Form;
