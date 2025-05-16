import React from "react";

function Dugme(props) {
  return (
    <button onClick={() => props.degistirProp()}>
      count is {props.countState}
    </button>
  );
}

export default Dugme;
