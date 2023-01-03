
import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/Hooks/useTelegram";
import Header from "./components/Header/header";
import Button from "./components/Button/Button";

function App() {
    const {tg, onToggleButton} = useTelegram();
    useEffect(() => {
        tg.ready();
    })



  return (
    <div className="App">
        <Header />
        <br/>
        <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
