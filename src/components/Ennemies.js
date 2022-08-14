import React from "react";
import ennemiData from "../data/ennemiData";
import arlong from "../assets/images/ennemies/Arlong.jpg";
import cesar from "../assets/images/ennemies/cesar.jpg";
import cracker from "../assets/images/ennemies/cracker.jpg";
import croco from "../assets/images/ennemies/Crocodile.jpg";
import don from "../assets/images/ennemies/don.jpg";
import enel from "../assets/images/ennemies/enel.jpg";
import gecko from "../assets/images/ennemies/gecko-moria.jpg";
import katakuri from "../assets/images/ennemies/katakuri.jpg";
import kid from "../assets/images/ennemies/kid.jpg";
import lucci from "../assets/images/ennemies/lucci.jpg";
import shiki from "../assets/images/ennemies/shiki.jpg";
import kaido from "../assets/images/ennemies/kaido.jpg";
import baggy from "../assets/images/ennemies/baggy.jpg";
import teach from "../assets/images/ennemies/teach.jpg";
import mom from "../assets/images/ennemies/mom.jpg";

const Ennemies = (props) => {
    // console.log(props);
    // console.log(ennemiData[0].name);
    return (
        <div className="container-personnage">
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[0].name} {ennemiData[0].surname}
                </h2>
                <img className="imgperso" src={gecko} alt="Moria" />
                <p>{ennemiData[0].rank}</p>
                <p>Détenteur du {ennemiData[0].devilFruit}</p>
                <p>Recherché : {ennemiData[0].wanted}</p>
                <p>Prime : {ennemiData[0].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[1].name} {ennemiData[1].surname}
                </h2>
                <img className="imgperso" src={arlong} alt="Arlong" />
                <p>{ennemiData[1].rank}</p>
                <p>Homme poisson</p>
                <p>Recherché : {ennemiData[1].wanted}</p>
                <p>Prime : {ennemiData[1].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[2].name} {ennemiData[2].surname}
                </h2>
                <img className="imgperso" src={croco} alt="Crocodile" />
                <p>{ennemiData[2].rank}</p>
                <p>Détenteur du {ennemiData[2].devilFruit}</p>
                <p>Recherché : {ennemiData[2].wanted}</p>
                <p>Prime : {ennemiData[2].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[3].name} {ennemiData[3].surname}
                </h2>
                <img className="imgperso" src={shiki} alt="Shiki" />
                <p>{ennemiData[3].rank}</p>
                <p>Détenteur du {ennemiData[3].devilFruit}</p>
                <p>Recherché : {ennemiData[3].wanted}</p>
                <p>Prime : {ennemiData[3].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[4].name} {ennemiData[4].surname}
                </h2>
                <img className="imgperso" src={cesar} alt="César" />
                <p>{ennemiData[4].rank}</p>
                <p>Détenteur du {ennemiData[4].devilFruit}</p>
                <p>Recherché : {ennemiData[4].wanted}</p>
                <p>Prime : {ennemiData[4].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[5].name} {ennemiData[5].surname}
                </h2>
                <img className="imgperso" src={enel} alt="Enel" />
                <p>{ennemiData[5].rank}</p>
                <p>Détenteur du {ennemiData[5].devilFruit}</p>
                <p>Recherché : {ennemiData[5].wanted}</p>
                <p>Prime : {ennemiData[5].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[6].name} {ennemiData[5].surname}
                </h2>
                <img className="imgperso" src={lucci} alt="Lucci" />
                <p>{ennemiData[6].rank}</p>
                <p>Détenteur du {ennemiData[6].devilFruit}</p>
                <p>Recherché : {ennemiData[6].wanted}</p>
                <p>Prime : {ennemiData[6].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[7].name} {ennemiData[7].surname}
                </h2>
                <img className="imgperso" src={kid} alt="Eustass" />
                <p>{ennemiData[7].rank}</p>
                <p>Détenteur du {ennemiData[7].devilFruit}</p>
                <p>Recherché : {ennemiData[7].wanted}</p>
                <p>Prime : {ennemiData[7].prime} de berrys</p>
            </div>

            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[8].name} {ennemiData[8].surname}
                </h2>
                <img className="imgperso" src={don} alt="Don" />
                <p>{ennemiData[8].rank}</p>
                <p>Détenteur du {ennemiData[8].devilFruit}</p>
                <p>Recherché : {ennemiData[8].wanted}</p>
                <p>Prime : {ennemiData[8].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[9].name} {ennemiData[9].surname}
                </h2>
                <img className="imgperso" src={cracker} alt="Cracker" />
                <p>{ennemiData[9].rank}</p>
                <p>Détenteur du {ennemiData[9].devilFruit}</p>
                <p>Recherché : {ennemiData[9].wanted}</p>
                <p>Prime : {ennemiData[9].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[10].name} {ennemiData[10].surname}
                </h2>
                <img className="imgperso" src={katakuri} alt="Katakuri" />
                <p>{ennemiData[10].rank}</p>
                <p>Détenteur du {ennemiData[10].devilFruit}</p>
                <p>Recherché : {ennemiData[10].wanted}</p>
                <p>Prime : {ennemiData[10].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[11].name} {ennemiData[11].surname}
                </h2>
                <img className="imgperso" src={mom} alt="Mom" />
                <p>{ennemiData[11].rank}</p>
                <p>Détenteur du {ennemiData[11].devilFruit}</p>
                <p>Recherché : {ennemiData[11].wanted}</p>
                <p>Prime : {ennemiData[11].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[12].name} {ennemiData[12].surname}
                </h2>
                <img className="imgperso" src={kaido} alt="Kaido" />
                <p>{ennemiData[12].rank}</p>
                <p>Détenteur du {ennemiData[12].devilFruit}</p>
                <p>Recherché : {ennemiData[12].wanted}</p>
                <p>Prime : {ennemiData[12].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[13].name} {ennemiData[13].surname}
                </h2>
                <img className="imgperso" src={teach} alt="Teach" />
                <p>{ennemiData[13].rank}</p>
                <p>Détenteur du {ennemiData[13].devilFruit}</p>
                <p>Recherché : {ennemiData[13].wanted}</p>
                <p>Prime : {ennemiData[13].prime} de berrys</p>
            </div>
            <div className="contentpersonnage">
                <h2 className="persoTitle">
                    {ennemiData[14].name} {ennemiData[14].surname}
                </h2>
                <img className="imgperso" src={baggy} alt="Baggy" />
                <p>{ennemiData[14].rank}</p>
                <p>Détenteur du {ennemiData[14].devilFruit}</p>
                <p>Recherché : {ennemiData[14].wanted}</p>
                <p>Prime : {ennemiData[14].prime} de berrys</p>
            </div>
        </div>
    );
};

export default Ennemies;
