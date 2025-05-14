import style from "../styles/Score.module.css";
import { mainContext } from "../App.jsx";
import { useContext } from "react";

function Score() {
    const context = useContext(mainContext);

    return (
        <div className={style.mainContainer}>
            <h3 title="Current score">
                Score: <span>{context.currentScore}</span>
            </h3>
            <h3 title="Best score">
                Best: <span>{context.topScore}</span>
            </h3>
        </div>
    );
}

export default Score;
