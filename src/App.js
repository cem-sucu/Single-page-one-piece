import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Personnage from "./components/Personnage";
import Ennemies from "./components/Ennemies";
import Devil from "./components/DevilFruits";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/personnage" component={Personnage} />
                <Route path="/ennemi" component={Ennemies} />
                <Route path="/fruits-du-demon" component={Devil} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
