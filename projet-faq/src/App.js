import { useState } from "react";
import questions from "./data";
import Question from "./Question";
function App() {
  const [etat, setEtat] = useState(0);
  const randleClick = (id) => {
    setEtat((prevEtat) => {
      if (prevEtat === id) return;
      return id;
    });
  };
  return (
    <main>
      <div className="container">
        <h3></h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                {...question}
                randleClick={randleClick}
                etat={etat === question.id}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
