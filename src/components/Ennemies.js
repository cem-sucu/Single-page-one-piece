import React from "react";
import ennemiData from "../data/ennemiData";

const Ennemies = (props) => {
    // console.log(props);
    // console.log(ennemiData[0].name);
    return (
        <div className="container-personnage">
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[0].name} {ennemiData[0].surname}
                </h2>
                <img className="imgperso" src={""} alt="Moria" />
                <p>Le {ennemiData[0].rank}</p>
                <p>Détenteur du {ennemiData[0].devilFruit}</p>
                <p>Recherché : {ennemiData[0].wanted}</p>
                <p>Prime : {ennemiData[0].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[1].name} {ennemiData[1].surname}
                </h2>
                <img className="imgperso" src={""} alt="Arlong" />
                <p>Le {ennemiData[1].rank}</p>
                <p>épéiste au 3 sabres</p>
                <p>Recherché : {ennemiData[1].wanted}</p>
                <p>Prime : {ennemiData[1].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[2].name} {ennemiData[2].surname}
                </h2>
                <img className="imgperso" src={""} alt="Crocodile" />
                <p>La {ennemiData[2].rank}</p>
                <p>Ancienne voleuse</p>
                <p>Recherché : {ennemiData[2].wanted}</p>
                <p>Prime : {ennemiData[2].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[3].name} {ennemiData[3].surname}
                </h2>
                <img className="imgperso" src={""} alt="Shiki" />
                <p>La {ennemiData[3].rank}</p>
                <p>Le jambe noire</p>
                <p>Recherché : {ennemiData[3].wanted}</p>
                <p>Prime : {ennemiData[3].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[4].name} {ennemiData[4].surname}
                </h2>
                <img className="imgperso" src={""} alt="César" />
                <p>La {ennemiData[4].rank}</p>
                <p>Détenteur du {ennemiData[4].devilFruit}</p>
                <p>Recherché : {ennemiData[4].wanted}</p>
                <p>Prime : {ennemiData[4].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[5].name} {ennemiData[5].surname}
                </h2>
                <img className="imgperso" src={""} alt="Enel" />
                <p>La {ennemiData[5].rank}</p>
                <p>Détenteur du {ennemiData[5].devilFruit}</p>
                <p>Recherché : {ennemiData[5].wanted}</p>
                <p>Prime : {ennemiData[5].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[6].name} {ennemiData[6].surname}
                </h2>
                <img className="imgperso" src={""} alt="Eustass" />
                <p>La {ennemiData[6].rank}</p>
                <p>Détenteur du {ennemiData[6].devilFruit}</p>
                <p>Recherché : {ennemiData[6].wanted}</p>
                <p>Prime : {ennemiData[6].prime} de berrys</p>
            </div>


            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[7].name} {ennemiData[7].surname}
                </h2>
                <img className="imgperso" src={""} alt="Doflamingo" />
                <p>La {ennemiData[7].rank}</p>
                <p>Détenteur du {ennemiData[7].devilFruit}</p>
                <p>Recherché : {ennemiData[7].wanted}</p>
                <p>Prime : {ennemiData[7].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[8].name} {ennemiData[8].surname}
                </h2>
                <img className="imgperso" src={""} alt="Charlotte" />
                <p>La {ennemiData[8].rank}</p>
                <p>Le cyborg</p>
                <p>Recherché : {ennemiData[8].wanted}</p>
                <p>Prime : {ennemiData[8].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[8].name} {ennemiData[8].surname}
                </h2>
                <img className="imgperso" src={""} alt="Katakuri" />
                <p>La {ennemiData[8].rank}</p>
                <p>Le cyborg</p>
                <p>Recherché : {ennemiData[8].wanted}</p>
                <p>Prime : {ennemiData[8].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[8].name} {ennemiData[8].surname}
                </h2>
                <img className="imgperso" src={""} alt="Linlin" />
                <p>La {ennemiData[8].rank}</p>
                <p>Le cyborg</p>
                <p>Recherché : {ennemiData[8].wanted}</p>
                <p>Prime : {ennemiData[8].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[8].name} {ennemiData[8].surname}
                </h2>
                <img className="imgperso" src={""} alt="Kaido" />
                <p>La {ennemiData[8].rank}</p>
                <p>Le cyborg</p>
                <p>Recherché : {ennemiData[8].wanted}</p>
                <p>Prime : {ennemiData[8].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[8].name} {ennemiData[8].surname}
                </h2>
                <img className="imgperso" src={""} alt="Teach" />
                <p>La {ennemiData[8].rank}</p>
                <p>Le cyborg</p>
                <p>Recherché : {ennemiData[8].wanted}</p>
                <p>Prime : {ennemiData[8].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[8].name} {ennemiData[8].surname}
                </h2>
                <img className="imgperso" src={""} alt="Baggy" />
                <p>La {ennemiData[8].rank}</p>
                <p>Le cyborg</p>
                <p>Recherché : {ennemiData[8].wanted}</p>
                <p>Prime : {ennemiData[8].prime} de berrys</p>
            </div>
        </div>
    );
};

export default Ennemies;
