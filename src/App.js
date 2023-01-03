
import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/Hooks/useTelegram";
import Header from "./components/Header/header";

function App() {
    const {tg, onToggleButton} = useTelegram();
    useEffect(() => {
        tg.ready();
    })



  return (
    <div className="App">
        <Header />
        <br/>
        <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
