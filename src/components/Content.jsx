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
