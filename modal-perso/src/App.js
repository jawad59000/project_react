import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState(4);
  const class1 = "fullDetail";
  const class2 = "container";

  const [className, setClassName] = useState(class1);
  const [className2, setClassName2] = useState(class2);

  const phrase = [
    "Cela signifie qu'il faut tout donnez maintenant pour pouvoir profiter de la vie le plus tot possible",

    "Ne fait pas de rappel juste pour en faire, fait le avec sagesse ",

    "Cela signifie qu'il ne faut pas etre ingrat envers ce qui ton un jours aider",

    "Cela signifie que ton savoir peut te rendre plus fort, sans savoir tu n'est rien d'autre qu'un animal",
  ];
  return (
    <div className="all">
      <div className={className2}>
        <button
          className="btn"
          onClick={() => {
            setModal(!modal);

            if (!modal) setClassName2("container display");
            if (modal) {
              setClassName2("container");
            }
          }}
        >
          {!modal ? "ouvrir la modal" : "fermer la modal"}
        </button>
        {modal ? (
          <div className="modal">
            <h1>les instructions</h1>

            <h4>
              Bosse Pour ne plus avoir a bosser
              <button
                className="btn-detail"
                onClick={() => {
                  setClassName("fullDetail display");
                  setDetail(0);
                }}
              >
                detail
              </button>
            </h4>
            <h4>
              Faire des rappel avec sagesse
              <button
                className="btn-detail"
                onClick={() => {
                  setDetail(1);
                  setClassName("fullDetail display");
                }}
              >
                detail
              </button>
            </h4>
            <h4>
              Ne mord pas la main qui ta nourris
              <button
                className="btn-detail"
                onClick={() => {
                  setDetail(2);
                  setClassName("fullDetail display");
                }}
              >
                detail
              </button>
            </h4>
            <h4>
              Utilise ton savoir car c'est une arme
              <button
                className="btn-detail"
                onClick={() => {
                  setDetail(3);

                  setClassName("fullDetail display");
                }}
              >
                detail
              </button>
            </h4>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={className}>
        <h5>{phrase[detail]}</h5>
        {detail < 4 ? (
          <button
            className="btn-detail-close"
            onClick={() => {
              setClassName("fullDetail cache");
              setTimeout(() => {
                setDetail(4);
              }, 400);
            }}
          >
            close
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
