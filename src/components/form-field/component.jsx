import React from "react";

function FormField({ name, hint, children }) {
    return (
        <section className="form-field">
            <label className="form-field__label">
                <span className="form-field__name">{name}</span>
                <span className="form-field__hint">{hint}</span>
            </label>
            {children}
        </section>
    );
}

export default FormField;
