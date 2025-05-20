import { useState, createContext } from "react";
import { enableMapSet } from "immer";
import { useImmer } from "use-immer";
import style from "./App.module.css";
import Navbar from "./components/Navbar.jsx";
import Score from "./components/Score.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

export const mainContext = createContext();

function App() {
    enableMapSet();
    return <MainContainer></MainContainer>;
}

function MainContainer() {
    const [sound, setSound] = useState(true);
    const [displayInfo, setDisplayInfo] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [pokemonList, updatePokemonList] = useImmer(new Set());

    function toggleSound() {
        setSound(!sound);
    }

    function updateCurrentScore() {
        setCurrentScore(currentScore + 1);
    }

    function clearCurrentScore() {
        setCurrentScore(0);
    }

    function updateTopScore() {
        setTopScore(currentScore);
    }

    function addPokemon(name) {
        updatePokemonList((draft) => {
            draft.add(name);
        });
    }

    function toggleDisplayInfo() {
        setDisplayInfo(!displayInfo);
    }

    function clearPokemonList() {
        updatePokemonList((draft) => {
            // ensure that draft clear each time
            // even when the draft is already empty
            draft.add("temp");
            draft.clear();
        });
    }

    return (
        <mainContext.Provider
            value={{
                sound,
                currentScore,
                pokemonList,
                topScore,
                displayInfo,
                clearCurrentScore,
                toggleDisplayInfo,
                toggleSound,
                updateCurrentScore,
                updateTopScore,
                addPokemon,
                clearPokemonList,
            }}
        >
            <div className={style.mainContainer}>
                <Navbar></Navbar>
                <Score></Score>
                <Content></Content>
                <Footer></Footer>
            </div>
        </mainContext.Provider>
    );
}

export default App;
