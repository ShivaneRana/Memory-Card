import style from "../styles/Content.module.css";
import { mainContext } from "../App.jsx";
import { useImmer } from "use-immer";
import { createContext, useContext, useEffect, useState } from "react";
import loadingIcon from "../assets/images/loading.svg";
import { useSyncExternalStore } from "react";

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
    const randomNumber = Math.floor(Math.random() * 500);
    const context = useContext(mainContext);
    const data = useData(randomNumber);

    return (
        <button
        title={data && data.name}
        onClick={() => {
            if(data !== null){
                context.addPokemon(data.name);
            }
        }}
        >
            {data === null ? (
                <p>Loading...</p>
            ) : (

                <img src={data.sprites.other["official-artwork"].front_default}></img>
                
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
                .then((finalResult) => setData(finalResult));
        }

        return () => (ignore = true);
    }, [context.pokemonList]);

    return data;
}

export default Content;
