import Anasayfa from "./Anasayfa";
import "./App.css";
import Hakkimizda from "./Hakkimizda";
import { Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Anasayfa </Link>|<Link to="/hakkimizda">Hakkımızda </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Anasayfa></Anasayfa>}></Route>
        <Route path="/hakkimizda" element={<Hakkimizda></Hakkimizda>}></Route>
      </Routes>
    </div>
  );
}

export default App;
