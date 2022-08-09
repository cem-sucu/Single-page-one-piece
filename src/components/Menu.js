import React from "react";
import "../App.css";
import "../assets/styles/menu.css"
import logo from "../assets/images/One-Piece-logo-remove.png";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar">
            <ul className="navul">
                <li className="navli">
                    <img className="navlogo" src={logo} alt="logo" />
                </li>
                <li className="navli">
                    <Link className="nava" to="/">
                        Accueil
                    </Link>
                </li>
                <li className="navli">
                    <NavLink className="nava" to="/personnage">
                        Personnage
                    </NavLink>
                </li>
                <li className="navli">
                    <NavLink className="nava" to="/ennemi">
                        Ennemi
                    </NavLink>
                </li>
                <li className="navli">
                    <NavLink className="nava" to="/fruits-du-demon">
                        Fruits du démon
                    </NavLink>
                </li>
                <li className="navli">
                    <NavLink className="nava" to="/îles-céleste">
                        île
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Menu;
