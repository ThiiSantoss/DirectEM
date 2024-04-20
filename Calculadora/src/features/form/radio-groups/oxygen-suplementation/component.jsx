import React from "react";
import RadioButton from "../../../../components/radio-button";
import RadioGroup from "../../../../components/radio-group";
import IconAir from "../../../../assets/icons/icon-air.svg"
import IconOxygen from "../../../../assets/icons/icon-oxygen.svg"

function OxygenSuplementationGroup({onOptionChange}) {
    return (
        <RadioGroup name="oxygen-suplementation">
            <RadioButton
                id="ambience"
                text="Não"
                icon="left"
                value={0}
                defaultChecked
                onChange={(event) => onOptionChange(Number(event.target.value))}
            >
                <IconAir />
            </RadioButton>
            <RadioButton
                id="oxygen"
                text="Sim"
                icon="left"
                value={2}
                onChange={(event) => onOptionChange(Number(event.target.value))}
            >
                <IconOxygen />
            </RadioButton>
        </RadioGroup>
    );
}

export default OxygenSuplementationGroup;
