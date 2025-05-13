import { useState,createContext } from "react";
import { useImmer } from "use-immer";
import style from "./App.module.css";
import Navbar from "./Navbar.jsx";


export const mainContext = createContext();

function App() {
  return <MainContainer></MainContainer> 

}

function MainContainer(){
  return(
  <mainContext.Provider value={{}}>
    <div className={style.mainContainer}>
      <Navbar></Navbar>
    </div>
  </mainContext.Provider>
  )
}

export default App;
