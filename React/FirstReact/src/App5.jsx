import React from "react";

function App5() {
  function kayit(yazi) {
    setYazi(yazi);
  }

  const [yazi, setYazi] = React.useState("");

  return (
    <div>
      <input onChange={(e) => kayit(e.target.value)} />
      <p>{yazi}</p>
    </div>
  );
}

export default App5;
