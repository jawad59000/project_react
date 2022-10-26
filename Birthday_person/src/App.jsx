import React, { useState } from "react";
import { data } from "./data";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);
  // const [button, setButton] = useState(true);
  let s = "s";
  return (
    <main>
      <section className="container">
        <h3>
          {people.length} person{people.length < 2 ? "" : s}
        </h3>
        <List data={people} />
        {!people.length ? (
          ""
        ) : (
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            Delete All
          </button>
        )}
      </section>
    </main>
  );
};

export default App;
