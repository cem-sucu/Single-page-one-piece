import React from "react";
// import WallPaper from "../assets/images/homeWallPaper.jpg";
import ocean from "../assets/images/ocean.png";
import waves from "../assets/music/ocean-waves.mp3";
import "../assets/styles/home.css";

class Home extends React.Component {
    //j'ai transfomer le component en class pour utiliser le state
    state = {
        audio: new Audio(waves),
        isPlaying: false,
    };
    //fonction pour mettre sur play ou pause en cliquant la ou l'on met le onClick
    playPause = () => {
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            this.state.audio.pause();
        } else {
            this.state.audio.play();
        }

        this.setState({ isPlaying: !isPlaying });
    };
    render() {
        return (
            /*   <div className="container">
            <img className="wallpaper" src={WallPaper} alt="wallpaper" />
        </div> */

            <div className="container-home">
                <h1 aria-label="OnePiece" onClick={this.playPause}>
                    {" "}
                </h1>
                <img className="wallpaper" src={ocean} alt="wallpaper" />
            </div>
        );
    }
}

export default Home;
