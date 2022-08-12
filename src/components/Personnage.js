import React from "react";
import "../assets/styles/personnage.css";
import persoData from "../data/persoData";
import luffy from "../assets/images/personnage/luffy.jpg";
import zorro from "../assets/images/personnage/zoro.jpg";
import nami from "../assets/images/personnage/nami.jpg";
import sanji from "../assets/images/personnage/sanji.jpg";
import ussop from "../assets/images/personnage/ussop.jpg";
import chopper from "../assets/images/personnage/chopper.jpg";
import robin from "../assets/images/personnage/robin.jpg";
import brook from "../assets/images/personnage/brook.jpg";
import franky from "../assets/images/personnage/franky.jpg";

const Personnage = (props) => {
    console.log(props.name);
    console.log(persoData[0].name);

    return (
        <div className="container-personnage">
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[0].name} {persoData[0].surname}
                </h2>
                <img className="imgperso" src={luffy} alt="luffy" />
                <p>Le {persoData[0].rank}</p>
                <p>Détenteur du {persoData[0].devilFruit}</p>
                <p>Recherché : {persoData[0].wanted}</p>
                <p>Prime : {persoData[0].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[1].name} {persoData[1].surname}
                </h2>
                <img className="imgperso" src={zorro} alt="zorro" />
                <p>Le {persoData[1].rank}</p>
                <p>épéiste au 3 sabres</p>
                <p>Recherché : {persoData[1].wanted}</p>
                <p>Prime : {persoData[1].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[2].name} {persoData[2].surname}
                </h2>
                <img className="imgperso" src={nami} alt="nami" />
                <p>La {persoData[2].rank}</p>
                <p>Ancienne voleuse</p>
                <p>Recherché : {persoData[2].wanted}</p>
                <p>Prime : {persoData[2].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[3].name} {persoData[3].surname}
                </h2>
                <img className="imgperso" src={sanji} alt="sanji" />
                <p>La {persoData[3].rank}</p>
                <p>Le jambe noire</p>
                <p>Recherché : {persoData[3].wanted}</p>
                <p>Prime : {persoData[3].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[4].name} {persoData[4].surname}
                </h2>
                <img className="imgperso" src={ussop} alt="ussop" />
                <p>La {persoData[4].rank}</p>
                <p>Détenteur du {persoData[4].devilFruit}</p>
                <p>Recherché : {persoData[4].wanted}</p>
                <p>Prime : {persoData[4].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[5].name} {persoData[5].surname}
                </h2>
                <img className="imgperso" src={robin} alt="robin" />
                <p>La {persoData[5].rank}</p>
                <p>Détenteur du {persoData[5].devilFruit}</p>
                <p>Recherché : {persoData[5].wanted}</p>
                <p>Prime : {persoData[5].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[6].name} {persoData[6].surname}
                </h2>
                <img className="imgperso" src={chopper} alt="chopper" />
                <p>La {persoData[6].rank}</p>
                <p>Détenteur du {persoData[6].devilFruit}</p>
                <p>Recherché : {persoData[6].wanted}</p>
                <p>Prime : {persoData[6].prime} de berrys</p>
            </div>


            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[7].name} {persoData[7].surname}
                </h2>
                <img className="imgperso" src={brook} alt="brook" />
                <p>La {persoData[7].rank}</p>
                <p>Détenteur du {persoData[7].devilFruit}</p>
                <p>Recherché : {persoData[7].wanted}</p>
                <p>Prime : {persoData[7].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {persoData[8].name} {persoData[8].surname}
                </h2>
                <img className="imgperso" src={franky} alt="franky" />
                <p>La {persoData[8].rank}</p>
                <p>Le cyborg</p>
                <p>Recherché : {persoData[8].wanted}</p>
                <p>Prime : {persoData[8].prime} de berrys</p>
            </div>
        </div>
    );
};

export default Personnage;
