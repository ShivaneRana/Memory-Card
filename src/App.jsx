import { useState, createContext } from "react";
import { useImmer } from "use-immer";
import style from "./App.module.css";
import Navbar from "./components/Navbar.jsx";
import Score from "./components/Score.jsx";
import Footer from "./components/Footer.jsx";

export const mainContext = createContext();

function App() {
  return <MainContainer></MainContainer>;
}

function MainContainer() {
  const [sound, setSound] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  function toggleSound() {
    setSound(!sound);
  }

  function updateCurrentScore() {
    setCurrentScore(currentScore + 1);
  }

  function updateTopScore() {
    setTopScore(currentScore);
  }

  return (
    <mainContext.Provider
      value={{
        sound,
        currentScore,
        topScore,
        toggleSound,
        updateCurrentScore,
        updateTopScore,
      }}
    >
      <div className={style.mainContainer}>
        <Navbar></Navbar>
        <Score></Score>
        <Footer></Footer>
      </div>
    </mainContext.Provider>
  );
}

export default App;
