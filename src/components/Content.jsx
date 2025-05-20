import style from "../styles/Content.module.css";
import { mainContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";
import clickSound from "../assets/sound/click.mp3";

function Content() {
    return (
        <div className={style.mainContainer}>
            <ImageHolder></ImageHolder>
        </div>
    );
}

function ImageHolder() {
    return (
        <div className={style.content}>
            <Images></Images>
            <Images></Images>
            <Images></Images>
            <Images></Images>
            <Images></Images>
            <Images></Images>
            <Images></Images>
            <Images></Images>
        </div>
    );
}

function Images() {
    const context = useContext(mainContext);
    const min = 1;
    const max = context.upperLimit.current;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let data = useData(randomNumber);

    return (
        <button
            title={data && data.name}
            onClick={(e) => {
                if (context.sound === true) {
                    const sound = new Audio(clickSound);
                    sound.play();
                }

                if (data !== null) {
                    // if the pokemonList does not have the name already.
                    if (!context.pokemonList.has(data.name)) {
                        context.addPokemon(data.name);
                        context.updateCurrentScore();
                    }

                    // if the name already exists then
                    if (context.pokemonList.has(data.name)) {
                        if (context.currentScore > context.topScore) {
                            context.updateTopScore();
                        }

                        context.clearPokemonList();
                        context.clearCurrentScore();
                    }
                }
            }}
        >
            {data === null ? (
                <p>Loading...</p>
            ) : (
                <img
                    src={data.sprites.other["official-artwork"].front_default}
                ></img>
            )}
        </button>
    );
}

function useData(id) {
    const [data, setData] = useState(null);
    const context = useContext(mainContext);

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { mode: "cors" })
                .then((result) => result.json())
                .then((finalResult) => setData(finalResult))
                .catch((err) => {
                    console.log(`Error occured: ${err.message}`);
                });
        }

        return () => (ignore = true);
    }, [context.pokemonList]);

    return data;
}

export default Content;
