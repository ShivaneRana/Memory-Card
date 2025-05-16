import style from "../styles/Content.module.css";
import { mainContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";

function Content() {
    const context = useContext(mainContext);
    return (
        <div className={style.mainContainer}>
            <ImageHolder></ImageHolder>
        </div>
    );
}

function ImageHolder() {
    const pokemonNames = [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur",
        "Charmander",
        "Charmeleon",
        "Charizard",
        "Squirtle",
        "Wartortle",
        "Blastoise",
        "Caterpie",
        "Metapod",
        "Butterfree",
        "Weedle",
        "Kakuna",
        "Beedrill",
        "Pidgey",
        "Pidgeotto",
        "Pidgeot",
        "Rattata",
        "Raticate",
        "Spearow",
        "Fearow",
        "Ekans",
        "Arbok",
        "Pikachu",
        "Raichu",
        "Sandshrew",
        "Sandslash",
        "Nidoran♀",
        "Nidorina",
        "Nidoqueen",
        "Nidoran♂",
        "Nidorino",
        "Nidoking",
        "Clefairy",
        "Clefable",
        "Vulpix",
        "Ninetales",
        "Jigglypuff",
        "Wigglytuff",
        "Zubat",
        "Golbat",
        "Oddish",
        "Gloom",
        "Vileplume",
        "Paras",
        "Parasect",
        "Venonat",
        "Venomoth",
        "Diglett",
    ];

    const data = useData("charizard");
    let source;
    if (data) {
        source = data.sprites.back_default;
    }

    return (
        <div className={style.content}>
            <div>
                <img src={source}></img>
            </div>
        </div>
    );
}

function useData(name) {
    const [data, setData] = useState(null);
    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
                mode: "cors",
            })
                .then((data) => {
                    return data.json();
                })
                .then((result) => {
                    setData(result);
                });
        }

        return () => {
            ignore = true;
        };
    }, [name]);

    return data;
}

export default Content;
