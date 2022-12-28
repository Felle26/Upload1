import React, {useState} from "react";
import Header from "./komponenten/Header";
import Main from "./komponenten/main";
import "./index.css"

function App() {
    let name = "React";
    const [zahl, setZahl] = useState(1);
    const [karte, setKarte] = useState(false);
    return (
      <div className="center container paper">
            <Header name={name} />
            <div className="row">
                <button className="btn-danger-outline" onClick={()=> setKarte(!karte)}>Karte</button>
                <button className="btn-success-outline" onClick={()=> setZahl(zahl+1)}>+1</button>
            </div>
            
            <Main nummer={zahl} inhalt="Guybrush" karte={karte} />
            <Main nummer={zahl + 1} inhalt="LeChuck" karte={karte} />
            <Main karte={karte} />
      </div>
    );
        
}

export default App;