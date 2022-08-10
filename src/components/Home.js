import React from "react";
// import WallPaper from "../assets/images/homeWallPaper.jpg";
import ocean from "../assets/images/ocean.png";
import "../assets/styles/home.css";

const Home = () => {
    return (
        /*   <div className="container">
            <img className="wallpaper" src={WallPaper} alt="wallpaper" />
        </div> */

        <div className="container-home">
            <h1 aria-label="OnePiece"> </h1>
            <img className="wallpaper" src={ocean} alt="wallpaper" />
        </div>
    );
};

export default Home;
