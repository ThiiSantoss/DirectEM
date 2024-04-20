import React from "react";

function CardSection({ id, children }) {
    return (
        <section id={id} className="card-section">
            {children}
        </section>
    );
}

export default CardSection;
