import React from "react";
import RadioButton from "../../../../components/radio-button";
import RadioGroup from "../../../../components/radio-group";
import IconSnooze from "../../../../assets/icons/icon-snooze.svg";
import IconAlert from "../../../../assets/icons/icon-checked.svg";

function ConciusnessLevelGroup({onOptionChange}) {
    return (
        <RadioGroup name="conciusness-level">
            <RadioButton
                id="typical-conciusness"
                text="Típico"
                icon="left"
                value={0}
                defaultChecked
                onChange={(event) => onOptionChange(Number(event.target.value))}
            >
                <IconAlert/>
            </RadioButton>
            <RadioButton
                id="reduced-conciusness"
                text="Reduzido"
                icon="left"
                value={3}
                onChange={(event) => onOptionChange(Number(event.target.value))}
            >
                <IconSnooze/>
            </RadioButton>
        </RadioGroup>
    );
}

export default ConciusnessLevelGroup;
