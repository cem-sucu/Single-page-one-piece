import "./App.css";
import Community from "./components/Community";
import Personnage from "./components/Personnage";
import Tutorials from "./components/Tutorials";
import Menu from "./Menu";

function App() {
    return (
        <div className="App">
            <Menu />
            <Personnage />
            <Community />
            <Tutorials />
        </div>
    );
}

export default App;
