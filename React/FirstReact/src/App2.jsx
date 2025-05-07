import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Merhaba2 from "./Merhaba2";
import Merhaba from "./Merhaba";
function App2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const isim = "Ezgi";
  const mevcutYas = 10;

  useEffect(() => {
    console.log("componentDidMount çalıştı"); // Sayfa ilk yüklendiğinde çalışır
  }, []);

  useEffect(() => {
    console.log("Her render'da çalışır"); // Sayfa ilk yüklendiğinde çalışır
  });

  useEffect(() => {
    console.log("count değişti: ", count);
  }, [count]);

  const YasDegistir = (x) => {
    return x + 10;
  };

  return (
    <>
      <h1>
        {isim} 10 sene sonra {YasDegistir(mevcutYas)} yaşında olur
      </h1>
      <div style={{ backgroundColor: "red" }}>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="/assets/react.svg"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 - 1)}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Merhaba />
      <Merhaba2 />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App2;
