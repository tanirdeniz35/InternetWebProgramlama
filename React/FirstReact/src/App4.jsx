import { useState, useEffect } from "react";
import "./App.css";

function App4() {
  const [count, degistirCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      degistirCount((count) => count + 1);
    }, 1000); // 1000 ms = 1 saniye
  }, []);

  return <div>{count}</div>;
}

export default App4;
