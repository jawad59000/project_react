import React from "react";
import { useState } from "react";
import text from "./data";

const App = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    let number = parseInt(count);
    if (count > 9) {
      number = 9;
    }
    if (count < 1) {
      number = 1;
    }

    setList(text.slice(0, number));
  };

  return (
    <div className="page">
      <div className="container">
        <div className="input">
          <p>Paragraphe:</p>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="number"
          />
          <button
            className="generator"
            onClick={() => {
              handleSubmit();
              console.log(list);
            }}
          >
            Generate
          </button>
        </div>
        <div className="lorem">
          {list.map((par, index) => {
            return <p key={index}>{par}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
