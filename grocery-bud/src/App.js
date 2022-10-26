import React, { useState, useEffect } from "react";
import Article from "./Article";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const App = () => {
  const [flag, setFlag] = useState(false);
  const [fruits, setFruits] = useState(getLocalStorage());
  const [newFruit, setNewFruit] = useState("");
  const [id, setId] = useState(0);
  const [alert, setAlert] = useState({ show: false, msg: "", action: "" });

  console.log(alert);

  function displayAlert(show, msg, action) {
    setAlert({ show, msg, action });
    // remove alert
    setTimeout(function () {
      setAlert({ show: false, msg: "", action: "" });
    }, 2000);
  }
  const submit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();

    const fruit = {
      name: newFruit,
      id,
    };

    if (!newFruit) {
      displayAlert(true, "Veuillez mettre au moins un caractère", "danger");
      return;
    }

    setFruits([...fruits, fruit]);
    setNewFruit("");
    displayAlert(true, "Article ajouter avec succès", "success");
  };

  const handleDelete = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter((article) => {
      if (article.id !== id) return article;
    });
    setFruits(fruitsCopyUpdated);
    displayAlert(true, "Article supprimer avec succès", "success");
    setNewFruit("");
    setFlag(false);
  };

  const editValue = (e, id) => {
    e.preventDefault();
    setFruits(
      fruits.map((item) => {
        if (item.id === id) {
          return { ...item, name: newFruit };
        }
        return item;
      })
    );
    if (newFruit === "")
      return displayAlert(
        true,
        "Veuillez mettre au moins un caractère",
        "danger"
      );
    displayAlert(true, "Article modifier avec succès", "success");
    setId(null);
    setNewFruit("");
    setFlag(false);
  };

  const handleEdit = (id) => {
    const specificItem = fruits.find((item) => item.id === id);
    setNewFruit(specificItem.name);
    setFlag(true);
    setId(id);
    document.querySelector(".text").focus();
  };

  const clearList = () => {
    displayAlert(true, "empty list", "danger");
    setFruits([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(fruits));
  }, [fruits]);

  return (
    <section className="section-global">
      <section className="section-center">
        {alert.show && (
          <h3 className={`alert alert-${alert.action}`}>{alert.msg}</h3>
        )}
        <h1>Grocery bud</h1>
        <form action="submit">
          <input
            type="text"
            className="text"
            placeholder="ajouter un article"
            value={newFruit}
            onChange={(e) => setNewFruit(e.target.value)}
          />
          <button
            className="submit"
            onClick={!flag ? submit : (e) => editValue(e, id)}
          >
            {!flag ? "Submit" : "Edit"}
          </button>
        </form>

        {!fruits.length ? (
          ""
        ) : (
          <div className="list-center">
            {fruits.map((fruit, index) => {
              // const { id, name } = fruit;
              return (
                <Article
                  key={index}
                  fruit={fruit}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              );
            })}
            <button className={"delete" + " clear"} onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </section>
  );
};

export default App;
