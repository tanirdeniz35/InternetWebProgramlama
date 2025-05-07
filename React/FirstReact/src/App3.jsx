import React from "react";
import HavaDurumu from "./components/HavaDurumu";
import "./App.css";
const App = () => {
  return (
    <div className="card">
      <header>
        <HavaDurumu
          aktiflik={false}
          style={{ background: "black", color: "white" }}
          durum={"karlı"}
        />
        <HavaDurumu
          aktiflik={true}
          style={{ background: "yellow", color: "black" }}
          durum={"güneşli"}
        />
        <HavaDurumu
          aktiflik={false}
          style={{ background: "white", color: "blue" }}
          durum={"yağmurlu"}
        />
        <HavaDurumu
          aktiflik={false}
          style={{ background: "green", color: "red" }}
          durum={"bulutlu"}
        />
      </header>
    </div>
  );
};

export default App;
