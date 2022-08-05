import React from "react";
import "./App.css"

function Menu() {
    return (
        <nav className="navbar">
            <ul className="navul">
                <li className="navli">
                    <a className="nava" href="/">Accueil</a>
                </li>
                <li className="navli">
                    <a className="nava" href="/">Personnage</a>
                </li>
                <li className="navli">
                    <a className="nava" href="/">Ennemi</a>
                </li>
                <li className="navli">
                    <a className="nava" href="/">Fruits du démon</a>
                </li>
            </ul>
        </nav>
    )
        
    }
export default Menu;
