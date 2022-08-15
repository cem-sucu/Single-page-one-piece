import React from "react";
import gomu from "../assets/images/devilFruits/Gomu.jpg";
import bara from "../assets/images/devilFruits/Bara.jpg";
import awa from "../assets/images/devilFruits/Awa.jpg";
import bijo from "../assets/images/devilFruits/Bijo.jpg";
import Bomu from "../assets/images/devilFruits/Bomu.jpg";
import Doru from "../assets/images/devilFruits/Doru.jpg";
import Hana from "../assets/images/devilFruits/Hana.jpg";
import Hebi from "../assets/images/devilFruits/Hebi.jpg";
import Hito from "../assets/images/devilFruits/Hito.jpg";
import Ito from "../assets/images/devilFruits/Ito.jpg";
import Jiki from "../assets/images/devilFruits/Jiki.jpg";
import Kilo from "../assets/images/devilFruits/Kilo.jpg";
import Mera from "../assets/images/devilFruits/Mera.jpg";
import Mochi from "../assets/images/devilFruits/Mochi.jpg";
import Moku from "../assets/images/devilFruits/Moku.jpg";
import Ope from "../assets/images/devilFruits/Ope.jpg";
import Sara from "../assets/images/devilFruits/Sara.jpg";
import Sube from "../assets/images/devilFruits/Sube.jpg";
import Ushi from "../assets/images/devilFruits/Ushi.jpg";
import Uta from "../assets/images/devilFruits/Uta.jpg";
import Yami from "../assets/images/devilFruits/Yami.jpg";
import Yomi from "../assets/images/devilFruits/Yomi.jpg";
import devilFruitsData from "../data/devilFruitsData";
import "../assets/styles/fruits.css";

const DevilFruits = (props) => {
    return (
        <div className="container-fruits">
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[0].name}</h2>
                <img src={gomu} alt="gomu" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[0].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[0].user}
                </p>
                <p className="pFruit">{devilFruitsData[0].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[0].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[1].name}</h2>
                <img src={bara} alt="bara" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[1].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[1].user}
                </p>
                <p className="pFruit">{devilFruitsData[1].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[1].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[2].name}</h2>
                <img src={Ushi} alt="ushi" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[2].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[2].user}
                </p>
                <p className="pFruit">{devilFruitsData[2].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[2].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[3].name}</h2>
                <img src={awa} alt="awa" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[3].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[3].user}
                </p>
                <p className="pFruit">{devilFruitsData[3].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[3].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[4].name}</h2>
                <img src={Yami} alt="Yami" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[4].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[4].user}
                </p>
                <p className="pFruit">{devilFruitsData[4].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[4].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[5].name}</h2>
                <img src={Sara} alt="Sara" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[5].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[5].user}
                </p>
                <p className="pFruit">{devilFruitsData[5].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[5].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[6].name}</h2>
                <img src={Mera} alt="Mera" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[6].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[6].user}
                </p>
                <p className="pFruit">{devilFruitsData[6].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[6].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[7].name}</h2>
                <img src={Ope} alt="Ope" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[7].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[7].user}
                </p>
                <p className="pFruit">{devilFruitsData[7].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[7].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[8].name}</h2>
                <img src={Ito} alt="Ito" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[8].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[8].user}
                </p>
                <p className="pFruit">{devilFruitsData[8].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[8].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[9].name}</h2>
                <img src={Hana} alt="Hana" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[9].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[9].user}
                </p>
                <p className="pFruit">{devilFruitsData[9].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[9].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[10].name}</h2>
                <img src={Hito} alt="Hito" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[10].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[10].user}
                </p>
                <p className="pFruit">{devilFruitsData[10].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[10].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[11].name}</h2>
                <img src={Yomi} alt="Yomi" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[11].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[11].user}
                </p>
                <p className="pFruit">{devilFruitsData[11].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[11].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[12].name}</h2>
                <img src={Uta} alt="uta" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[12].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[12].user}
                </p>
                <p className="pFruit">{devilFruitsData[12].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[12].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[13].name}</h2>
                <img src={Hebi} alt="Hebi" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[13].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[13].user}
                </p>
                <p className="pFruit">{devilFruitsData[13].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[13].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[14].name}</h2>
                <img src={Doru} alt="Doru" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[14].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[14].user}
                </p>
                <p className="pFruit">{devilFruitsData[14].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[14].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[15].name}</h2>
                <img src={Moku} alt="Moku" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[15].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[15].user}
                </p>
                <p className="pFruit">{devilFruitsData[15].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[15].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[16].name}</h2>
                <img src={Sube} alt="Sube" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[16].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[16].user}
                </p>
                <p className="pFruit">{devilFruitsData[16].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[16].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[17].name}</h2>
                <img src={Bomu} alt="Bomu" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[17].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[17].user}
                </p>
                <p className="pFruit">{devilFruitsData[17].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[17].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[18].name}</h2>
                <img src={Kilo} alt="Kilo" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[18].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[18].user}
                </p>
                <p className="pFruit">{devilFruitsData[18].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[18].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[19].name}</h2>
                <img src={Ushi} alt="Ushi" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[19].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[19].user}
                </p>
                <p className="pFruit">{devilFruitsData[19].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[19].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[20].name}</h2>
                <img src={Jiki} alt="Jiki" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[20].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[20].user}
                </p>
                <p className="pFruit">{devilFruitsData[20].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[20].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[21].name}</h2>
                <img src={Mochi} alt="Mochi" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[21].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[21].user}
                </p>
                <p className="pFruit">{devilFruitsData[21].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[21].type}</p>
            </div>
            <div className="contentfruit">
                <h2 className="fruitTitle">{devilFruitsData[22].name}</h2>
                <img src={bijo} alt="Bijo" className="imgfruit" />
                <p className="pFruit">{devilFruitsData[22].signification}</p>
                <p className="pFruit">
                    Utilisateur : {devilFruitsData[22].user}
                </p>
                <p className="pFruit">{devilFruitsData[22].utilities}</p>
                <p className="pFruit">Type : {devilFruitsData[22].type}</p>
            </div>
        </div>
    );
};

export default DevilFruits;
