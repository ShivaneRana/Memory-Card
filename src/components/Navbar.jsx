import { useContext } from "react";
import { mainContext } from "../App.jsx";
import style from "./styles/Navbar.module.css";
import muteIcon from "./assets/images/mute.svg";
import nonMuteIcon from "./assets/images/not-mute.svg";
import resetIcon from "./assets/images/reset.svg";
import infoIcon from "./assets/images/info.svg";

function Navbar() {
  const context = useContext(mainContext);

  return (
    <div className={style.mainContainer}>
      <h1>Memory Card</h1>
      <div className={style.buttonHolder}>
        <button title="Toggle sound effect">
          <img src={muteIcon} alt="toggling sound effect icon"></img>
        </button>
        <button title="Reset game">
          <img src={resetIcon} alt="reset game icon"></img>
        </button>
        <button title="Game information">
          <img src={infoIcon} alt="information icon"></img>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
