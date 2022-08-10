import React from "react";

const IlesCeleste = (props) => {
    setTimeout(() => {
        props.history.push("/");
    }, 5000);

    return (
        <div className="container">
            <div className="alert-build">
                <strong>Cette page est en construction ....</strong>
                <p>
                    Vous serez redirigé vers la page d'acceuil dans quelques
                    secondes
                </p>
            </div>
        </div>
    );
};

export default IlesCeleste;
