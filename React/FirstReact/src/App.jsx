import React from "react";
import "./App.css";
import Blog from "./components/Blog";
const App = () => {
  return (
    <div>
      Merhaba
      <Blog
        baslik={"İlk Çağ"}
        icerik={"deneme"}
        puan={10}
        kategoriler={["Tarih", "Genel Kültür"]}
      />
    </div>
  );
};

export default App;
