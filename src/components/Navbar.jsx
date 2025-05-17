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
            <h2
                onClick={() => {
                    window.open(
                        "https://shivanerana.github.io/Memory-Card/",
                        "_blank",
                    );
                }}
            >
                Memory Card
            </h2>
            <div className={style.buttonHolder}>
                {/* sound button */}
                <button
                    onClick={() => {
                        context.toggleSound();
                        if (context.sound === false) {
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

                {/* reset button */}
                <button
                    onClick={() => {
                        if (context.sound === true) {
                            const sound = new Audio(clickSound);
                            sound.play();
                        }

                        context.clearPokemonList();
                    }}
                    title="Reset game"
                >
                    <img src={resetIcon} alt="reset game icon"></img>
                </button>

                {/* Game information button */}
                <button
                    onClick={() => {
                        if (context.sound === true) {
                            const sound = new Audio(clickSound);
                            sound.play();
                        }
                    }}
                    title="Game information"
                >
                    <img src={infoIcon} alt="information icon"></img>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
