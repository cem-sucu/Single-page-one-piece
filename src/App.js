import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Personnage from "./components/Personnage";
import Ennemies from "./components/Ennemies";
import Devil from "./components/DevilFruits";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IlesCeleste from "./components/IlesCeleste";
import Profile from "./components/Profile";

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/personnage" component={Personnage} />
                <Route path="/ennemi" component={Ennemies} />
                <Route path="/fruits-du-demon" component={Devil} />
                <Route path="/îles-céleste" component={IlesCeleste} />
                <Route path="/users/:profileId" component={Profile} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
