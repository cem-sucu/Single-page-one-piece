import React from "react";
import "../App.css";

const IlesCeleste = (props) => {
    setTimeout(() => {
        props.history.push("/");
    }, 5000);

    return (
        <div className="container">
            <div className="alert-build">
                <strong>Cette page est en cours de construction ....</strong>
                <p>
                    Vous serez redirigé vers la page d'acceuil dans quelques
                    secondes
                </p>
            </div>
        </div>
    );
};

export default IlesCeleste;
