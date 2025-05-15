import { useContext } from "react";
import { mainContext } from "../App.jsx";
import style from "../styles/Navbar.module.css";
import muteIcon from "../assets/images/mute.svg";
import nonMuteIcon from "../assets/images/not-mute.svg";
import resetIcon from "../assets/images/reset.svg";
import infoIcon from "../assets/images/info.svg";
import clickSound from "../assets/sound/click.mp3";

function Navbar() {
    const context = useContext(mainContext);

    return (
        <div className={style.mainContainer}>
            <h2>Memory Card</h2>
            <div className={style.buttonHolder}>
                <button
                    onClick={() => {
                        context.toggleSound();
                        if(context.sound === true){
                            const sound = new Audio(clickSound);
                            sound.play();
                        }
                    }}
                    title={context.sound ? "Mute sound" : "Unmute sound"}
                >
                    <img
                        src={context.sound ? nonMuteIcon : muteIcon}
                        alt="toggling sound effect icon"
                    ></img>
                </button>
                <button onClick={() => {
                        if(context.sound === true){
                            const sound = new Audio(clickSound);
                            sound.play();
                        }
                }} title="Reset game">
                    <img src={resetIcon} alt="reset game icon"></img>
                </button>
                <button onClick={() => {
                        if(context.sound === true){
                            const sound = new Audio(clickSound);
                            sound.play();
                        }
                }} title="Game information">
                    <img src={infoIcon} alt="information icon"></img>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
