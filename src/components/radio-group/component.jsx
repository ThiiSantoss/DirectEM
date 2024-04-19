import React, { Children, cloneElement } from "react";

function RadioGroup({ name, children }) {
    return (
        <section className="radio-group">
            {Children.map(children,
                (child) => cloneElement(child, { group: name })
            )}
        </section>
    );
}

export default RadioGroup;
