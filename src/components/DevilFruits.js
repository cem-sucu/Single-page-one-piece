import React from "react";
import gomu from "../assets/images/devilFruits/Gomu.jpg";
import devilFruitsData from "../data/devilFruitsData";

const DevilFruits = (props) => {
    return (
        <div className="container-personnage">
            <div className="contentpersonnage">
                <h2 className="persotitile">
                    {devilFruitsData[0].name}
                </h2>
                <img src={gomu} alt="gomu" className="imgperso" />
                <p>{devilFruitsData[0].signification}</p>
                <p>Utilisateur : {devilFruitsData[0].user}</p>
                <p>{devilFruitsData[0].utilities}</p>
                <p>Type : {devilFruitsData[0].type}</p>
            </div>
        </div>
    );
};

export default DevilFruits;