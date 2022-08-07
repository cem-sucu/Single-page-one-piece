import React from "react";
import WallPaper from "../assets/images/homeWallPaper.jpg";
import "../assets/styles/home.css";

const Home = () => {
    return (
        <div className="container">
            <img className="wallpaper" src={WallPaper} alt="wallpaper" />
        </div>
    );
};

export default Home;
