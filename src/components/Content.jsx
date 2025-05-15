import style from "../styles/Content.module.css";
import { mainContext } from "../App.jsx";
import { useContext } from "react";

function Content() {
    const context = useContext(mainContext);
    return (
    <div className={style.mainContainer}>
        <ImageHolder></ImageHolder>   
    </div>
    )
}

function ImageHolder(){
    return(
        <div className={style.content}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Content;
