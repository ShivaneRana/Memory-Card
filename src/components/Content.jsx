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
    const randomNumber = Math.floor(Math.random() * 150);
    const context = useContext(mainContext);
    let data = useData(randomNumber);

    return (
        <button
            title={data && data.name}
            onClick={() => {
                if (context.sound === true) {
                    const sound = new Audio(clickSound);
                    sound.play();
                }

                if (data !== null) {
                    context.addPokemon(data.name);
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
                    console.log(`error ${err.message} has occurred`);
                    setData(null);
                });
        }

        return () => (ignore = true);
    }, [context.pokemonList]);

    return data;
}

export default Content;
