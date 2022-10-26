import menu from "./data";
import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";

function App() {
  const allCategories = ["All", ...new Set(menu.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (categorie) => {
    const filterData = menu.filter((item) => {
      if (item.category === categorie) return item;
    });
    setMenuItems(filterData);
    if (categorie === "All") setMenuItems(menu);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menuItems={menuItems} />
    </main>
  );
}

export default App;
