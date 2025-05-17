import style from "../styles/Content.module.css";
import { mainContext } from "../App.jsx";
import {useImmer} from "use-immer";
import { createContext,useContext, useEffect, useState } from "react";
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

function Images(){
    const [selected,setSelected] = useState(0);
    const randomNumber = Math.floor(Math.random()*500);
    const data = useData(randomNumber)

    return(
        <button title={data && data.name}>
            {data === null ? <p>Loading...</p> : <img src={data.sprites.front_default}></img>}
        </button>
    )
}

function useData(id) {
    const [data,setData] = useState(null);

    useEffect(() => {
        let ignore = false;
        if(!ignore){
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{mode:"cors"}).then(result => result.json()).then(finalResult => setData(finalResult));
        }

        return () => ignore = true;
    },[])

    return data;
}

export default Content;
