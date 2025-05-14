import style from "../styles/Content.module.css";
import { mainContext } from "../App.jsx";
import { useContext } from "react";

function Content() {
    const context = useContext(mainContext);
    return <div className={style.mainContainer}></div>;
}

export default Content;
